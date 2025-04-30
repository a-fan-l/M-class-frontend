import { 
  CourseQueryDto, 
  CreateCourseDto, 
  Course, 
  CourseDetail, 
  CourseListResponse 
} from '@/types/course';
import { fetchData } from '@/utils/fetch';

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
  getCourses: (params?: CourseQueryDto) => 
    fetchData<CourseListResponse>('/api/course/page', {
      method: 'GET',
      params,
    }),
  
  getAllCourses: () => 
    fetchData<Course[]>('/api/course/list', {
      method: 'GET',
    }),
  
  getCourseDetail: (id: string) => 
    fetchData<CourseDetail>(`/api/course/detail/${id}`, {
      method: 'GET',
    }),
  
  createCourse: (data: CreateCourseDto) => 
    fetchData<Course>('/api/course/add', {
      method: 'POST',
      body: data,
    }),
};