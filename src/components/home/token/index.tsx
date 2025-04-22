
import MetricsGrid from "./list";

const metrics = [
  { label: "Market Cap", value: "$490.88M" },
  { label: "TVL", value: "$38.60M" },
  { label: "Price", value: "$0.009" },
  { label: "Fund Raised", value: "$160M" },
];

interface TokenInfoProps {}
const TokenInfo = ({}: TokenInfoProps) => {
  return (
    <div className='opacity-500 w-full bg-transparent'>
      <div className="relative flex items-center justify-center mt-18 mb-30">
        <span className="absolute left-0 top-0 w-[500px] h-[4px] bg-gradient-to-r from-[rgba(248,37,82,0.5)] to-transparent"></span>
        <span className="absolute right-0 bottom-0 rotate-180 w-[500px] h-[4px] bg-gradient-to-r from-[rgba(163,255,18,0.5)] to-[rgba(21,22,37,0)]"></span>
        <MetricsGrid metrics={metrics} />
      </div>
    </div>
  );
};

export default TokenInfo;