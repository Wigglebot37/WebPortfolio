import React, { useEffect } from 'react';
import Profile from '../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaInstagram, FaItchIo } from 'react-icons/fa'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
      <div name='about' className='w-full min-h-screen bg-[#202729] text-[#AA644D] flex max-sm:flex-col items-center sm:justify-center pt-[130px] pb-12 overflow-auto'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 items-center'>
          {/* Left Text Section */}
          <div className='text-4xl font-bold sm:text-right'>
            <p className='inline border-b-4 border-[#857d77]'>About</p>
            <br/><br/>
            <p className='text-[#d1c7a2] text-xl sm:text-3xl'>I've been working on software projects since 2019 and enjoy learning new tools & languages.
                I am particularly good with the Gamemaker Studio 2 engine, but also like to branch out.</p>
            <br/>
            <ul className='flex justify-center sm:justify-end gap-8 mt-4'>
                <li className='w-[60px] h-[60px] flex justify-between items-center hover:scale-125 duration-300 bg-[#0A66C2] rounded-md'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/andrew-hudson-ah37/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[60px] h-[60px] flex justify-between items-center hover:scale-125 duration-300 bg-[#333333] rounded-md'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Wigglebot37' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[60px] h-[60px] flex justify-between items-center hover:scale-125 duration-300 bg-[#E1306C] rounded-md'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.instagram.com/wigglybot/' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram size={30}/>
                    </a>
                </li>
                <li className='w-[60px] h-[60px] flex justify-between items-center hover:scale-125 duration-300 bg-[#FA5C5C] rounded-md'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://wigglebot.itch.io' target='_blank' rel='noopener noreferrer'>
                        <FaItchIo size={30}/>
                    </a>
                </li>
            </ul>
          </div>
          {/* Right Image Section */}
          <div className='flex justify-center'>
            <img src={Profile} alt="Profile"
            className='w-[225px] sm:w-[350px] border-4 border-[#857d77] rounded-lg
                hover:scale-105 transition-transform duration-300'/>
          </div>
        </div>
      </div>
    );
};

export default About