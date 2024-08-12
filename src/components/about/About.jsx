import AboutButton from './AboutButton';

const About = ({ title, about, id }) => {
  const [summary, fullContent] = about.split(/(?<=\.)\s(.+)/s);

  return (
    <article className='about compressed bg-white shadow-md rounded-md overflow-hidden transition-all duration-300 ease-in-out' id={id}>
      <div className="bg-gradient-to-r from-main-300 to-main-500 text-white font-bold p-4 rounded-t-md">
        <h1 className='text-center uppercase text-base sm:text-lg font-bold'>{title}</h1>
        <p className='text-sm sm:text-base font-light mt-2'>
          {summary}
        </p>
      </div>
      <div className="p-4">
        <p className='compressed-about text-sm sm:text-base font-light leading-relaxed max-h-0 overflow-hidden transition-max-height duration-300 ease-in-out'>
          {fullContent}
        </p>
        <AboutButton id={id} />
      </div>
    </article>
  );
};

export default About;
