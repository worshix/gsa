//for all the abouts i.e. mission, vision and who we are
import AboutButton from './AboutButton';

const About = ({title,about,id}) => {
  const contentArray = about.split(/\s+/)
  const summary = contentArray.slice(0,20)
  return (
    <article className='about p-2 w-80 text-xs shadow-md shadow-black rounded-md overflow-y-hidden compressed' id={id}>
      <div className="bg-gradient-to-r from-main-300 to-main-500 text-white font-bold p-2 rounded-md -mt-4">
        <h1 className='text-center uppercase text-sm'>{title}</h1>
        <p className='transition-all duration-300'>
          {summary.join(" ") + "..."}
        </p>
      </div>
      <AboutButton id={id}/>
      <p className='compressed-about font-light leading-relaxed transition-all duration-300 ease-linear overflow-y-hidden'>{about}</p>
    </article>
  )
}

export default About