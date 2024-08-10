/* home page */
import Link from "next/link";
import About from "@/components/about/About";
import Partner from "@/components/Partner";
import LatestPosts from '@/components/latestPosts/LatestPosts';
import Contact from '@/components/Contact';
import LandingGallery from '@/components/LandingGallery';
import dynamic from "next/dynamic";

const HomePageAnime = dynamic(() => import('./HomePageAnime'), { ssr: false });
const partners = [
  {
    name:"Zimbabwe Youth Council",
    icon:'linkedin',
    link:"https://www.linkedin.com/company/zim-youth-council/"
  },
  {
    name:"African Youth Antimicrobial Resistance Alliance Taskforce",
    icon:'linkedin',
    link:"https://www.linkedin.com/company/ayara-tf/"
  },
  {
    name:"Stop superbugs Network",
    icon:'twitter-x',
    link:"https://x.com/theurgentneed?s=11"
  }
]

//
const WhoWeAre = {
  id:'who-we-are',
  title:'Who Are We',
  about:"We are dedicated to fostering innovation and advocacy in our health and awareness campaigns, specifically focusing on Antimicrobial Resistance (AMR). Our primary goal is to promote and empower stewardship among primary and secondary school students. By raising awareness and providing education, we aim to instil a sense of responsibility and understanding of AMR in the younger generation. We are inculcating a culture of social responsibility among young people to mitigate the threat of the spread of antimicrobial resistance in African communities using a One Health Approach. We are a catalyst organization and we achieve this by empowering young people, especially tertiary level students, and recent graduates by designing relevant programs that can trigger their interests and equip them with appropriate skills that mould them to be the next change-makers, opinion leaders, and hopefully pursue a career in the AMR sector. This is achieved through regular training and mentorship programs."
}
const mission = {
  id:'mission',
  title:'Our Mission',
  about:"We are committed to empowering the next generation as champions and advocates for responsible antimicrobial use. Our mission is to cultivate a community of student leaders dedicated to combating antimicrobial resistance (AMR) through research, innovation, and social responsibility. We provide a dynamic platform for learning and action through engaging educational programs, the creation of collaborative AMR clubs, and mentorship opportunities designed to nurture student ideas. By connecting these future leaders with relevant stakeholders, we aim to facilitate impactful collaborations and pave the way for student-led solutions to flourish and create lasting change in the fight against AMR."
}
const vision = {
  id:'vision',
  title:'Our Vision',
  about:"Our vision is to empower and educate young people to understand and tackle antimicrobial resistance (AMR) by fostering innovative solutions. We aim to engage and equip the next generation to actively contribute to global efforts in addressing this critical health threat."
}

const values = [
  "Dedication",
  "Empathy",
  "Industriousness",
  "Teamwork",
  "Grassroot engagement",
  "Empowerment",
  ]

//
const contactDetails = [
  {
    name:'linkedIn',
    link:'https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/',
    icon:'linkedin',  
  },
  {
    name:'whatsApp',
    link:'https://wa.me/263778473160',
    icon:'whatsapp'
  },
  {
    name:'phone',
    link:'tel:+263772916923',
    icon:'telephone'
  },
  {
    name:'mail',
    link:"mailto:gsateamglobal@gmail.com",
    icon:'envelope'
  },
  {
  name:'facebook',
  link:'https://www.facebook.com/profile.php?id=100093674206378&mibextid=LQQJ4d',
  icon:'facebook'
  },
  {
    name:'twitter',
    link:'https://twitter.com/Preservefutures',
    icon:'twitter-x'
  }
]

export const metadata = {
  title:'generational stewards for antimicrobials',
  description:'Empowering the next generation to combat antimicrobial resistance (AMR) through education, innovation, and advocacy. Learn about our mission, vision, and programs fostering responsible antimicrobial use and global health solutions.',
}

