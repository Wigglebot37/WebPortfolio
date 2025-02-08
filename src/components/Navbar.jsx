import React, {useState} from 'react'
import { FiFolder, FiUser, FiSend, FiHome } from 'react-icons/fi'

const Navbar = ({ currentSection, setCurrentSection }) => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    { name: 'home', icon: <FiHome className={`h-6 w-6 text-white sm:group-hover:scale-150 transition-transform duration-200 origin-top`}/>, label: 'home' },
    { name: 'about', icon: <FiUser className={`h-6 w-6 text-white sm:group-hover:scale-150 transition-transform duration-200 origin-top`}/>, label: 'about' },
    { name: 'projects', icon: <FiFolder className={`h-6 w-6 text-white sm:group-hover:scale-150 transition-transform duration-200 origin-top`}/>, label: 'projects' },
    { name: 'contact', icon: <FiSend className={`h-6 w-6 text-white sm:group-hover:scale-150 transition-transform duration-200 origin-top`}/>, label: 'contact' },
  ];

  const sectionBorderColors = {
    home: '#7A9C96', // Green
    about: '#486B7F', // Blue
    projects: '#D1BFB0', // Grey
    contact: '#BB474F', // Red
  };

  return (
    <div className='fixed w-full h-[80px] max-sm:justify-center flex justify-between py-4 px-4 bg-[#392b35] text-white'> 
        {/* Bar Menu */}
        <ul className='flex'>
            {/* Fullscreen white hover background */}
            <span className={`fixed bg-[#bbb9ba] top-[80px] bottom-0 left-0 right-0
                duration-300 backdrop-blur-md transition-all pointer-events-none
                ${hoveredSection !== null && hoveredSection !== currentSection ? 'opacity-85' : 'opacity-0'}
                max-sm:hidden`}/>
            <span className={`fixed max-sm:hidden max-sm:border-t-4 sm:border-4 top-[100px] bottom-[20px] left-[20px] right-[20px] pointer-events-none`}
            style={{
                borderColor: sectionBorderColors[hoveredSection || currentSection],
                transition: "border-color 0.3s ease-in-out"
            }}/>
            {sections.map((section) => (
                <li key={section.name} className='relative group px-[40px]'
                onMouseEnter={() => setHoveredSection(section.name)}
                onMouseLeave={() => setHoveredSection(null)}>

                    {/* Top of bookmark */}
                    <span className={`absolute left-1/2 transform -translate-x-1/2
                        inline-block px-4 py-4 border-t-4 border-b-[22px] border-x-[1px]
                        sm:group-hover:border-b-[65px] sm:group-hover:border-x-[7px]
                        max-sm:group-hover:border-b-[46px]
                        sm:transition-all sm:duration-300 origin-top
                        ${currentSection === section.name && hoveredSection === null ? 'border-b-[46px]' : ''}
                        ${hoveredSection !== null && hoveredSection !== currentSection ? 'border-b-[22px]' : ''}
                        ${hoveredSection === section.name ? 'max-sm:border-b-[46px]' : ''}`}
                    style={{
                        borderColor: sectionBorderColors[section.name],
                        backgroundColor: sectionBorderColors[section.name],
                    }}>
                        {section.icon}
                    </span>

                    <span className={`absolute left-1/2 transform -translate-x-1/2
                        inline-block px-4 py-4
                        bg-transparent border-x-4 border-t-4
                        max-sm:group-hover:h-[106px]
                        sm:transition-all sm:duration-300 origin-top
                        ${currentSection !== section.name && hoveredSection !== section.name ? 'w-[58px] h-[82px]' : ''}
                        ${currentSection === section.name && hoveredSection === null ? 'w-[58px] h-[106px]' : ''}
                        ${currentSection === section.name && hoveredSection !== null && hoveredSection !== section.name ? 'w-[58px] h-[82px]' : ''}
                        ${hoveredSection === section.name ? 'max-sm:w-[58px] max-sm:h-[106px] sm:w-[70px] sm:h-[125px]' : ''}`}
                        onClick={() => setCurrentSection(section.name)}
                    style={{
                        borderColor: '#FFFFFF',
                    }}/>
                    {/* Bottom of bookmark black overlay */}
                    <span className={`absolute left-1/2 transform rotate-180 -translate-x-1/2 -bottom-[34px] w-0 h-0 
                        border-l-[29px] border-l-transparent
                        border-r-[29px] border-r-transparent
                        border-t-[18px] border-t-[#202729]
                        sm:group-hover:-bottom-[77px] sm:group-hover:border-t-[23px]
                        sm:group-hover:border-r-[35px] sm:group-hover:border-l-[35px]
                        max-sm:group-hover:-bottom-[58px]
                        sm:transition-all sm:duration-300 pointer-events-none
                        ${currentSection === section.name && hoveredSection === null ? '-bottom-[58px]' : ''}
                        ${hoveredSection !== null && hoveredSection !== currentSection ? '-bottom-[34px]' : ''}
                        ${hoveredSection === section.name ? 'max-sm:-bottom-[58px]' : ''}`}>
                    </span>
                    {/* Bottom of bookmark white overlay */}
                    <span className={`max-sm:hidden absolute left-1/2 transform rotate-180 -translate-x-1/2 -bottom-[34px] w-0 h-0 
                        border-l-[29px] border-l-transparent
                        border-r-[29px] border-r-transparent
                        border-t-[18px] border-t-[#bbb9ba]
                        group-hover:-bottom-[77px] group-hover:border-t-[23px]
                        group-hover:border-r-[35px] group-hover:border-l-[35px]
                        transition-all duration-300 pointer-events-none
                        ${currentSection === section.name && hoveredSection === null ? '-bottom-[58px]' : ''}
                        ${hoveredSection !== null && hoveredSection !== currentSection ? '-bottom-[34px] opacity-85' : 'opacity-0'}`}>
                    </span>
                </li>
            ))}
            {/* Hover big text */}
            <p className={`fixed max-sm:hidden top-[calc(50%+40px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                text-center text-[#202729] sm:text-9xl transition-opacity duration-300 pointer-events-none text-6xl
                ${hoveredSection !== null && hoveredSection !== currentSection ? 'opacity-85' : 'opacity-0'}`}>
            {hoveredSection?.toUpperCase()}</p>
        </ul>
    </div>
  )
}

export default Navbar