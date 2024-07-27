'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const BasicAnimations = () => {
  useGSAP(()=>{
      //to be used onload
      gsap.from('.slide-in-left', {
        y:'+=30',
        duration: .7,
        ease:'none'
      })
      //to be used on scroll
    })
  return <></>
    }
export default BasicAnimations
