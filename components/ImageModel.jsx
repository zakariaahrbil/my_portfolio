import React from "react";

const ImageModal = ({ isOpen, src, alt, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all cursor-pointer"
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
        <div className="relative w-full h-[80vh]">
          <img
            src={src}
            alt={alt}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
