//for all the abouts, mission, vision and who we are
const About = ({title,about}) => {
  return (
    <article className="p-2 mt-4 about-container responsive-text">
        <h1 className="text-center font-bold w-full bg-main-500 text-white rounded-t-xl p-4">{title}</h1>
        <details>
          <summary>
            
          </summary>
          <p className="bg-slate-100 rounded-xl -mt-2 p-2">{about}</p>
        </details>
    </article>
  )
}

export default About