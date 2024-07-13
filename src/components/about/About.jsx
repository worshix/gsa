//for all the abouts i.e. mission, vision and who we are
import AboutButton from './AboutButton';

const About = ({title,about}) => {
  const contentArray = about.split(/\s+/)
  const summary = contentArray.slice(0,20)
  return (
    <article className="w-80 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto roboto">
      <div className="mx-4 -mt-6 h-50 overflow-hidden rounded-xl text-white shadow-md shadow-black bg-gradient-to-r from-main-300 to-main-500">
        <h1 className='text-center font-bold w-full p-2'>{title}</h1>
        <p className='about-summary text-xs font-normal p-2 transition-all'>{summary.join(" ") + "..."}</p>
        <div className="p-6 pt-0">
          <AboutButton />
        </div>
      </div>
      <div className="p-6 transition-transform duration-300">
        <p className="about-full block font-sans text-base font-light leading-relaxed text-inherit">
          {about}
        </p>
      </div>
    </article>
  )
}

export default About