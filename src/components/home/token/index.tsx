import MetricsGrid from "./list";

const metrics = [
  { label: "Market Cap", value: 490.88, symbol: "M" },
  { label: "TVL", value: 38.60, symbol: "M" },
  { label: "Price", value: 0.009, symbol: "" },
  { label: "Fund Raised", value: 160, symbol: "M" },
];

interface TokenInfoProps {}
const TokenInfo = ({}: TokenInfoProps) => {
  return (
    <div className='w-full p-4 rounded-lg bg-[var(--section-background)] md:mb-30 md:mt-30'>
      <div className="flex items-center justify-center container mx-auto">
        {/* <span className="absolute left-0 top-0 w-[500px] h-[4px] bg-gradient-to-r from-[rgba(248,37,82,0.5)] to-transparent"></span> */}
        {/* <span className="absolute right-0 bottom-0 rotate-180 w-[500px] h-[4px] bg-gradient-to-r from-[rgba(163,255,18,0.5)] to-[rgba(21,22,37,0)]"></span> */}
        <MetricsGrid metrics={metrics} />
      </div>
    </div>
  );
};

export default TokenInfo;