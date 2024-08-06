"use client";

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    try {
      const response = await axios.post('/api/subscribe', { email, name });
      if (response.data.error) {
        setStatus('error');
        setMessage(response.data.error);
      } else {
        setStatus('success');
        setMessage('Subscribed!');
      }
    } catch (error) {
      console.error('Form submission error:', error.response.data);
      setStatus('error');
      setMessage(error.response.data.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} id="footer-form" className='flex flex-col gap-2 bg-white bg-opacity-10 m-2 rounded-md sm:w-[300px] lg:w-[350px] sm:flex-shrink-0'>
      <h1 className='text-center font-bold text-main2 p-2'>Subscribe to our Newsletter</h1>
      <input
        type="text"
        required
        placeholder='Name'
        className='m-2 bg-white bg-opacity-15 p-2 rounded-sm focus:outline-none'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        id="email-input"
        type="email"
        required
        placeholder='Email'
        className='m-2 bg-white bg-opacity-15 p-2 rounded-sm focus:outline-none'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className='w-fit p-2 bg-main3 rounded-md text-white font-bold m-2 ml-auto hover:scale-95 transition-all duration-300 shadow-md shadow-black active:scale-90 active:shadow-sm'
      >
        Subscribe
      </button>
      {status === 'sending' && <div>Sending...</div>}
      {status === 'error' && <div>{message}</div>}
      {status === 'success' && <div>{message}</div>}
    </form>
  );
};

export default ContactForm;

