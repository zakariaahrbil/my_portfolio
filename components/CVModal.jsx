"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CVModal = ({ show, onClose }) => {
  return (
    <AnimatePresence >
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="rounded-2xl py-12 sm:px-16 px-12 bg-white/10 backdrop-blur-sm flex flex-col items-center gap-8 relative max-sm:max-w-[310px] min-h-[220px] "
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.35,
            }}
          >
            <button
              className="absolute -top-2 cursor-pointer -right-4 bg-white rounded-full px-2 text-black text-2xl font-bold hover:opacity-60 focus:outline-none"
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center ">
              Choose the language
            </h2>
            <div className="flex gap-6">
              <a
                href="/Zakaria-ahrbil-francais.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-[#222] text-white rounded-full text-lg font-medium hover:bg-[#444] transition cursor-pointer flex flex-col items-center"
              >
                <img src="./france.svg" alt="French" className="mb-1 w-8 h-8" />
                French
              </a>
              <a
                href="/Zakaria-ahrbil-english.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-[#222] text-white rounded-full text-lg font-medium hover:bg-[#444] transition cursor-pointer flex flex-col items-center"
              >
                <img
                  src="./united.svg"
                  alt="English"
                  className="mb-1 w-8 h-8"
                />
                English
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;
