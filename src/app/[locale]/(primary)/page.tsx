import { FC } from 'react';

import Contact from '@/components/home/contact';
import Course from '@/components/home/course';
import Team from '@/components/home/team';
import Banner from '@/components/home/banner';
import TokenInfo from '@/components/home/token';
import FAQ from '@/components/home/faq';
import { userApi } from '@/apis/user';
import { NonceRequest } from '@/types/user';
import { courseApi } from '@/apis/course';
import { CourseListResponse, CourseQueryDto } from '@/types/course';

async function getData({ address }: NonceRequest) {
  try {
    const data = await userApi.getNonce({ address: address });
    return data.nonce;
  } catch (error) {
    console.error('Error fetching data:', error);
    return '';
  }
}

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

export interface HomeProps {}
const Home:FC<HomeProps> = async () => {
  // const address = "0x4a95739cf360C916E67D064BAdC21b1bfbfa6Fbe"; // 这里可以从其他地方获取地址
  // const data = await getData({ address });
  const courseData = await getCourseData({
    page: 1,
    pageSize: 10,
    keyword: '',
    category: '',
  });

  const all_course = await getCourseList();

  console.log(courseData?.meta, courseData?.items, '🍌2');
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

export default Home;