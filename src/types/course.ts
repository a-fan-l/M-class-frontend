export interface PageQueryDto {
    page?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    search?: string;
}

export interface CreateCourseDto {
    title: string;
    description: string;
    coverImage: string;
    price: number;
    duration: number;
    level: 'beginner' | 'intermediate' | 'advanced';
    tags: string[];
}

export interface Course {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    price: number;
    duration: number;
    level: 'beginner' | 'intermediate' | 'advanced';
    tags: string[];
    createdAt: string;
    updatedAt: string;
}

export interface CourseDetail extends Course {
    content: string;
    lessons: Lesson[];
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    duration: number;
    order: number;
}

export interface CourseListResponse {
    items: Course[];
    total: number;
    page: number;
    pageSize: number;
}
