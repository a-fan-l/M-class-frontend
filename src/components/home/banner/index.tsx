import React from "react";

import Info from "./info";
import PathDrawing from "./test";
import PathMorphing from "./test2";

const Banner: React.FC = () => {
  return (
    <div className="w-full md:mb-45 md:mt-45 container mx-auto">
      <div className="container">
        <div className="relative w-full">
          <div className="flex flex-row items-center justify-between">
              <Info/>
              {/* <PathDrawing /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;