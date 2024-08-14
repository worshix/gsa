import Members from "./[member]/Members"
import MemberCard from '@/app/ourteam/MemberCard'

const metadata = {
  title: "Meet the GSA Team: Dedicated to Combating Antimicrobial Resistance",
  description: "Get to know the passionate team behind Generational Stewards for Antimicrobials (GSA). Learn about our members' expertise and commitment to addressing antimicrobial resistance.",
  keywords: ["GSA team", "antimicrobial resistance experts", "health advocacy team", "stewardship leaders"],
  author: "Generational Stewards for Antimicrobials (GSA)"
}

const page = () => {
  let keys = []
  for(let key in Members){
    keys.push(key)
  }
  return (
    <section className="flex flex-col justify-center items-center gap-2 p-2 sm:flex-row flex-wrap sm:items-start md:h-screen">
            <h1 className="font-bold text-main-500 text-2xl sm:text-3xl text-center w-full m-4">Our Team</h1>
            {keys.map((item)=>{
              let person = Members[item]
              return (
                <MemberCard key={person.id} {...person}/>
              )
            })}
    </section>
  )
}
export default page
