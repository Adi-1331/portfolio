import React from 'react'
import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";
import { MdMail } from "react-icons/md";

const Hero = () => {
  return (
    <div className='relative bg-[url("/assets/bg-hero.jpg")] bg-center bg-cover gap-3 min-h-screen text-center flex flex-col items-center justify-center px-4'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/65'></div>
      {/* Content */}
      <div className='relative z-10 text-amber-50 w-full max-w-2xl'>
        <div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Hi, I am <span className='text-yellow-400'>Aditya Sharma</span></h1>
        </div>
        <div className='text-sm sm:text-lg lg:text-2xl mt-4 sm:mt-6 space-y-2 sm:space-y-3'>
          <h3>I am a web developer. I can provide clean code and perfect design.</h3>
          <h3>I also make website more interactive with web animations.</h3>
        </div>
        <div className='flex gap-4 sm:gap-6 justify-center items-center mt-6 sm:mt-8'>
          <a
            href="https://www.linkedin.com/in/aditya-sharma-37a880291/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin size={24} className='sm:size-7 lg:size-7' color="#0A66C2" />
          </a>

          <a href="mailto:inspiring.passage@gmail.com">
            <MdMail size={24} className='sm:size-7 lg:size-7' color="#EA4335" />
          </a>


          <a
            href="https://github.com/adi-1331"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub size={24} className='sm:size-7 lg:size-7' color="#f5f5f5" />
          </a>

        </div>
      </div>
    </div>
  )
}

export default Hero