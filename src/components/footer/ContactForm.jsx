import React from 'react'

const ContactForm = () => {
  return (
    <form action="#" className='flex flex-col gap-2 bg-white bg-opacity-10 m-2 rounded-md sm:w-[300px] lg:w-[350px] sm:flex-shrink-0'>
        <h1 className='text-center font-bold text-main2 p-2'>Subscribe to our Newsletter</h1>
        <input type="text" placeholder='Name' className='m-2 bg-white bg-opacity-15 p-2 rounded-sm focus:outline-none '/>
        <input type="text" placeholder='Email' className='m-2 bg-white bg-opacity-15 p-2 rounded-sm focus:outline-none '/>
        <button type="submit" className='w-fit p-2 bg-main3 rounded-md text-white font-bold m-2 ml-auto hover:scale-95 transition-all duration-300 shadow-md shadow-black active:scale-90 active:shadow-sm'>Subscribe</button>
    </form>
  )
}

export default ContactForm
