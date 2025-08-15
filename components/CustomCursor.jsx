"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  const config = { damping: 18, stiffness: 120, mass: 1 };
  const cursorX = useSpring(0, config);
  const cursorY = useSpring(0, config);

  // Determine if we should enable the custom cursor (after mount, non-touch)
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const isCoarse =
        "ontouchstart" in window ||
        (typeof navigator !== "undefined" &&
          (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)) ||
        window.matchMedia("(hover: none), (pointer: coarse)").matches;

      setIsTouch(!!isCoarse);
    }
  }, []);

  const enabled = mounted && !isTouch;
  const active = enabled && hasMoved;

  // Track pointer position; mark as moved on first event
  useEffect(() => {
    if (!enabled) return;

    const handlePointerMove = (e) => {
      const x = e.clientX ?? 0;
      const y = e.clientY ?? 0;
      setMousePosition({ x, y });
      cursorX.set(x);
      cursorY.set(y);
      if (!hasMoved) setHasMoved(true);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [enabled, cursorX, cursorY, hasMoved]);

  // Hover reactions only after cursor is visible
  useEffect(() => {
    if (!active) return;

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    const clickable = document.querySelectorAll(
      'a, button, [role="button"], input[type="submit"], input[type="button"]'
    );
    clickable.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      clickable.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [active]);

  // Don’t render until non-touch and after first pointer movement
  if (!active) return null;

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
        animate={{ scale: isHovering ? 2.5 : 1 }}
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
        animate={{ scale: isHovering ? 1.2 : 1, opacity: isHovering ? 0 : 0.5 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </>
  );
}
