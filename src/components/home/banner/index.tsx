import React from "react";

import Info from "./info";

const Banner: React.FC = () => {
  return (
    <div className="w-full md:mb-45 md:mt-45">
      <div className="container mx-auto px-4">
        <div className="relative w-full">
          <div className="relative">
            <div className="flex flex-row items-center justify-center">
              <Info/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;