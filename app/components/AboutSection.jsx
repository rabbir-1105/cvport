"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image'; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FaMusic, FaSearch, FaCamera, FaDumbbell } from 'react-icons/fa';
import { FaBriefcase, FaGraduationCap} from 'react-icons/fa';


import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className='list-none pl-2 space-y-2'>
        <li className='flex items-center gap-2'>
          <FaHtml5 className='text-orange-600' /> HTML.
        </li>
        <li className='flex items-center gap-2'>
          <FaCss3Alt className='text-blue-500' /> CSS.
        </li>
        <li className='flex items-center gap-2'>
          <FaJs className='text-yellow-400' /> JavaScript.
        </li>
        <li className='flex items-center gap-2'>
          <FaReact className='text-cyan-400' /> React (Basic).
        </li>
        <li className='flex items-center gap-2'>
          <SiNextdotjs className='text-black' /> Next.js (Basic).
        </li>
        <li className='flex items-center gap-2'>
          <SiTailwindcss className='text-sky-400' /> Tailwind CSS (Basic).
        </li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "Education",
    content: (
       <ul className="space-y-3 text-white pl-2">
      <li className="flex items-start gap-3">
        <FaGraduationCap className="text-purple-500 mt-1" />
        <span>
          University of Institute of Information and Communication Technology.
        </span>
      </li>
    </ul>
    )
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="space-y-3 text-white pl-2">
      <li className="flex items-start gap-3">
        <FaBriefcase className="text-blue-500 mt-1" />
        <span>
          <strong>KOREA-ASEAN DIGITAL ACADEMY (KADA)</strong> — Class B: Full Stack Development (Training).
        </span>
      </li>
    </ul>
    )
  },
  {
    title: "Interests",
    id: "Interests",
    content: (
      <ul className="space-y-3 text-white pl-2">
      <li className="flex items-center gap-3">
        <FaMusic className="text-pink-500" />
        Like listening to music.
      </li>
      <li className="flex items-center gap-3">
        <FaSearch className="text-yellow-400" />
        Find information from the internet.
      </li>
      <li className="flex items-center gap-3">
        <FaCamera className="text-purple-400" />
        Like to take pictures.
      </li>
      <li className="flex items-center gap-3">
        <FaDumbbell className="text-green-400" />
        Do some exercise sometimes.
      </li>
    </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
      <Image 
          src="/about-image1.jpg"          
          alt="About me" 
          width={500} 
          height={500} 
          className="rounded-lg object-cover"
          style={{
            filter: 'sepia(10%) brightness(1.05) contrast(1.05) saturate(1.2)',
          }}
        />

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-pink-700 mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am a junior frontend developer with a passion for creating interactive and responsive web applications. 
            I have experience working with JavaScript, React, Node.js, HTML, CSS, and Git. 
            I am a quick learner and always looking to expand my knowledge and skill set. 
            I am excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Interests")}
              active={tab === "Interests"}
            >
              Interests
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
