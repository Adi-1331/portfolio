import React from 'react'
const NavBar = () => {
  return (
    <div
    className='fixed min-w-screen z-50 top-0 flex items-center justify-between bg-[#0e0e0e] text-[#f8f8f8] px-7 py-5'>
        <h1 className='font-bold text-3xl text-yellow-400'>🌐 Portfolio</h1>
        <div className='hidden md:flex gap-4 justify-around items-center font-bold'>
            <a href='#about' className='p-2 hover:text-yellow-400 hover: cursor-pointer'>About</a>
            <a href='#skills' className='p-2 hover:text-yellow-400 hover: cursor-pointer'>Skills</a>
            <a href='#projects' className='p-2 hover:text-yellow-400 hover: cursor-pointer'>Projects</a>
            <a href='#contact' className='p-2 hover:text-yellow-400 hover: cursor-pointer'>Contact</a>
        </div>
    </div>
  )
}

export default NavBar