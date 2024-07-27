'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HomePageAnime = () => {
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.to('.loading-cover', {xPercent:100, duration:2, delay:2, ease:'back.inOut'})
    .from('.hero-text-1', {xPercent:-10, duration:.7, opacity:0})
    .from('.hero-text-2', {xPercent:-10, duration:.7, opacity:0})
    .from('.hero-text-3', {xPercent:-10, duration:.7, opacity:0})
    .from('.call-btn-left',{ y:150, duration:.5, opacity:0, ease:'bounce.out'})
    .from('.call-btn-right',{ y:150, duration:.5, opacity:0, ease:'bounce.out'})
    .from('.martin',    { y:-20, duration:1, opacity:0 })
  })

// Create a GSAP animation for the heading
}

export default HomePageAnime

