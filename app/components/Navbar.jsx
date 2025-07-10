"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from "./Navlink";

const navLink = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3'>

        {/* Left side - Logo */}
        <Link
          href="/"
          className='text-2xl md:text-3xl  text-pink-700 font-semibold'
        >
          PORTFOLIO
        </Link>

        {/* Right side - Menu links */}

        <div className='flex space-x-6' id='Home'>
          {navLink.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className='text-white relative transition duration-300 hover:text-[#C71585] after:content-[""] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#C71585] hover:after:w-full after:transition-all after:duration-300'
            >
              {link.title}
            </a>
          ))}
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
