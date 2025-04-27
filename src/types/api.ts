export interface ApiResponse<T> {
    success: boolean;    // 请求是否成功
    data?: T;            // 泛型数据，根据具体接口返回不同的数据类型
    message: string;     // 响应消息
}