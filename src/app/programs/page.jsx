// these can't be edited so don't worry

import { link } from "fs"

const programs = [
  "Youth engagement in the AMR webinar series", 
  "The Education and awareness of antimicrobial resistance among secondary school students", 
  "World Antimicrobial Resistance Awareness Week",
  "Establishment of AMR clubs in secondary schools",
  "Antimicrobial Resistance Leadership Project in SADC",
]

export const metadata = {
    title:'Programs'
}
const Programs = () => {
  return (
    <main>
      <h1 className="text-5xl font-bold my-10 text-center text-main-400">Programs</h1>
      <ul>
        {programs.map((item) => <li>{item}</li>)}
      </ul>
    </main>
  )
}

export default Programs
