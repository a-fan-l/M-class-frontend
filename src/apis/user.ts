import { 
    UpdateUserRequest,  
    LoginRequest, 
    NonceRequest,
    NonceResponse, 
} from '@/types/user';

console.log('proxy route loaded');

export const userApi = {
    getNonce: (params: NonceRequest) => 
        fetch('/api/proxy/user/nonce', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params),
        }),
    
    login: (params: LoginRequest) => 
        fetch('/api/proxy/user/login', {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params),
        }),
    
    updateProfile: (params: UpdateUserRequest) => 
        fetch('/api/proxy/user/update-profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params),
        }).then(res => res.json()),
    
    getProfile: () => 
        fetch('/api/proxy/user/profile', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json()),
};
  