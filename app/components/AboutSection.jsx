"use client";
import React,{useTransition, useState} from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
    import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
    
import TabButton from './TabButton';

const TAB_DATA =[
    
    {
      title: "Skills",
      id: "Skills",
      content: (
        <ul className='list-none pl-2 space-y-2'>
          <li className='flex items-center gap-2'>
            <FaHtml5 className='text-orange-600' /> HTML
          </li>
          <li className='flex items-center gap-2'>
            <FaCss3Alt className='text-blue-500' /> CSS
          </li>
          <li className='flex items-center gap-2'>
            <FaJs className='text-yellow-400' /> JavaScript
          </li>
          <li className='flex items-center gap-2'>
            <FaReact className='text-cyan-400' /> React (Basic)
          </li>
          <li className='flex items-center gap-2'>
            <SiNextdotjs className='text-black' /> Next.js (Basic)
          </li>
          <li className='flex items-center gap-2'>
            <SiTailwindcss className='text-sky-400' /> Tailwind CSS (Basic)
          </li>
        </ul>
      )
    },
    
    
    {
        title: "Education",
        id: "Education",
        content:(
            <ul className='list-disc pl-2'>
                <li>University of Institute of Information and Communication Technology</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "Experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>KOREA-ASEAN DIGITAL ACADEMY(KADA)
                    Class B:Full STACK Development(training)
                </li>
            </ul>
        )
    }
]
const AboutSection = () => {
    const [tab, setTap] =useState("Skills");
    const [isPending, startTransition ] =useTransition();

    const handleTabChange = (id) =>{
        startTransition(() =>{
            setTap(id);
        });
    };
  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:gap-16 sm;py-16 '>
        <Image src="/images/about-image1.png" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
                i am a junior frontend developer with a passion for creating interactive and responsive web application. i have experience working with javascript,react,node.js,HTML,CSS,and Git. i am a quick learner ang i am always looking to expand my knowledge and skill set.  i am excited to work with others to create amazing applications.               
            </p>
            <div className='flex flex-row justify-start mt-8'> 
                <TabButton 
                selectTab={() => handleTabChange("Skills")} 
                active={tab === "Skills"} >
                    {""}
                    Skills{""}
                </TabButton>
                          
                <TabButton 
                selectTab={() => handleTabChange("Education")} 
                active={tab === "Education"} >
                    {""}
                    Education{""}
                </TabButton>
                <TabButton 
                selectTab={() => handleTabChange("Experience")} 
                active={tab === "Experience"} >
                    {""}
                    Experience{""}
                </TabButton>                    
            </div>
            <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
