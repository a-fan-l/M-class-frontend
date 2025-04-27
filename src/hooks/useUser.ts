import { useState, useCallback } from 'react';
import { UserProfile, UpdateUserDto } from '@/types/user';
import { userApi } from '@/apis/user';
import { ApiResponse } from '@/types/api';

export const useUser = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Get user profile
    const getProfile = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response: ApiResponse<UserProfile> = await userApi.getProfile();
            if (response.success && response.data) {
                setProfile(response.data);
                return response.data;
            }
            throw new Error(response.message || 'Failed to get profile');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to get profile');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Update user profile
    const updateProfile = useCallback(async (data: UpdateUserDto) => {
        setLoading(true);
        setError(null);
        try {
            const response: ApiResponse<UserProfile> = await userApi.updateProfile(data);
            if (response.success && response.data) {
                setProfile(response.data);
                return response.data;
            }
            throw new Error(response.message || 'Failed to update profile');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update profile');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        profile,
        loading,
        error,
        getProfile,
        updateProfile,
    };
};

export default useUser;
