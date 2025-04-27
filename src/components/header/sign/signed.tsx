import { FC } from 'react';

import logined from '@static/common/logined.svg';

export interface SignedProps {}
const Signed: FC<SignedProps> = () => {

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

export default Signed;