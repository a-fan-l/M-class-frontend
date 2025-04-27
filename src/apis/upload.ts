
import { UploadResponse } from '@/types/upload';

import { api } from './fetch';

export const uploadApi = {
  uploadFile: (file: File, onProgress?: (progress: number) => void) => {
    const formData = new FormData();
    formData.append('file', file);

    return api.post<UploadResponse>('/upload', formData, {
      onProgress,
      headers: {},
    });
  },

  uploadImage: (file: File, onProgress?: (progress: number) => void) => {
    const formData = new FormData();
    formData.append('image', file);

    return api.post<UploadResponse>('/upload/image', formData, {
      onProgress,
      headers: {},
    });
  },

  uploadVideo: (file: File, onProgress?: (progress: number) => void) => {
    const formData = new FormData();
    formData.append('video', file);

    return api.post<UploadResponse>('/upload/video', formData, {
      onProgress,
      headers: {},
    });
  },
};
