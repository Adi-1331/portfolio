import React from 'react'

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Crypto Price Tracker',
      image: 'assets/crypto.png',
      description: 'Real-time cryptocurrency price tracking with live market updates',
      url:'https://github.com/Adi-1331/crypto-price-tracker'
    },
    {
      id: 2,
      title: 'Memory Card Game',
      image: 'assets/memory.png',
      description: 'Interactive memory matching game with multiple difficulty levels',
      url:'https://github.com/Adi-1331/memory-card-game'
    },
    {
      id: 3,
      title: 'Task Manager',
      image: 'assets/task.png',
      description: 'Full-featured task management with organize and prioritize features',
      url:'https://github.com/Adi-1331/task-manager'
    }
  ]

  return (
     <div id='projects' className="bg-[#0C0E12] min-h-screen relative pt-19 pl-12 pr-12 pb-12">
      <div className='text-center mb-12'>
        <p className='relative text-yellow-400 inline-block text-xl font-bold after:block after:border-b-2 after:border-yellow-400 after:w-1/2 after:mx-auto after:mt-1'>My Projects</p>
      </div>
      <div className='flex flex-wrap text-center items-center justify-center gap-8'>
        {projects.map((project) => (
          <div key={project.id} className='w-full max-w-xs'>
            <a href={project.url} target="_blank">
              <div className='relative overflow-hidden rounded-lg h-64 group'>
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src={project.image} 
                alt={project.title} 
              />
              <div className='absolute inset-0 bg-black/80  bg-opacity-85 flex flex-col justify-center items-center opacity-100 group-hover:opacity-0 transition-opacity duration-500'>
                <h3 className='text-yellow-400 text-xl font-bold mb-3'>{project.title}</h3>
                <p className='text-gray-300 text-sm px-4'>{project.description}</p>
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project