"use client";
import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Software Engineering",
      institution: "National School of Applied Sciences",
      period: "2023 - 2026",
      location: "Agadir",
    },
    {
      degree: "Preparatory Cycle",
      institution: "National School of Applied Sciences",
      period: "2021 - 2023",
      location: "Agadir",
    },
    {
      degree: "Electrical & Mechanical Engineering",
      institution: "Faculty of Science and Technology",
      period: "2020 - 2021",
      location: "Tanger",
    },
    {
      degree: "Baccalaureate in Mechanical Science and Technology",
      institution: "Ibn Soulaimane Rasmouki High School",
      period: "2018 - 2020",
      location: "Tiznit",
    },
  ];

  return (
    <section
      id="education"
      className="sm:min-h-screen w-[95%] max-w-8xl mx-auto mt-30 relative"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium mb-16 tracking-tighter">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-y-16 gap-y-8 px-4">
          {educationData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-white text-black  px-2 py-1 mb-2 w-fit">
                <span className="font-medium sm:text-lg">{item.degree}</span>
              </div>
              <h3 className="text-md font-light">{item.institution}</h3>
              <p className="text-sm sm:font-light opacity-80">
                {item.period} | {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
