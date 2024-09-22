"use client";

import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleResumeDownload = () => {
    fetch("Raj_K.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Raj_Kubal_Resume.pdf";
        alink.click();
      });
    });
  }

  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
        >
          <h1 className='text-white mb-4 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-normal md:leading-normal'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I&apos;m{" "}</span>
            <br />
            <TypeAnimation
                sequence={[
                  'Raj',
                  1000,
                  'Web Developer',
                  1000,
                  'Nextjs Developer',
                  1000,
                  'Reactjs Developer',
                  1000,
                  'Nodejs Developer',
                  1000,
                  'Full Stack Developer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
          </h1>

          <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>Frontend enthusiast making digital interactions effortless and enjoyable, delivering responsive applications with precision and style!</p>

          <div>
            {/* <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button> */}
            <button
              className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'
              onClick={handleResumeDownload}
            >
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                  Download CV
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-8 lg:mt-0'
        >
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center'>
            <Image src="/images/hero-image.png" alt="hero image" width={300} height={300} />
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default Hero