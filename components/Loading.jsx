"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

function Loading() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const displayText = useTransform(rounded, (value) => `${value}%`);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   setShow(true);
    // }, 2000);

    const animation = animate(count, 100, {
      duration: 2,
      ease: "easeInOut",
      delay: 0,
    });

    return animation.stop;
  }, [count]);

  return (
    <div className="fixed inset-0 flex overflow-hidden bg-[#FFE9D0] h-screen w-screen">
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={index}
          className="w-[20vw] bg-gradient-to-b from-black to-[#261400] h-screen relative"
          initial={{ y: "-100vh" }}
          animate={{
            y: "0",
            transition: {
              duration: 1,
              delay: index * 0.2,
              ease: "backIn",
            },
          }}
        />
      ))}
      {show && (
        <div className="absolute w-screen h-screen z-10 mix-blend-difference flex flex-col items-center justify-center">
          <img src="/logo.svg" alt="Logo" className="sm:w-28 w-22 mb-2" />
          <motion.p className="text-4xl  text-white">{displayText}</motion.p>
        </div>
      )}
    </div>
  );
}

export default Loading;
