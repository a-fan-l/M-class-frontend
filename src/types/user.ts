export interface UpdateUserRequest{
  name?: string;
  avatar?: string;
  bio?: string;
}

export interface NonceRequest {
  address: string;
}

export interface NonceResponse {
  nonce: string;
}

export interface LoginRequest {
  signature?: string;
  address: string
}
export interface UserProfile {
  id: string;
  address: string;
  name: string;
  avatar: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  data: any;
  success: any;
  token: string;
  user: UserProfile;
} 