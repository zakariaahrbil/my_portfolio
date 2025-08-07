"use client";
import React from "react";
import Image from "next/image";
import ImageModal from "@/components/ImageModel";
import { images } from "@/constants/images";
import Shape from "@/components/Shape";

const About = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const content = [
    {
      svg: images.svg1,
      text: "I ask why before I ask how. Curiosity drives every project I start — not just to build, but to understand, explore, and evolve ideas into something meaningful.",
    },
    {
      svg: images.svg2,
      text: "Patterns hide in plain sight. I seek clarity beyond complexity — transforming data, design, or code into systems that make sense and feel intuitive.",
    },
    {
      svg: images.svg3,
      text: "I don’t just ship — I shape. From the smallest detail to the overall experience, I care about quality and consistency. It’s not done until it’s done right.",
    },
    {
      svg: images.svg4,
      text: "Everything improves — including me. I treat every project as a chance to grow, experiment, and refine. Learning is constant, and transformation is the goal.",
    },
  ];

  return (
    <section
      id="about"
      className="sm:min-h-screen w-[95%] max-w-8xl mx-auto  max-sm:mt-30"
    >
      <div className="container mx-auto">
        <div className="flex flex-row md:items-start items-center justify-between mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium mb-8 md:mb-0 tracking-tighter">
            About Me
          </h2>

          <div
            className="sm:w-48 sm:h-48 w-24 h-20  relative cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src="/me.png"
              alt="Zakaria Ahrbil"
              fill
              className="object-cover rounded-md max-sm:rounded-full hover:opacity-90 transition-opacity"
            />

            <ImageModal
              isOpen={isModalOpen}
              src="/me.png"
              alt="Zakaria Ahrbil"
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
        <section className="w-full flex flex-col lg:flex-row items-center lg:justify-between">
          <video
            src="/eye.mp4"
            className="sm:max-w-xl w-full "
            autoPlay
            muted
            loop
          />
          <p className="text-sm md:text-2xl sm:max-w-2xl max-w-[80%]  text-justify font-light">
            I'm Zakaria Ahrbil, a creative developer and designer studying
            Software Engineering. Through the myth of Zalmoxis, I channel code
            and design into tools of transformation — from digital experiences
            to intelligent systems.
          </p>
        </section>

        {/* What Shapes My Work Section */}
        <div>
          <h3 className="text-2xl md:text-4xl font-light mb-8 mt-12 tracking-tighter">
            What shapes my work
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl">
                {
                    content.map((item, index) => (
                        <Shape svg={item.svg} text={item.text} key={index} />
                    ))
                }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
