interface LoginResponseDto {
    user: UserResponseDto;
    token: string; // JWT Token
}

interface UserResponseDto {
    id: string;
    address: string;
    username?: string;
    title?: string;
    description?: string;
    avatar?: {
        id: string;
        url: string;
    };
}

interface NonceResponseDto {
    nonce: string; // 随机生成的 nonce
}

interface LoginDto {
    signature: string; // 签名
    address: string; // 钱包地址
}
