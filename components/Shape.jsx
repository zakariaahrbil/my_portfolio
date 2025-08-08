import React from "react";

export default function Shape({ svg, text }) {
  return (
    <div className="max-w-lg bg-gradient-to-b from-white/20 to-black rounded-lg py-4 sm:px-6 px-2 space-y-4 sm:space-y-6 overflow-hidden  ">
      <img src={svg} className={`sm:w-24 sm:h-24 w-16 h-16 `} alt="Shape" />
      <p className="text-sm max-sm:text-[0.6rem] font-light max-w-[18rem]">
        {text}
      </p>
    </div>
  );
}
