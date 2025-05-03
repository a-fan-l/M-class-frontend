import { CourseListResponse, CourseQueryDto } from '@/types/course';
import { courseApi } from '@/apis/course';

import Contact from '@/components/home/contact';
import Course from '@/components/home/course';
import Team from '@/components/home/team';
import Banner from '@/components/home/banner';
import TokenInfo from '@/components/home/token';
import FAQ from '@/components/home/faq';

// 数据获取函数
async function getCourseData(params: CourseQueryDto) {
  try {
    const data: CourseListResponse = await courseApi.getCourses(params);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function getCourseList() {
  try {
    const data = await courseApi.getAllCourses();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// 服务器组件
export default async function Home() {
  const courseData = await getCourseData({
    page: 1,
    pageSize: 10,
    keyword: '',
    category: '',
  });

  const all_course = await getCourseList();

  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Banner />
        <TokenInfo count={all_course?.length ?? 0} />
        <Course data={courseData?.items ?? []} />
        <Team />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
