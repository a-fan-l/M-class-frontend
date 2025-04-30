import { 
    UpdateUserRequest, 
    UserProfile, 
    LoginResponse, 
    LoginRequest, 
    NonceRequest, 
    NonceResponse
} from '@/types/user';
import { fetchData } from '@/utils/fetch';

export const userApi = {
    getNonce: (params: NonceRequest) => 
        fetchData<NonceResponse>('/api/user/nonce', {
            method: 'POST',
            body: params,
        }),
    
    login: (params: LoginRequest) => 
        fetchData<LoginResponse>('/api/user/login', {
            method: 'POST',
            body: params,
        }),
    
    updateProfile: (params: UpdateUserRequest) => 
        fetchData<UserProfile>('/api/user/update-profile', {
            method: 'PUT',
            body: params,
        }),
    
    getProfile: () => 
        fetchData<UserProfile>('/api/user/profile', {
            method: 'GET',
        }),
};
  