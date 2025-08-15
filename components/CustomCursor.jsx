"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  const config = { damping: 18, stiffness: 120, mass: 1 };
  const cursorX = useSpring(0, config);
  const cursorY = useSpring(0, config);

  useEffect(() => {
    // Handle mouse movement
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Handle hover effects
    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);

    // Find all clickable elements to add hover effect
    const clickableElements = document.querySelectorAll(
      'a, button, [role="button"], input[type="submit"], input[type="button"]'
    );

    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

 

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });

     
    };
  }, []);

  return (
    <>
     
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 bg-[#FFE9D0] rounded-full pointer-events-none mix-blend-difference z-90"
        style={{
          x: cursorX,
          y: cursorY,
        translateX: "-10px",
        translateY: "-10px",
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 28,
          mass: 0.5,
          delay: 0.2,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none mix-blend-difference z-80"
        style={{
          translateX: mousePosition.x - 20,
          translateY: mousePosition.y - 20,
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />
    </>
  );
}
