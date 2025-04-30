export interface CourseQueryDto {
    page?: number;
    pageSize?: number;
    keyword?: string;
    category?: string;
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

export interface FileInfo {
    id: string;
    size: number;
    title: string;
    mimetype: string;
}

export interface Course {
    id: number;
    name: string;
    category: string;
    description: string;
    price: string;
    duration: number;
    imgInfo: FileInfo;
    fileInfo: FileInfo;
    createdAt: string;
    updatedAt: string;
    imgUrl: string;
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
    meta: {
        total: number;
        page: number;
        pageSize: number;
    }
}
