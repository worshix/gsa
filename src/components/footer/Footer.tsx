import React from 'react';
import Link from 'next/link';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer className='bg-main-700 text-white overflow-hidden flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center justify-center'>
        <img src="/assets/images/logo.jpg" className='sm:block m-2 w-[95%] rounded-md block sm:w-[300px]'/>
        <ContactForm />
        <div className='footer-container-2 divide-y-2 block sm:divide-y-0 md:w-[350px] lg:flex lg:flex-wrap lg:justify-center md:divide-y-2 flex-grow lg:flex-col p-2'>
            <div className='p-2'>
            <h4 className='text-main2 font-bold text-center bi bi-phone-vibrate'>Connect with us</h4>
            <ul className='flex gap-2 flex-wrap justify-center'>
                <li><a href="tel:+263772916923" className='bi bi-phone'>Phone</a></li>
                <li><a href="tel:+263778473160" className='bi bi-telephone'>Cell</a></li>
            </ul>
            </div>
            <div className='p-2'>
            <h4 className='text-main2 font-bold text-center bi bi-envelope'>Mail</h4>
            <ul className='flex gap-2 flex-wrap justify-center'>
                <li><a href="mailto:gsateamglobal@gmail.com" className='bi bi-link'>Main</a></li>
                <li><a href="mailto:Info@gsa.co.zw" className='bi bi-link'>Info</a></li>
                <li><a href="mailto:Headofprograms@gsa.co.zw" className='bi bi-link'>Head of Programs</a></li>
                <li><a href="mailto:secretary@gsa.co.zw" className='bi bi-link'>Secretary</a></li>

            </ul>
            </div>
            <div className=''>
                <h1 className='text-main2 font-bold text-center'>Follow Us</h1>
                <div className='flex flex-row gap-2 justify-center'>
                    <Link href='https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/'className='block p-1'><span className='block bi bi-linkedin'></span></Link>
                    <Link href='https://twitter.com/Preservefutures'className='block p-1'><span className='block bi bi-twitter'></span></Link>
                    <Link href='https://www.facebook.com/profile.php?id=1000093674206378&mibextid=LQQJ4d'className='block p-1'><span className='block bi bi-facebook'></span></Link>                    
                </div>   
            </div>
            <div className='p-2'>
                <h4 className='text-main2 font-bold text-center'><i className='text-white bi bi-geo-alt'></i>Location</h4>
                <p className='text-center'>Harare, Zimbabwe</p>
            </div>
            <div className='p-2'>
                <p className='text-center text-main2 font-bold'>© {new Date().getFullYear()} GSA</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
