import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('https://05r0ym5agg.execute-api.us-east-2.amazonaws.com/', {  // Replace this URL with your actual Lambda endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' }) // Clear form on success
      } else {
        setStatus(`Error: ${result.error || 'Something went wrong'}`)
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`)
    }
  }

  return (
    <div name='contact' className='w-full min-h-screen bg-[#202729] flex justify-center items-center p-4 pt-[140px] max-sm:pb-8 overflow-auto'>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 text-[#AA644D]'>
          <p className='text-4xl font-bold inline border-b-4 border-[#857d77]'>Contact</p>
          <p className='text-[#d1c7a2] py-4 text-xl'>Fill out the form below or send me an email directly: andthudson@gmail.com</p>
        </div>
        <input
          className='bg-[#e0ded4] p-2'
          type='text'
          placeholder='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className='my-4 p-2 bg-[#e0ded4]'
          type='email'
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className='bg-[#e0ded4] p-2'
          name='message'
          rows='10'
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
        />
        <button className='text-white border-2 hover:bg-[#857d77] hover:border-[#857d77] px-4 py-3 my-8 mx-auto flex items-center'>
          Send
        </button>
      </form>
      <div>{status}</div>
    </div>
  )
}

export default Contact