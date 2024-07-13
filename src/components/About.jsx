//for all the abouts i.e. mission, vision and who we are
const About = ({title,about}) => {
  return (
    <article className="p-2 mt-4 about-container responsive-text about">
      <span className="w-full h-[2px] bg-main-500 block about-header-overline"></span>
        <h1 className="font-bold w-fit text-white bg-main-500 pl-2 pr-4 py-2 uppercase about-header">{title}</h1>
          <p className="bg-slate-100 p-2 border-y-2 border-main-500">{about}</p>
    </article>
  )
}

export default About