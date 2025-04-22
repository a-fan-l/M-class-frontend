import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import LoadingThreeDotsJumping from "./title";

const Info: React.FC = () => {
  const charVariants: Variants = {
    jump: {
      y: -30,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col justify-center h-full space-y-6">
      {/* <LoadingThreeDotsJumping text="BOOST YOUR CRYPTO PROJECTS" /> */}
      <h2 className="text-white font-bold text-center leading-tight md:text-5xl xs:text-3xl">
        BOOST YOUR CRYPTO PROJECTS
      </h2>
      <p className="text-gray-400 text-center md:text-xl xs:text-sm items-center">
        The next generation gaming ecosystem for IGOs and NFT market
        Secure crypto solutions by blockchain technology
        The next generation gaming ecosystem for IGOs and NFT market
        Secure crypto solutions by blockchain technology
        The next generation gaming ecosystem for IGOs and NFT market
        Secure crypto solutions by blockchain technology
      </p>
      <div className="flex justify-center space-x-4 pt-10">
        <Button
          className="bg-[#A3FF12] text-black hover:bg-[#A3FF12]/90"
        >
          VIEW PROJECTS
        </Button>
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white/10"
        >
          APPLY PROJECT
        </Button>
      </div>
    </div>
  );
};

export default Info;