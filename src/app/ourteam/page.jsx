'use client'
import Link from "next/link"
import Members from "./[member]/Members"
import MemberCard from '@/app/ourteam/MemberCard'

const page = () => {
  //collecting keys to use in the mapping function
  let keys = []
  for(let key in Members){
    keys.push(key)
  }
  return (
    <section className="flex flex-col justify-center items-center gap-2">
            {keys.map((item)=>{
              let person = Members[item]
              return(
                <MemberCard {...person}/>
              )
            })}
    </section>
  )
}
export default page
