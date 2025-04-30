import { atom } from 'jotai';

import { CourseItemProps } from '@/components/home/course/item';

export const HomeCourseListAtom = atom<CourseItemProps[]>([]);
export const HomeCourseCountAtom = atom<number>(0);