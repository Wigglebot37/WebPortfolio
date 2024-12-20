import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#202729] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-300'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm: text-right text-4xl font-bold'>
                    <p>
                        This is where we honor the fallen. Feel free to look around and pay your respects.
                    </p>
                </div>
                <div>
                    <p>
                        Congrats on your promotion miner.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About