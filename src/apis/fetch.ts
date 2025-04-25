const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

// Define custom error class for API errors
class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public response?: Response
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Define response shape
interface ApiResponse<T> {
  data: T;
  error?: string;
  status: number;
}

interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
  timeout?: number;
  signal?: AbortSignal;
}

export async function fetchApi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { params, timeout = 30000, signal, ...restOptions } = options;

  // Create abort controller for timeout
  const controller = new AbortController();
  const abortSignal = signal || controller.signal;

  // Set timeout
  const timeoutId = timeout > 0 ? setTimeout(() => controller.abort(), timeout) : null;

  // Build query string
  const queryString = params
    ? new URLSearchParams(
        Object.entries(params).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: String(value)
        }), {})
      ).toString()
    : '';

  const url = `${API_BASE_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;

  try {
    const response = await fetch(url, {
      ...restOptions,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...restOptions.headers,
      },
      signal: abortSignal,
    });

    if (timeoutId) clearTimeout(timeoutId);

    if (!response.ok) {
      throw new ApiError(
        response.status,
        `HTTP error! status: ${response.status}`,
        response
      );
    }

    const data: ApiResponse<T> = await response.json();

    if (data.error) {
      throw new ApiError(response.status, data.error);
    }

    return data.data;
  } catch (error) {
    if (timeoutId) clearTimeout(timeoutId);

    if (error instanceof Error && error.name === 'AbortError') {
      throw new ApiError(408, 'Request timeout');
    }

    if (error instanceof ApiError) {
      throw error;
    }

    console.error('API Error:', error);
    throw new ApiError(500, 'Internal server error');
  }
}