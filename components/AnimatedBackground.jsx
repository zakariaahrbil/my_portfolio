"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  const [windowWidth, setWindowWidth] = useState(0);

  // Run only on client-side
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Derive values from state instead of storing as state
  const isMobile = windowWidth < 768;
  const columns = isMobile ? 10 : 40;
  const squareCount = isMobile ? 100 : 200; // Significantly reduced count

  // Create squares only when dependencies change
  const squares = useMemo(() => {
    return Array.from({ length: squareCount }, (_, i) => ({
      id: i,
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 2,
    }));
  }, [squareCount]);

  // Early return during SSR
  if (windowWidth === 0) return null;

  return (
    <div
      className="absolute inset-0 z-0 grid overflow-hidden opacity-10"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {squares.map((square) => (
        <motion.div
          key={square.id}
          className="w-4 h-4 bg-black border-none"
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
