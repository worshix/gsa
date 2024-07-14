/* home page */
import Link from "next/link";
import About from "@/components/about/About";
import Partner from "@/components/Partner";
import LatestPosts from '@/components/latestPosts/LatestPosts';
import HomePageAnime from '@/app/HomePageAnime';
import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';

// partners props
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
  title:'Who We Are',
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

export const metadata = {
  title:'generational',
  description:'focus on this and that and what what',
  //keywords:'woisawo mashoko esumbunuro pano'
}

export default async function Home() {
  const client = createClient();
  const images = await client.getAllByType("image_gallery");
  let valueTransform = -45;
  return (
    <main className="">

      {/* hero section */}
      <section className="hero flex items-center flex-col text-white gap-y-8 h-screen roboto tracking-wide leading-relaxed isolate w-full" id="hero">
        <div className="text-center hero-text-container mt-8 relative top-[17%] space-y-4 z-20">
          <h1 className="mx-auto text-3xl md:text-4xl font-bold hero-text-1 hero-text w-fit">Generational Stewards</h1>
          <h1 className="mx-auto text-2xl font-bold hero-text-2 hero-text w-fit">for</h1>
          <h1 className="mx-auto uppercase text-4xl md:text-5xl font-extrabold text-main2 hero-text-3 hero-text w-fit">Antimicrobials</h1>
        </div>
        <div className="z-20 action-btn-group flex gap-4 md:gap-6 relative top-[22%] md:top-[25%]">
          <Link className="call-btn call-btn-left" href="/#join-us">join Us <span className="bi bi-hand-thumbs-up opacity-0"></span></Link>
          <Link className="call-btn call-btn-right" href="#">donate <span className="bi bi-emoji-sunglasses opacity-0"></span></Link>
        </div>
        <p className="z-20 relative top-[22%] md:top-[35%] text-xs font-sans p-2 martin">
          “If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.”
          <b className="block ml-auto p-1 w-fit mr-3">Martin Luther King Jr.</b>
        </p>
      </section>

      {/* About Section */}
      <section className="flex flex-col sm:flex-row flex-wrap justify-center p-2 pt-8 gap-10">
        <About {...WhoWeAre} />
        <About {...mission} />
        <About {...vision} />
      </section>

      {/* values */}
      <section className="values p-2 my-6">
        <h1 className="text-main-500 roboto uppercase text-center font-bold p-2 bg-green-200">Our Core Values</h1>
        <ul className="divide-y-2 di">
          {values.map((item) => <li className="flex gap-2 bg-slate-100 h-12"><span className="block bi bi-capsule text-main2 bg-white w-fit p-2 px-3 rounded-lg m-2"></span><b className="block p-2">{item}</b></li>)}
        </ul>
      </section>

      {/* partners */}
      <section className="partners" id="partners">
        <h1>Our Partners</h1>
        <div className="partners-container flex flex-col gap-2">
            {partners.map((item) => <Partner {...item}/>)}
        </div>
      </section>

      {/* join us and contact us*/}
      <section className="">
        <article className="contact-us" id="contact-us">
          contact us
        </article>
        <article className="join-us" id="join-us">
          join us
        </article>
      </section>
      {/* gallery */}
      <section className="gallery-slide">
        <h1>A pique at the gallery</h1>
        <div className="couresel flex overflow-x-scroll">
          <img className="block" src="/assets/images/banner.png" alt="" />
          <img className="block" src="/assets/images/billboard.png" alt="" />
          <img className="block" src="/assets/images/brochure.jpg" alt="" />
	        {/* <PrismicNextImage field={images[0].data.image} className="block" /> */}
        </div>
      </section>
      {/* latest posts */}
      <LatestPosts />
      <HomePageAnime />
    </main>
);
}
