import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-gray-900 text-white">
      <div className='text-center mb-12'>
        <p className='relative text-yellow-400 inline-block text-xl font-bold after:block after:border-b-2 after:border-yellow-400 after:w-1/2 after:mx-auto after:mt-1'>Contact Me</p>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact