import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaItchIo} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo-yellow-new.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#311c35] text-white'> 
        <div className='cursor-pointer hover:'>
            <Link to="home" smooth={true} duration={500}>
                <img src={Logo} alt="Logo" style={{width: '50px'}} />
            </Link>
        </div>

        {/* Normal Menu */}
        <ul className='hidden md:flex'>
            <li className='relative group'>
                <Link className='inline-block px-2 py-2' to="about" smooth={true} duration={500}>
                    About
                </Link>
                <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] bg-blue-500 w-0 group-hover:w-3/5 transition-all duration-300 ease-in-out pointer-events-none'/>
            </li>
            <li className='relative group'>
                <Link className='inline-block px-2 py-2' to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
                <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] bg-blue-500 w-0 group-hover:w-3/5 transition-all duration-300 ease-in-out pointer-events-none'/>
            </li>
            <li className='relative group'>
                <Link className='inline-block px-2 py-2' to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
                <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] bg-blue-500 w-0 group-hover:w-3/5 transition-all duration-300 ease-in-out pointer-events-none'/>
            </li>
            <li className='relative group'>
                <Link className='inline-block px-2 py-2' to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
                <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] bg-blue-500 w-0 group-hover:w-3/5 transition-all duration-300 ease-in-out pointer-events-none'/>
            </li>
        </ul>

        {/* Menu button */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#202729] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        Instagram <FaInstagram size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        Itch.io <FaItchIo size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar