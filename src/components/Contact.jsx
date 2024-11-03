import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#202729]  flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/apjjjeja" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-gray-300'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-300'>Contact</p>
                <p className='py-4'>Submit form below or send me an email: roo2doo@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-purple-300 hover:border-purple-300 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact