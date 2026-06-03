import { useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({images}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: 'Musaic',
      image: images.Music,
      demo: 'https://wigglebot.itch.io/musaic',
      code: 'https://github.com/Wigglebot37/Project-music',
    },
    {
      title: 'Quandary',
      image: images.Quandary,
      demo: 'https://wigglebot.itch.io/quandary/',
      code: 'https://github.com/Wigglebot37/Quandary/',
    },
    {
      title: 'Precinct 11',
      image: images.Precinct,
      demo: 'https://wigglebot.itch.io/precinct-11-pre-alpha-demo/',
      code: 'https://github.com/Wigglebot37/Precinct-11/',
    },
    {
      title: 'Substitute Reaper',
      image: images.Substitute,
      demo: 'https://wigglebot.itch.io/substitute-reaper/',
    },
    {
      title: 'This Website',
      image: images.Website,
      code: 'https://github.com/Wigglebot37/WebPortfolio/',
    },
    {
      title: 'Project Wiggle',
      image: images.Wiggle,
      demo: 'https://wigglebot.itch.io/project-wiggle/',
      code: 'https://github.com/Wigglebot37/Project-Wiggle/',
    },
    {
      title: 'Suction Destruction',
      image: images.Suction,
      demo: 'https://wigglebot.itch.io/suction-destruction/',
      code: 'https://github.com/Wigglebot37/harvest-project/',
    },
    {
      title: 'Project Scorch',
      image: images.Scorch,
      demo: 'https://wigglebot.itch.io/project-scorch/',
      code: 'https://github.com/Wigglebot37/Project-Scorch/',
    },
    {
      title: 'Discord Bot',
      image: images.Discord,
      code: 'https://github.com/Wigglebot37/Discord-Wiggle-Bot/',
    },
  ];

  return (
    <div 
      name='projects' 
      className='w-full min-h-screen pb-24 bg-[#202729] text-[#AA644D] flex max-sm:flex-col items-center sm:justify-center pt-[120px] max-sm:pb-8 overflow-auto'
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#857d77]'>Projects</p>
          <p className='text-[#d1c7a2] py-6 text-xl'>These are the projects I've done.</p>
        </div>
        {/* Project Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              demo={project.demo}
              code={project.code}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects