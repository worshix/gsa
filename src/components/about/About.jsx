//for all the abouts i.e. mission, vision and who we are
import AboutButton from './AboutButton';

const About = ({title,about,id}) => {
  const contentArray = about.split(/\s+/)
  const summary = contentArray.slice(0,20)
  about = contentArray.slice(18)
  return (
    <article className='about compressed slide-in-top' id={id}>
      <div className="bg-gradient-to-r from-main-300 to-main-500 text-white font-bold p-2 sm:p-4 rounded-md -mt-4 shadow-sm shadow-black">
        <h1 className='text-center uppercase text-sm sm:text-lg font-bold roboto'>{title}</h1>
        <p className='transition-all duration-300 responsive-text font-light'>
          {summary.join(" ") + "..."}
        </p>
      </div>
      <AboutButton id={id}/>
      <p className='compressed-about font-light leading-relaxed transition-all duration-300 ease-linear overflow-y-hidden sm:text-lg'>{"..." + about.join(" ")}</p>
    </article>
  )
}

export default About