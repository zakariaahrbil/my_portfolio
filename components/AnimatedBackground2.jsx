"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground2() {
  const [squares, setSquares] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    
     const squareCount = isMobile ? 500 : 440;
     const newSquares = Array.from({ length: squareCount }, (_, i) => ({
       id: i,
       delay: Math.random() * 8,
       duration: 4 + Math.random() * 2,
     }));

    setSquares(newSquares);}

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [isMobile]);

  return (
    <div
      className="absolute inset-0 z-0 grid overflow-hidden opacity-10 "
      style={{
        gridTemplateColumns: isMobile
          ? "repeat(10, minmax(0, 1fr))" // 10 columns for mobile (10×10 grid)
          : "repeat(40, minmax(0, 1fr))", // 40 columns for desktop (40×10 grid)
      }}
    >
      {squares.map((square) => (
        <motion.div
          key={square.id}
          className="w-4 h-4 bg-black border-none rounded-full"
          animate={{
            backgroundColor: ["#000000", "#ffffff", "#000000"],
            boxShadow: [
              "0 0 0 rgba(255, 255, 255, 0)",
              "0 0 15px rgba(255, 255, 255, 0.6)",
              "0 0 0 rgba(255, 255, 255, 0)",
            ],
          }}
          transition={{
            duration: square.duration,
            delay: square.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />
      ))}
    </div>
  );
}
