import React from 'react';
import Link from 'next/link';
import ContactForm from './ContactForm';


const Footer = () => {
  return (
    <footer className='bg-main-700 text-white flex flex-col sm:flex-row justify-between items-center p-6'>
      <div className='flex justify-center sm:justify-start w-full sm:w-1/3'>
        <div className='relative w-[80%] sm:w-full sm:h-auto'>
          <img
            src="/assets/images/logo.jpg"
            className='w-full h-full object-cover rounded-md'
            alt="logo for generational stewards for antimicrobials"
          />
        </div>
      </div>

      <div className='w-full sm:w-1/3 flex justify-center'>
        <div className='w-full sm:w-[80%]'>
          <ContactForm />
        </div>
      </div>

      <div className='w-full sm:w-1/3 flex flex-col sm:items-end gap-6 text-center sm:text-right'>
        <div>
          <h4 className='text-main2 font-bold mb-2'>Connect with us</h4>
          <ul className='flex gap-4 justify-center sm:justify-end'>
            <li><a href="tel:+263772916923" className='bi bi-phone'> Phone</a></li>
            <li><a href="tel:+263778473160" className='bi bi-telephone'> Cell</a></li>
          </ul>
        </div>
        <div>
          <h4 className='text-main2 font-bold mb-2'>Mail</h4>
          <ul className='flex gap-4 flex-wrap justify-center sm:justify-end'>
            <li><a href="mailto:gsateamglobal@gmail.com" className='bi bi-envelope'> Main</a></li>
            <li><a href="mailto:Info@gsa.co.zw" className='bi bi-envelope'> Info</a></li>
            <li><a href="mailto:Headofprograms@gsa.co.zw" className='bi bi-envelope'> Head of Programs</a></li>
            <li><a href="mailto:secretary@gsa.co.zw" className='bi bi-envelope'> Secretary</a></li>
          </ul>
        </div>

        <div>
          <h4 className='text-main2 font-bold mb-2'>Follow Us</h4>
          <div className='flex gap-4 justify-center sm:justify-end'>
            <Link href='https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/'><i className='bi bi-linkedin'></i></Link>
            <Link href='https://twitter.com/Preservefutures'><i className='bi bi-twitter'></i></Link>
            <Link href='https://www.facebook.com/profile.php?id=1000093674206378&mibextid=LQQJ4d'><i className='bi bi-facebook'></i></Link>
          </div>
        </div>

        <div>
          <h4 className='text-main2 font-bold mb-2'>Location</h4>
          <p>Harare, Zimbabwe</p>
        </div>
      </div>

      <div className='w-full text-center mt-6 sm:mt-0 sm:w-auto'>
        <p className='text-main2 font-bold'>© { new Date().getFullYear()} GSA. All rights reserved</p>
        <p className='text-main2 font-bold'><a href="https://wa.me/263771975597">Made By PixelCrafte</a></p>
      </div>
    </footer>
  );
}

export default Footer;

