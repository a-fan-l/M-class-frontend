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
        {/* <div className="container mx-auto px-4 py-8"> */}
          <Banner />
          <div className="grid gap-8">
            <TokenInfo />
            <Course />
            <Team />
            <FAQ />
            <Contact />
          </div>
        {/* </div> */}
      </main>
    </div>
  );
}

export default Home;
