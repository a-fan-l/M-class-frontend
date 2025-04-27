
import { UpdateUserDto, UserProfile, LoginResponse } from '@/types/user';

import { api } from './fetch';

export const userApi = {
    getNonce: (address: string) => 
        api.post<string>('/user/nonce', { address }, { cache: true }),
    
    login: (signature: string, address: string) => 
        api.post<LoginResponse>('/user/login', { signature, address }),
    
    updateProfile: (data: UpdateUserDto) => 
        api.put<UserProfile>('/user/update-profile', data),
    
    getProfile: () => 
        api.get<UserProfile>('/user/profile', { cache: true }),
  };
  