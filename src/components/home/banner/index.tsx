import React from "react";

import Info from "./info";
import Wrap from "./wrap";

const Banner: React.FC = () => {
  return (
    <div className="w-full md:mb-30 md:mt-30 container mx-auto">
      <div className="banner-container">
        <div className="relative w-full">
          <div className="flex flex-row justify-between gap-10">
              <div className="w-1/2 justify-start">
                <Info/>
              </div>
              <div className="w-1/2 flex justify-center">
                <Wrap />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;