import React, { useEffect } from "react";

const ImageModal = ({ isOpen, src, alt, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center p-4 backdrop-blur-lg bg-black/6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-[95vw] h-[90vh] rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all cursor-pointer hover:rotate-90 duration-300"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="h-full w-full flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-full object-contain"
            style={{
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
