import MetricsGrid from "./list";

interface TokenInfoProps {
  count: number;
}
const TokenInfo = ({count}: TokenInfoProps) => {
  const typeCount = 3;
  const userCount = 1000;
  const createTime = 2025;

  return (
    <div className='w-full p-4 rounded-lg bg-[var(--section-background)] md:mb-30 md:mt-30 mt-20 mb-20'>
      <div className="flex items-center justify-center container mx-auto">
        <MetricsGrid 
          courseCount={count}
          typeCount={typeCount}
          userCount={userCount}
          createTime={createTime}
        />
      </div>
    </div>
  );
};

export default TokenInfo;