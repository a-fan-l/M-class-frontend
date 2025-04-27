import { 
  PageQueryDto, 
  CreateCourseDto, 
  Course, 
  CourseDetail, 
  CourseListResponse 
} from '@/types/course';

import { api } from './fetch';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number;
  order: number;
}

// 课程相关API
export const courseApi = {
    getCourses: (params?: PageQueryDto) => 
      api.get<CourseListResponse>('/api/course/page', {
        cache: true,
        ...(params && { params }),
      }),
    
    getAllCourses: () => 
      api.get<Course[]>('/api/course/list', {
        cache: true,
      }),
    
    getCourseDetail: (id: string) => 
      api.get<CourseDetail>(`/api/course/detail/${id}`, {
        cache: true,
      }),
    
    createCourse: (data: CreateCourseDto) => 
      api.post<Course>('/api/course/add', data),
  };