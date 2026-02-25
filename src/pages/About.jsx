import React from 'react'
import { motion } from 'motion/react'
const About = () => {
  return (
    <div id='about' className="bg-[#0C0E12] min-h-screen relative pt-6 sm:pt-12 lg:pt-19 px-4 sm:px-6 lg:px-12">
      <div className='text-center'>
        <p className='relative text-yellow-400 inline-block text-lg sm:text-xl lg:text-2xl font-bold after:block after:border-b-2 after:border-yellow-400 after:w-1/2 after:mx-auto after:mt-1'>ABOUT ME</p>
      </div>
      <div className='text-[#f3f3f3] grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-5 gap-2.5 sm:gap-4 lg:gap-2.5 min-h-[50vh] mt-4 sm:mt-6 lg:mt-1'>
        <div className="lg:col-span-2 lg:row-span-5 flex items-center justify-center">
          <img src="/assets/about.png" alt="about-image" className='w-full max-w-xs sm:max-w-sm lg:max-w-none' />
        </div>
        <div className="lg:col-span-3 lg:row-span-5 lg:col-start-3 flex flex-col justify-evenly items-start gap-2 sm:gap-3 lg:gap-1 pl-0 sm:pl-2 lg:pl-2">
          <h3 className='font-semibold text-base sm:text-lg lg:text-xl'>Hi There! I'm Aditya Sharma</h3>
          <p className='font-semibold text-sm sm:text-base lg:text-lg'>Web Developer</p>
          <div className='text-sm sm:text-base lg:text-base'>
            I am a Web Developer with a strong focus on building scalable, user-friendly applications that merge clean design with efficient functionality. My expertise lies in crafting responsive front-end interfaces.
          </div>
          <div className="w-full border-collapse">
            <div className="table-row">
              <div className="table-cell font-semibold w-1/3 text-xs sm:text-sm lg:text-base">Birthday:</div>
              <div className="table-cell w-2/3 text-xs sm:text-sm lg:text-base">13 December, 2007</div>
            </div>
            <div className="table-row">
              <div className="table-cell font-semibold w-1/3 text-xs sm:text-sm lg:text-base">Email:</div>
              <div className="table-cell w-2/3 text-xs sm:text-sm lg:text-base">inspiring.passage@gmail.com</div>
            </div>
            <div className="table-row">
              <div className="table-cell font-semibold w-1/3 text-xs sm:text-sm lg:text-base">From:</div>
              <div className="table-cell w-2/3 text-xs sm:text-sm lg:text-base">Delhi, India</div>
            </div>
            <div className="table-row">
              <div className="table-cell font-semibold w-1/3 text-xs sm:text-sm lg:text-base">Language:</div>
              <div className="table-cell w-2/3 text-xs sm:text-sm lg:text-base">Hindi, English</div>
            </div>
          </div>
          <h3 className='font-bold text-base sm:text-lg lg:text-xl'>Education:</h3>
          <div className='font-semibold text-sm sm:text-base lg:text-base'>
            <p>Diploma In Computer Science, DSEU</p>
            <p>2023-2026</p>
          </div>
          <div className='font-semibold text-sm sm:text-base lg:text-base'>
            <p>Class 10th, CBSE (86%)</p>
            <p>2022-2023</p>
          </div>
          <div><motion.button whileTap={{ scale: 0.8 }} className='rounded-3xl text-[#e9e9e9] border-3 font-semibold hover:bg-yellow-700 border-yellow-400 p-1.5 text-xs sm:text-sm lg:text-base'>Download CV</motion.button></div>
        </div>
      </div>
    </div>
  )
}

export default About
/*

*/