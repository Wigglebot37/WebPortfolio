const ProjectCard = ({ title, image, demo, code }) => {
  return (
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden'>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className='absolute inset-0 bg-cover bg-center brightness-[0.3]'
      />

      <div className='relative text-center'>
        <span
          className='text-2xl font-bold text-[#D1BFB0] tracking-wider underline'
          style={{ textShadow: '2px 2px 2px black' }}
        >
          {title}
        </span>

        <div className='pt-8'>
          {demo && (
            <a href={demo} target='_blank' rel='noopener noreferrer'>
              <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>
                Demo
              </button>
            </a>
          )}

          {code && (
            <a href={code} target='_blank' rel='noopener noreferrer'>
              <button className='text-center hover:scale-110 transition-transform duration-200 rounded-lg px-4 py-3 m-2 bg-[#D1BFB0] text-[#202729] font-bold text-lg'>
                Code
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard