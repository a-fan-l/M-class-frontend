import { ApiResponse } from "@/types/api";

// 请求配置接口
interface RequestConfig extends Omit<RequestInit, 'cache'> {
  timeout?: number;
  retry?: number;
  cache?: boolean;
  onProgress?: (progress: number) => void;
}

// 请求缓存
const requestCache = new Map<string, { data: any; timestamp: number }>();

// 请求超时时间（毫秒）
const DEFAULT_TIMEOUT = 10000;
// 请求重试次数
const DEFAULT_RETRY = 3;
// 缓存过期时间（毫秒）
const CACHE_EXPIRY = 5 * 60 * 1000;

// 请求拦截器
const requestInterceptors: ((config: RequestConfig) => RequestConfig)[] = [];
// 响应拦截器
const responseInterceptors: ((response: Response) => Response)[] = [];

// 添加请求拦截器
export function addRequestInterceptor(interceptor: (config: RequestConfig) => RequestConfig) {
  requestInterceptors.push(interceptor);
}

// 添加响应拦截器
export function addResponseInterceptor(interceptor: (response: Response) => Response) {
  responseInterceptors.push(interceptor);
}

// 取消请求的控制器
const abortControllers = new Map<string, AbortController>();

// API 客户端类
export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  }

  private async request<T>(
    endpoint: string,
    method: string,
    data?: any,
    options: Partial<RequestConfig> = {}
  ): Promise<ApiResponse<T>> {
    const requestId = `${endpoint}-${JSON.stringify({ method, data, options })}`;
    
    // 检查缓存
    if (options.cache && method === 'GET') {
      const cached = requestCache.get(requestId);
      if (cached && Date.now() - cached.timestamp < CACHE_EXPIRY) {
        return { success: true, data: cached.data, message: "success" };
      }
    }

    // 创建取消控制器
    const controller = new AbortController();
    abortControllers.set(requestId, controller);

    try {
      // 应用请求拦截器
      let config: RequestConfig = {
        method,
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      };

      for (const interceptor of requestInterceptors) {
        config = interceptor(config);
      }

      const url = `${this.baseUrl}${endpoint}`;

      // 设置超时
      const timeout = config.timeout || DEFAULT_TIMEOUT;
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => {
          controller.abort();
          reject(new Error("请求超时"));
        }, timeout);
      });

      // 设置重试
      let retryCount = 0;
      const maxRetries = config.retry ?? DEFAULT_RETRY;

      while (retryCount <= maxRetries) {
        try {
          const { cache, onProgress, ...fetchOptions } = config;
          const response = await Promise.race([
            fetch(url, {
              ...fetchOptions,
              body: data ? JSON.stringify(data) : undefined,
            }),
            timeoutPromise,
          ]);

          // 应用响应拦截器
          let processedResponse = response;
          for (const interceptor of responseInterceptors) {
            processedResponse = interceptor(processedResponse);
          }

          // 处理进度
          if (onProgress && response.body) {
            const reader = response.body.getReader();
            const contentLength = +(response.headers.get("Content-Length") || 0);
            let receivedLength = 0;

            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              if (value) {
                receivedLength += value.length;
                onProgress((receivedLength / contentLength) * 100);
              }
            }
          }

          const responseData = await response.json();

          if (!response.ok) {
            throw new Error(responseData.message || "请求失败");
          }

          // 缓存响应
          if (options.cache && method === 'GET') {
            requestCache.set(requestId, {
              data: responseData,
              timestamp: Date.now(),
            });
          }

          return {
            success: true,
            data: responseData as T,
            message: "success",
          };
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") {
            throw error;
          }
          if (retryCount === maxRetries) {
            throw error;
          }
          retryCount++;
          // 指数退避重试
          await new Promise((resolve) => setTimeout(resolve, Math.pow(2, retryCount) * 1000));
        }
      }

      throw new Error("请求失败");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "未知错误";
      console.error(`API请求错误: ${errorMessage}`, {
        endpoint,
        method,
        data,
        options,
        error,
      });
      return {
        success: false,
        message: errorMessage,
      };
    } finally {
      abortControllers.delete(requestId);
    }
  }

  get<T>(endpoint: string, options: Partial<RequestConfig> = {}) {
    return this.request<T>(endpoint, 'GET', undefined, options);
  }

  post<T>(endpoint: string, data?: any, options: Partial<RequestConfig> = {}) {
    return this.request<T>(endpoint, 'POST', data, options);
  }

  put<T>(endpoint: string, data?: any, options: Partial<RequestConfig> = {}) {
    return this.request<T>(endpoint, 'PUT', data, options);
  }

  delete<T>(endpoint: string, options: Partial<RequestConfig> = {}) {
    return this.request<T>(endpoint, 'DELETE', undefined, options);
  }

  patch<T>(endpoint: string, data?: any, options: Partial<RequestConfig> = {}) {
    return this.request<T>(endpoint, 'PATCH', data, options);
  }
}

// 创建默认的 API 客户端实例
export const api = new ApiClient();

// 取消请求
export function cancelRequest(requestId: string) {
  const controller = abortControllers.get(requestId);
  if (controller) {
    controller.abort();
    abortControllers.delete(requestId);
  }
}

// 清除缓存
export function clearCache() {
  requestCache.clear();
}
