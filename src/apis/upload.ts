import { UploadResponse } from '@/types/upload';
import { fetchData } from '@/utils/fetch';

export const uploadApi = {
  uploadFile: (file: File, onProgress?: (progress: number) => void) => {
    const formData = new FormData();
    formData.append('file', file);

    return fetchData<UploadResponse>('/api/upload', {
      method: 'POST',
      body: formData,
      headers: {},
    });
  },

  uploadImage: (file: File, onProgress?: (progress: number) => void) => {
    const formData = new FormData();
    formData.append('image', file);

    return fetchData<UploadResponse>('/upload/image', {
      method: 'POST',
      body: formData,
      headers: {},
    });
  },

  uploadVideo: (file: File, onProgress?: (progress: number) => void) => {
    const formData = new FormData();
    formData.append('video', file);

    return fetchData<UploadResponse>('/upload/video', {
      method: 'POST',
      body: formData,
      headers: {},
    });
  },
};
