import React from 'react'
import Wiggle from '../assets/wiggle.png';
import Quandary from '../assets/quandary.png';
import Precinct from '../assets/precinct.jpg';
import Scorch from '../assets/scorch.png';
import Substitute from '../assets/substitute.png';
import Suction from '../assets/suction.png';
import Website from '../assets/website.png';
import Discord from '../assets/discord.jpg';

const Projects = () => {
  return (
    <div name='projects' className='w-full min-h-screen bg-[#202729] text-[#AA644D] flex max-sm:flex-col items-center sm:justify-center pt-[120px] max-sm:pb-8 overflow-auto'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#857d77]'>Projects</p>
          <p className='text-[#d1c7a2] py-6 text-xl'>These are the projects I've done.</p>
        </div>
        {/* Project Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project 1 */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'>
            {/* Background Image (Darkened) */}
            <div 
              style={{ backgroundImage: `url(${Quandary})` }} 
              className='absolute inset-0 bg-cover bg-center brightness-50'
            ></div>
            {/* Content (Remains Bright) */}
            <div className='relative text-center'>
              <span className='text-2xl font-bold text-[#D1BFB0] tracking-wider underline' style={{ textShadow: '2px 2px 2px black' }}>Quandary</span>
              <div className='pt-8'>
                <a href='https://wigglebot.itch.io/quandary/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/Wigglebot37/Quandary/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden'>
            {/* Background Image (Darkened) */}
            <div 
              style={{ backgroundImage: `url(${Precinct})` }} 
              className='absolute inset-0 bg-cover bg-center brightness-50'
            ></div>
            {/* Content (Remains Bright) */}
            <div className='relative text-center'>
              <span className='text-2xl font-bold text-[#D1BFB0] tracking-wider underline' style={{ textShadow: '2px 2px 2px black' }}>Precinct 11</span>
              <div className='pt-8'>
                <a href='https://wigglebot.itch.io/precinct-11-pre-alpha-demo/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/Wigglebot37/Precinct-11/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden'>
            {/* Background Image (Darkened) */}
            <div 
              style={{ backgroundImage: `url(${Substitute})` }} 
              className='absolute inset-0 bg-cover bg-center brightness-50'
            ></div>
            {/* Content (Remains Bright) */}
            <div className='relative text-center'>
              <span className='text-2xl font-bold text-[#D1BFB0] tracking-wider underline' style={{ textShadow: '2px 2px 2px black' }}>Substitute Reaper</span>
              <div className='pt-8'>
                <a href='https://wigglebot.itch.io/substitute-reaper/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden'>
            {/* Background Image (Darkened) */}
            <div 
              style={{ backgroundImage: `url(${Wiggle})` }} 
              className='absolute inset-0 bg-cover bg-center brightness-50'
            ></div>
            {/* Content (Remains Bright) */}
            <div className='relative text-center'>
              <span className='text-2xl font-bold text-[#D1BFB0] tracking-wider underline' style={{ textShadow: '2px 2px 2px black' }}>Project Wiggle</span>
              <div className='pt-8'>
                <a href='https://wigglebot.itch.io/project-wiggle/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/Wigglebot37/Project-Wiggle/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden'>
            {/* Background Image (Darkened) */}
            <div 
              style={{ backgroundImage: `url(${Suction})` }} 
              className='absolute inset-0 bg-cover bg-center brightness-50'
            ></div>
            {/* Content (Remains Bright) */}
            <div className='relative text-center'>
              <span className='text-2xl font-bold text-[#D1BFB0] tracking-wider underline' style={{ textShadow: '2px 2px 2px black' }}>Suction Destruction</span>
              <div className='pt-8'>
                <a href='https://wigglebot.itch.io/suction-destruction/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/Wigglebot37/harvest-project/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 6 */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden'>
            {/* Background Image (Darkened) */}
            <div 
              style={{ backgroundImage: `url(${Scorch})` }} 
              className='absolute inset-0 bg-cover bg-center brightness-50'
            ></div>
            {/* Content (Remains Bright) */}
            <div className='relative text-center'>
              <span className='text-2xl font-bold text-[#D1BFB0] tracking-wider underline' style={{ textShadow: '2px 2px 2px black' }}>Project Scorch</span>
              <div className='pt-8'>
                <a href='https://wigglebot.itch.io/project-scorch/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/Wigglebot37/Project-Scorch/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 7 */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden'>
            {/* Background Image (Darkened) */}
            <div 
              style={{ backgroundImage: `url(${Discord})` }} 
              className='absolute inset-0 bg-cover bg-center brightness-50'
            ></div>
            {/* Content (Remains Bright) */}
            <div className='relative text-center'>
              <span className='text-2xl font-bold text-[#D1BFB0] tracking-wider underline' style={{ textShadow: '2px 2px 2px black' }}>Discord Bot</span>
              <div className='pt-8'>
                <a href='https://github.com/Wigglebot37/Discord-Wiggle-Bot/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 8 */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden'>
            {/* Background Image (Darkened) */}
            <div 
              style={{ backgroundImage: `url(${Website})` }} 
              className='absolute inset-0 bg-cover bg-center brightness-50'
            ></div>
            {/* Content (Remains Bright) */}
            <div className='relative text-center'>
              <span className='text-2xl font-bold text-[#D1BFB0] tracking-wider underline' style={{ textShadow: '2px 2px 2px black' }}>This Website</span>
              <div className='pt-8'>
                <a href='https://github.com/Wigglebot37/WebPortfolio/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>Code</button>
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