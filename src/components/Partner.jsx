import Link from "next/link";
import Image from "next/image";

/* Partners component, takes in logo and the name which is also used as part of the alt */

const Partner = ({name, icon, link, image}) => {
  return (
    <div
  className="border-2 bg-white rounded-[1.5em] text-black font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px] mx-auto flex-grow-0 slide-in-left">
    <div className="w-[300px]"><Image src={'/assets/images/'+image} width={300} height={300} alt={name}/></div>
    <h1 className="text-xl font-medium w-[300px] text-main-400">{name}</h1>
    <span className="animate-bounce self-end text-xl"><span className={`bi bi-${icon}`}></span></span>
  <Link href={link} className="btn-main items-baseline">Visit<span className="bi bi-arrow-right group-hover:translate-x-2 transition-transform duration-100 ease-linear"></span></Link>
</div>
  )
}

export default Partner