export default async function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* animation to allow page loading */}
      <section className='h-screen bg-main-300 absolute z-10 w-screen loading-cover overflow-x-hidden'>
      <svg viewBox='0 0 600 160' className="loader-svg pt-[25vh]">
        <text x="30%" y="50%" dy=".32em" textAnchor='middle' className='loader-body-g'>
          G
        </text>
        <text x="50%" y="50%" dy=".32em" textAnchor='middle' className='loader-body-s'>
          S
        </text>
        <text x="70%" y="50%" dy=".32em" textAnchor='middle' className='loader-body-a'>
          A
        </text>
      </svg>
      <h1 className='font-extrabold text-white w-fit mx-auto mt-[5vh] animate-pulse'>Loading...</h1>
    </section>
      {/* hero section */}
      <section className="hero flex items-center flex-col text-white gap-y-8 h-screen roboto tracking-wide leading-relaxed isolate w-full" id="hero">
        <div className="text-center hero-text-container mt-8 relative top-[17%] space-y-4 z-20">
          <h1 className="mx-auto text-3xl md:text-4xl font-bold hero-text-1 hero-text w-fit">Generational Stewards</h1>
          <h1 className="mx-auto text-2xl font-bold hero-text-2 hero-text w-fit">for</h1>
          <h1 className="mx-auto uppercase text-4xl md:text-5xl font-extrabold text-main2 hero-text-3 hero-text w-fit">Antimicrobials</h1>
        </div>
        <div className="z-20 action-btn-group flex gap-4 md:gap-6 relative top-[22%] md:top-[25%]">
          <Link className="call-btn call-btn-left" href="/#join-us">join Us <span className="bi bi-hand-thumbs-up opacity-0"></span></Link>
          <Link className="call-btn call-btn-right" href="mailto:Info@gsa.co.zw">donate <span className="bi bi-emoji-sunglasses opacity-0"></span></Link>
        </div>
        <a href="#" className="" id="about-us"></a>
        <p className="z-20 relative top-[22%] md:top-[35%] text-xs font-sans p-2 martin">
          <blockquote>
            If you can&apos;t fly then run, if you can&apos;t run then walk, if you can&apos;t walk then crawl, but whatever you do you have to keep moving forward.
          </blockquote>
          <b className="block ml-auto p-1 w-fit mr-3">Martin Luther King Jr.</b>
        </p>
      </section>

      {/* About Section */}
      <section className="flex flex-col flex-wrap justify-center items-center p-2 pt-8 gap-10 sm:gap-5">
        <About key={"about-1"} {...WhoWeAre} />
        <About key={"about-2"} {...mission} />
        <About key={"about-3"} {...vision} />
      </section>

      {/* values */}
      <section className="values p-2 my-6">
        <h1 className="section-heading slide-in-top text-center">Our Core Values</h1>
        <ul className="mt-3 gap-2 flex flex-col items-center sm:flex-row flex-wrap sm:justify-center sm:gap-4">
          {values.map((item, index) => <li key={'value-'+index} className="rounded-lg flex gap-2 bg-slate-100 w-fit slide-in-left sm:text-3xl p-2"><span className="block bi bi-capsule text-main2 bg-white w-[35px] h-[35px] rounded-lg flex-shrink-0 p-2"></span><b className="block flex-shrink-0 p-2">{item}</b></li>)}
        </ul>
      </section>

      {/* partners */}
      <section className="partners" id="partners">
        <h1 className="section-heading slide-in-top">Our Partners</h1>
        <div className="partners-container flex flex-col sm:flex-row flex-wrap gap-2">
            {partners.map((item, index) => <Partner key={'partner-'+index} {...item}/>)}
        </div>
      </section>

      {/* join us and contact-us*/}
      <section className="my-4 contacts-section text-white p-2 space-y-3 responsive-text">
        <article className="contact-us bg-main-300 bg-opacity-15 backdrop-blur-md p-2 rounded-lg sm:w-2/3 mx-auto shadow-md shadow-black">
          <h1 className="bg-transparent text-center text-main2 font-bold text-xl">Connect With Us</h1>
          <p className="slide-in-top">
            We are always glad to engage both professionals and students in all our activities.
            We highly value individual and collective contributions that each one of us can have
            in Antimicrobial Resistance. At SAS Africa, we believe that it is the small efforts that
            each one of us undertakes which matter most.
            <a id="contact-us"></a>
            We welcome you to our family!
          </p>          
        </article>
        <article className="bg-main-300 bg-opacity-25 backdrop-blur-md p-2 rounded-lg sm:w-2/3 mx-auto shadow-md shadow-black">
        <h1 className="bg-transparent text-center text-main2 text-xl font-bold">Contact Us</h1>
          <div className="flex flex-wrap gap-3 justify-center p-2 mt-3 slide-in-top">
            { contactDetails.map((item,index) => <Contact key={'contact-'+index} {...item} />)}
            <a id="join-us"></a>
          </div>
        </article>
        <article className="join-us bg-main-300 bg-opacity-25 backdrop-blur-md p-2 rounded-lg sm:w-2/3 mx-auto shadow-md shadow-black">
          <h1 className="bg-transparent text-center text-main2 text-xl font-bold">Join Us</h1>
          <p className="p-2 slide-in-top">
            Donate,Your support can save lives.
            We welcome any gifts and donations, and sponsorships to support our work. We are sure that you will find interesting and important purposes to support your involvement and generosity in the work that we are doing.
            For inquiries and conversations about gifts, donations and sponsorships, please contact us at:
            <br />
            <span className="font-bold text-main2">Info@gsa.co.zw</span>
            <Link href="mailto:Info@gsa.co.zw" className="btn-main">Donate</Link>
          </p>
        </article>
      </section>

      {/* gallery */}
      <h1 className="section-heading slide-in-top">Check out our gallery</h1>
      <section className="gallery-slide bg-main-500 overflow-hidden">
        <article className="p-2 gallery-btn">
          <Link href='/media' className="btn-main ml-6 md:text-3xl">Gallery<span className="bi-camera pl-2 text-white"></span></Link>
        </article>
        <LandingGallery />
      </section>
      {/* latest posts */}
      <LatestPosts />
      <HomePageAnime />
    </main>
  );
}
