import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaItchIo } from 'react-icons/fa'
import { FiFolder, FiUser, FiSend, FiHome } from 'react-icons/fi'
import Logo from '../assets/logo-yellow-new.png'

const Navbar = ({ currentSection, setCurrentSection }) => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const sections = [
    { name: 'home', icon: <FiHome className={`h-6 w-6 text-white group-hover:scale-150 transition-transform duration-200 origin-top`}/>, label: 'home' },
    { name: 'about', icon: <FiUser className={`h-6 w-6 text-white group-hover:scale-150 transition-transform duration-200 origin-top`}/>, label: 'about' },
    { name: 'projects', icon: <FiFolder className={`h-6 w-6 text-white group-hover:scale-150 transition-transform duration-200 origin-top`}/>, label: 'projects' },
    { name: 'contact', icon: <FiSend className={`h-6 w-6 text-white group-hover:scale-150 transition-transform duration-200 origin-top`}/>, label: 'contact' },
  ];
  return (
    <div className='fixed w-full h-[80px] flex justify-between py-4 px-4 bg-[#311c35] text-white'> 
        <div className='cursor-pointer hover:rotate-90 transition-transform duration-500'>
            <img src={Logo} alt="Logo" style={{ width: '50px' }} onClick={() => setCurrentSection('home')} />
        </div>

        {/* Normal Menu */}
        <ul className='hidden md:flex'>
            {sections.map((section) => (
                <li key={section.name} className='relative group px-[40px]'
                onMouseEnter={() => setHoveredSection(section.name)}
                onMouseLeave={() => setHoveredSection(null)}>
                    {/* Top of bookmark */}
                    <span className={`absolute left-1/2 transform -translate-x-1/2
                        inline-block px-4 py-4 border-t-4 border-b-[22px] border-x-[1px]
                        bg-blue-800 border-blue-800 group-hover:border-b-[65px]
                        group-hover:border-x-[7px] transition-all duration-200 origin-top
                        ${currentSection === section.name && hoveredSection === null ? 'border-b-[46px]' : ''}
                        ${hoveredSection !== null ? 'border-b-[22px]' : ''}`}>
                        {section.icon}
                    </span>

                    <span className={`absolute left-1/2 transform -translate-x-1/2
                        inline-block px-4 py-4 border-blue-300
                        bg-transparent border-x-4 border-t-4
                        transition-all duration-200 origin-top
                        ${currentSection !== section.name && hoveredSection !== section.name ? 'w-[58px] h-[82px]' : ''}
                        ${currentSection === section.name && hoveredSection === null ? 'w-[58px] h-[106px]' : ''}
                        ${currentSection === section.name && hoveredSection !== null && hoveredSection !== section.name ? 'w-[58px] h-[82px]' : ''}
                        ${hoveredSection === section.name ? 'w-[70px] h-[125px]' : ''}`}
                        onClick={() => setCurrentSection(section.name)}/>

                    <span className={`absolute left-1/2 transform rotate-180 -translate-x-1/2 -bottom-[34px] w-0 h-0 
                        border-l-[29px] border-l-transparent
                        border-r-[29px] border-r-transparent
                        border-t-[18px] border-t-[#202729]
                        group-hover:-bottom-[77px] group-hover:border-t-[23px]
                        group-hover:border-r-[35px] group-hover:border-l-[35px]
                        transition-all duration-200 ease-in-out pointer-events-none
                        ${currentSection === section.name && hoveredSection === null ? '-bottom-[58px]' : ''}
                        ${hoveredSection !== null ? '-bottom-[34px]' : ''}`}>
                    </span>
                </li>
            ))}
        </ul>

        {/* Menu button */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

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