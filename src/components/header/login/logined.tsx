import { FC } from 'react';

export interface LoginedProps {}
const Logined: FC<LoginedProps> = () => {

  return(
    <div className="flex items-center gap-3 justify-between flex-row">
        <img
          src="/static/common/logined.svg"
          alt="logined"
          className="h-full w-full object-contain pointer-events-none"
        />
    </div>
  )
};

export default Logined;