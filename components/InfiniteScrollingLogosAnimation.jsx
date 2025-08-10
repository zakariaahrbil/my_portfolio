"use client";
import { devLogos } from "@/constants/skills";
import { motion } from "framer-motion";
import React from "react";

const InfiniteScrollingLogosAnimation = () => {
  return (
    <motion.div
      initial={{
        
        opacity: 0,
        filter: "blur(8px)",
      }}
      whileInView={{
        
        opacity: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      }}
      className=" py-5 lg:mt-16 md:mt-10 mt-4 "
    >
      <div className="py-4 flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-zinc-950 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:content-['']">
        <motion.div
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex flex-none gap-16 pr-16 "
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {devLogos.map((elmt, idx) => (
                <div key={idx} className=" bg-black cursor-pointer ">
                  <img
                    src={elmt.icon}
                    name={elmt.name}
                    className="sm:h-22 h-10 w-auto flex-none hover:mix-blend-luminosity mix-blend-normal "
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InfiniteScrollingLogosAnimation;
