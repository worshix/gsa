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
      console.error('Form submission error:', error.response?.data);
      setStatus('error');
      setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="footer-form"
      className='flex flex-col gap-4 bg-white bg-opacity-10 m-4 p-4 rounded-md w-full max-w-[350px] sm:flex-shrink-0'
    >
      <h1 className='text-center font-bold text-main2 mb-4'>Subscribe to our Newsletter</h1>
      <input
        type="text"
        required
        placeholder='Name'
        className='bg-white bg-opacity-15 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-main3'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        id="email-input"
        type="email"
        required
        placeholder='Email'
        className='bg-white bg-opacity-15 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-main3'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className='w-full p-3 bg-white rounded-md text-black bg-opacity-75 font-bold hover:scale-95 transition-all duration-300 shadow-md active:scale-90 active:shadow-sm'
      >
        Subscribe
      </button>
      {status === 'sending' && <div className='text-center text-main3'>Sending...</div>}
      {status === 'error' && <div className='text-center text-red-500'>{message}</div>}
      {status === 'success' && <div className='text-center text-green-500'>{message}</div>}
    </form>
  );
};

export default ContactForm;
