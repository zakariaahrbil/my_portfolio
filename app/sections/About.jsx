'use client';
import React from "react";
import Image from "next/image";
import ImageModal from "@/components/ImageModel";

const About = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

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
        <section className="w-full flex flex-col sm:flex-row items-center sm:justify-between">
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
            what shapes my work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 - Vision */}
            <div className="bg-zinc-900 p-6 rounded-lg flex flex-col h-full">
              <div className="mb-6 h-16 w-16 flex items-center justify-center">
                {/* Eye Icon Placeholder */}
                <div className="text-4xl text-white">👁️</div>
                {/* Replace with actual icon component */}
              </div>
              <p className="text-sm opacity-75 mb-2">
                I absorb my breaks used now:
              </p>
              <p className="text-sm">
                Curiosity shapes each project — not just to build but to uncover
                & explore, and evolve ideas through what might be vital.
              </p>
            </div>

            {/* Card 2 - Patterns */}
            <div className="bg-zinc-900 p-6 rounded-lg flex flex-col h-full">
              <div className="mb-6 h-16 w-16 flex items-center justify-center">
                {/* Pattern Icon Placeholder */}
                <div className="text-4xl text-white">👁️</div>
                {/* Replace with actual icon component */}
              </div>
              <p className="text-sm opacity-75 mb-2">
                Patterns hide in plain sight.
              </p>
              <p className="text-sm">
                I look for underlying systems — restructuring data, design, or
                code into systems that make sense and predict future.
              </p>
            </div>

            {/* Card 3 - Craft */}
            <div className="bg-zinc-900 p-6 rounded-lg flex flex-col h-full">
              <div className="mb-6 h-16 w-16 flex items-center justify-center">
                {/* Tool Icon Placeholder */}
                <div className="text-4xl text-white">🔧</div>
                {/* Replace with actual icon component */}
              </div>
              <p className="text-sm opacity-75 mb-2">
                I don't just ship — I forge.
              </p>
              <p className="text-sm">
                From the smallest detail to the largest system, I care about
                quality and considering time not done until it feels right.
              </p>
            </div>

            {/* Card 4 - Growth */}
            <div className="bg-zinc-900 p-6 rounded-lg flex flex-col h-full">
              <div className="mb-6 h-16 w-16 flex items-center justify-center">
                {/* DNA Icon Placeholder */}
                <div className="text-4xl text-white">🧬</div>
                {/* Replace with actual icon component */}
              </div>
              <p className="text-sm opacity-75 mb-2">
                Everything improves — including me.
              </p>
              <p className="text-sm">
                Deep experience combined with a taste for experiment and
                infinite learning to constant and transformative growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
