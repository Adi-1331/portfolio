import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className="bg-[#0C0E12] min-h-screen relative pt-19 pl-12 pr-12">
      <div className='text-center'>
        <p className='relative text-yellow-400 inline-block text-xl font-bold after:block after:border-b-2 after:border-yellow-400 after:w-1/2 after:mx-auto after:mt-1'>My Skills</p>
      </div>
      <div className='flex flex-wrap gap-4 items-center justify-evenly text-white mt-4 text-center'>
        <div>
          <div>
            <img className='size-23' src="/assets/html.svg" alt="HTML" />
            <p>HTML</p>
          </div>
          <div>
            <img className='size-23' src="/assets/css.svg" alt="CSS" />
            <p>CSS</p>
          </div>
        </div>
         <div>
          <div>
            <img className='size-23' src="/assets/javascript.svg" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div>
            <img className='size-23 invert' src="/assets/express.svg" alt="Express.js" />
            <p>Express.js</p>
          </div>
          </div>
          <div>
          <div>
            <img className='size-23' src="/assets/reactjs.svg" alt="React.js" />
            <p>React.js</p>
          </div>
          <div>
            <img className='size-23' src="/assets/nodejs.svg" alt="Node.js" />
            <p>Node.js</p>
          </div>
        </div>
        <div>
          <div>
            <img className='size-23' src="/assets/github.svg" alt="Github" />
            <p>Github</p>
          </div>
           <div>
            <img className='size-23' src="/assets/tailwind.svg" alt="Tailwind CSS" />
            <p>Tailwind CSS</p>
          </div>
        </div>
        <div className="flex flex-col items-center flex-wrap justify-center gap-1">
          <img className='size-80' src="/assets/skills.png" alt="Skill-Img" />
            <p className='font-mono text-white'>"Coding isn’t just about writing<br/> lines of code — it’s about solving<br/> problems, creating experiences,<br/> and bringing ideas to life."</p>
          <div>____</div>
        </div>
      </div>
    </div>
  )
}

export default Skills