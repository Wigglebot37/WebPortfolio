import React from 'react'
import Everett from '../assets/everett.png';
import Quandary from '../assets/quandary.png';
import Precinct from '../assets/precinct.jpg';
import Scorch from '../assets/scorch.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#202729] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-300 '>Projects</p>
          <p className='py-6'>These are the projects I've done</p>
        </div>
        {/* Project Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project 1 */}
          <div style={{backgroundImage: `url(${Everett})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    Project Everett
                </span>
                <div className='pt-8'>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
          </div>
          {/* Project 2 */}
          <div style={{backgroundImage: `url(${Quandary})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    Quandary
                </span>
                <div className='pt-8'>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
          </div>
          {/* Project 3 */}
          <div style={{backgroundImage: `url(${Precinct})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    Precinct 11
                </span>
                <div className='pt-8'>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
          </div>
          {/* Project 4 */}
          <div style={{backgroundImage: `url(${Scorch})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    Project Scorch
                </span>
                <div className='pt-8'>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects