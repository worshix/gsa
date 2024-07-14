'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HomePageAnime = () => {
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from('.hero-text-1', {xPercent:-10, duration:.7, opacity:0})
    tl.from('.hero-text-2', {xPercent:-10, duration:.7, opacity:0})
    tl.from('.hero-text-3', {xPercent:-10, duration:.7, opacity:0})
    tl.from('.call-btn-left',    { y:150, duration:.5, opacity:0, ease:'bounce.out'})
    tl.from('.call-btn-right',    { y:150, duration:.5, opacity:0, ease:'bounce.out'})
    tl.from('.martin',    { y:-20, duration:1, opacity:0 })
  })
}

export default HomePageAnime

