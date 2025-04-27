export interface UpdateUserDto {
  name?: string;
  avatar?: string;
  bio?: string;
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
  token: string;
  user: UserProfile;
} 