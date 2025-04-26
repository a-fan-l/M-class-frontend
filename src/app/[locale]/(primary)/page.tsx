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
          <Banner />
          {/* <div className="grid gap-8"> */}
            <TokenInfo />
            <Course />
            <Team />
            <FAQ />
            <Contact />
          {/* </div> */}
      </main>
    </div>
  );
}

export default Home;
