import { useAtom } from 'jotai';
import { HomeCourseCountAtom, HomeCourseListAtom } from '@/atoms/home';

export interface UseHomeProps {}
const useHome = ({}: UseHomeProps) => {
    const [courseList, setCourseList] = useAtom(HomeCourseListAtom);
    const [courseCount, setCourseCount] = useAtom(HomeCourseCountAtom);

    return {
        state: {
            courseList,
            courseCount,
        },
        actions: {
            setCourseList,
        },
    }
};

export default useHome;
