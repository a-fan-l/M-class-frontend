
import { 
    UpdateUserRequest, 
    UserProfile, 
    LoginResponse, 
    LoginRequest, 
    NonceRequest 
} from '@/types/user';

import { api } from './fetch';

export const userApi = {
    getNonce: (params: NonceRequest) => 
        api.post<string>('/api/user/nonce', { ...params }, { cache: true }),
    
    login: (params: LoginRequest) => 
        api.post<LoginResponse>('/api/user/login', { ...params }),
    
    updateProfile: (params: UpdateUserRequest) => 
        api.put<UserProfile>('/api/user/update-profile', params),
    
    getProfile: () => 
        api.get<UserProfile>('/api/user/profile', { cache: true }),
};
  