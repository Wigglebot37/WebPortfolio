import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#202729] flex justify-center items-center p-4 max-sm:pt-[35px]'>
        <form method='POST' action="https://getform.io/f/apjjjeja" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-[#AA644D]'>
                <p className='text-4xl font-bold inline border-b-4 border-[#857d77]'>Contact</p>
                <p className='text-[#d1c7a2] py-4 text-xl'>Fill out the form below or send me an email directly: roo2doo@gmail.com</p>
            </div>
            <input className='bg-[#e0ded4] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#e0ded4]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#e0ded4] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#857d77] hover:border-[#857d77] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact