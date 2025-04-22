// import { useTranslations } from 'next-intl';

// import Contact from '@/components/home/contact';
// import Course from '@/components/home/course';
// import Team from '@/components/home/team';

// import '@styles/globals.css'

// export default function Home() {
//   const t = useTranslations('home');
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       {/* <div>{t('desc')}</div> */}
//       {/* 111 */}
//       <Course title={t('course.title')} description={t('course.description')} />
//       <Team />
//       <Contact />
//     </main>
//   )
// }


import Contact from '@/components/home/contact';
import Course from '@/components/home/course';
import Team from '@/components/home/team';
import Banner from '@/components/home/banner';
import TokenInfo from '@/components/home/token';
import FAQ from '@/components/home/faq';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Banner />
          <div className="grid gap-8">
            <TokenInfo />
            <Course />
            <Team />
            <FAQ />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
