import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#202729]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#857d77]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#AA644D]'>Andrew Hudson</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#F5E9BF]'>I'm a software developer.</h2>
        </div>
    </div>
  )
}

export default Home