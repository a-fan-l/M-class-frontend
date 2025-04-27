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
      api.get<CourseListResponse>('/course/page', {
        cache: true,
        ...(params && { params }),
      }),
    
    getAllCourses: () => 
      api.get<Course[]>('/course/list', {
        cache: true,
      }),
    
    getCourseDetail: (id: string) => 
      api.get<CourseDetail>(`/course/detail/${id}`, {
        cache: true,
      }),
    
    createCourse: (data: CreateCourseDto) => 
      api.post<Course>('/course/add', data),
  };