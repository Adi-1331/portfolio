import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xzdjprke");

  if (state.succeeded) {
    return (
      <div id="contact" className="min-h-175 py-16 bg-gray-900 text-white flex flex-col justify-center">
        <div className='text-center mb-12'>
          <p className='relative text-yellow-400 inline-block text-xl font-bold after:block after:border-b-2 after:border-yellow-400 after:w-1/2 after:mx-auto after:mt-1'>Contact Me</p>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-md text-center p-6 bg-gray-800 rounded">
              <p className="text-green-400 text-lg font-semibold">Thanks for your message! I'll get back to you soon.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className="min-h-175 py-16 bg-gray-900 text-white flex flex-col justify-center">
      <div className='text-center mb-12'>
        <p className='relative text-yellow-400 inline-block text-xl font-bold after:block after:border-b-2 after:border-yellow-400 after:w-1/2 after:mx-auto after:mt-1'>Contact Me</p>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={4} 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact