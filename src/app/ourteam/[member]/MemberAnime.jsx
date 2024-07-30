'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MemberAnime = () => {
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from('.member-image', {scale:1.25, duration:1, delay:1, ease:'none'})
    .from('.hero-text-1', {y:-20, duration:.7, opacity:0})
    .from('.hero-text-2', {y:-10, duration:.7, opacity:0})
    .from('.hero-text-3', {x:-20, duration:.7, opacity:0})
  })
}

export default MemberAnime

