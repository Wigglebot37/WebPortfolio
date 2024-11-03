import React from 'react'
import Github from '../assets/github.png';
import ReactImg from '../assets/react.png';
import Javascript from '../assets/javascript.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#202729] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-purple-300 '>Tools</p>
          <p className='py-4'>These are what I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto py-4' src={Github} alt="Github" />
            <p className='my-4'>Github</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto py-4' src={ReactImg} alt="React" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto py-4' src={Javascript} alt="JavaScript" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto py-4' src={Node} alt="NodeJS" />
            <p className='my-4'>NodeJS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto py-4' src={Tailwind} alt="Tailwind" />
            <p className='my-4'>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills