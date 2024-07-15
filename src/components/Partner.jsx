import Link from "next/link"

/* Partners component, takes in logo and the name which is also used as part of the alt */

const Partner = ({name, icon, link}) => {
  return (
    <div
  className="h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-main-600 to-main-200 text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px] mx-auto">
    <h1 className="text-[1.5em] font-medium">{name}</h1>
    <span className="animate-bounce self-end text-xl"><span className={`bi bi-${icon}`}></span></span>
  <Link
  href={link}
    className="h-fit flex-shrink-0 w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
  >
    <p>Visit</p>
    <span className="bi bi-arrow-right group-hover:translate-x-2 transition-transform duration-100 ease-linear"></span>
  </Link>
</div>
  )
}

export default Partner
