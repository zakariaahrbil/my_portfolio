"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "@/constants/images";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false); // Start with menu open
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section

  const menuLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Dev", href: "#development" },
    { name: "Design", href: "#design" },
    { name: "Posters", href: "#posters" },
    { name: "Contact-me", href: "#contact" },
  ];

  // Detect if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint

      // Close menu by default on mobile
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const sectionIds = menuLinks.map((link) => link.href.replace("#", ""));
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px 0px -60% 0px", // Trigger when section is 40% from top
      threshold: 0.2,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Mobile menu
  if (isMobile) {
    return (
      <nav className="fixed bottom-0 right-0 left-0 top-0 z-10 pointer-events-none">
        {/* Mobile Full-Screen Menu */}
        <AnimatePresence className="pointer-events-auto">
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/10 backdrop-blur-md z-80 flex flex-col items-center justify-center pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.ul className="flex flex-col items-center gap-6 p-0 m-0 list-none ">
                {menuLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-white text-xl"
                  >
                    <a
                      href={link.href}
                      className={`text-white hover:text-gray-300 transition-colors ${
                        activeSection === link.href.replace("#", "")
                          ? "font-medium text-2xl"
                          : "font-light opacity-50"
                      }`}
                      onClick={toggleMenu} // Close menu when a link is clicked
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Button - Positioned above the fullscreen menu */}
        <div
          className="fixed bottom-8 right-8  z-90 pointer-events-auto"
          onClick={toggleMenu}
        >
          <div className="p-[0.06rem] bg-gradient-to-b from-[#ffffff] to-[#2D2D2D] rounded-full">
            <div className="p-4 bg-[#191919] rounded-full cursor-pointer">
              <img
                src={isOpen ? images.close : images.menu}
                alt={isOpen ? "Close Menu" : "Open Menu"}
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Desktop menu
  return (
    <nav className="fixed bottom-8 right-8 z-50 overflow-hidden">
      <motion.div
        className="p-[0.06rem] bg-gradient-to-b from-[#ffffff] to-[#2D2D2D] rounded-full"
        initial={{ width: isOpen ? "auto" : "3.8rem" }}
        animate={{ width: isOpen ? "auto" : "3.8rem" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`bg-[#191919] rounded-full flex items-center ${
            isOpen ? "justify-between px-8" : "justify-center"
          } py-4`}
        >
          <AnimatePresence initial={false} mode="sync">
            {isOpen && (
              <motion.ul
                className="flex items-center gap-4 m-0 p-0 list-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                {menuLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="text-white whitespace-nowrap text-lg"
                  >
                    <a
                      href={link.href}
                      className={`text-white hover:text-gray-300 transition-colors ${
                        activeSection === link.href.replace("#", "")
                          ? "font-medium"
                          : "font-light opacity-50"
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <div
            className={`cursor-pointer flex items-center justify-center ${
              isOpen ? "ml-6" : ""
            }`}
            onClick={toggleMenu}
          >
            <img
              src={isOpen ? images.close : images.menu}
              alt={isOpen ? "Close Menu" : "Open Menu"}
              className="h-8 w-8"
            />
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
