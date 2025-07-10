"use client";
import React from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Text section */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={['Mayly', 1000, 'Junior Frontend Developer', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am an Information Communication Technology Branch student.
          </p>

          {/* Icon Stack */}
          <div className="flex justify-center sm:justify-start gap-8 mt-8 text-5xl text-gray-700">
            <FaHtml5 className="hover:text-orange-500 transition-transform duration-300 hover:scale-110" />
            <FaCss3Alt className="hover:text-blue-500 transition-transform duration-300 hover:scale-110" />
            <FaJs className="hover:text-yellow-400 transition-transform duration-300 hover:scale-110" />
            <FaReact className="hover:text-cyan-400 transition-transform duration-300 hover:scale-110" />
            <SiNextdotjs className="hover:text-black transition-transform duration-300 hover:scale-110" />
            <SiTailwindcss className="hover:text-sky-400 transition-transform duration-300 hover:scale-110" />
          </div>
        </div>

        {/* Image section */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
  <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-[#181818]">
  <Image
  src="/blob.png"
  alt="My blob"
  width={300}
  height={300}
  style={{
    filter: 'sepia(100%) saturate(300%) hue-rotate(-10deg) contrast(1.1) brightness(0.9)',
  }}
/>

  </div>
</div>
      </div>
    </section>
  );
};

export default HeroSection;
