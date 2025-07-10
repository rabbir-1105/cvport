import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope, } from 'react-icons/fa';

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id='contact'>
      <div className='flex flex-col items-center justify-center text-white'>
        <h2 className='text-4xl font-bold text-pink-700 mb-4'>Contact</h2>
        <p className='text-[#ADB7BE] mb-6 text-center'>
          I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
       
        <div className='flex justify-center items-center gap-6'>
          <a
            href='https://www.facebook.com/may.ghindavong/'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-[#18191E] hover:bg-[#33353F] p-4 rounded-full transition duration-300'
          >
            <FaFacebookF className='text-blue-500 text-xl' />
          </a>

          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-[#18191E] hover:bg-[#33353F] p-4 rounded-full transition duration-300'
          >
            <FaInstagram className='text-pink-500 text-xl' />
          </a>
          <a
            href='mailto:maychindavong1102@gmail.com'
            className='bg-[#18191E] hover:bg-[#33353F] p-4 rounded-full transition duration-300'
          >
            <FaEnvelope className='text-red-400 text-xl' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
