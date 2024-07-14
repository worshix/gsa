'use client'
import Link from "next/link"

const AboutButton = (id) => {
  const handleClick = () => {
    const container = document.getElementById(id.id);
    console.log(container)
    if(container.classList.contains('compressed')){
        container.classList.remove('compressed')
    }
    else{
      container.classList.add('compressed');
    }
}
  return (
    <button type="button" className="flex text-black gap-[2px] services-link my-2 ml-auto h-fit p-2"
      onClick={ handleClick }
    >
      <div className="block bg-slate-200 p-2 rounded-lg text-black font-bold">read more</div>
      <div className="bg-slate-200 p-2 rounded-lg flex w-[30px] overflow-hidden flex-shrink-0 h-[32px] arrow-container">
          <i className="arrow-right-1 text-black bi bi-arrow-right block absolute duration-500 -translate-x-full transition-all opacity-0"></i>
          <i className="arrow-right-2 text-black bi bi-arrow-right block absolute duration-500 transition-all"></i>
      </div>
    </button>
  )
}

export default AboutButton
