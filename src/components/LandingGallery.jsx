'use client';
/* this component will show image slideshow on the landing page */
import { createClient } from '@/prismicio';


const LandingGallery = async () => {
    console.log(images);
    var randomNumbers = [];
    var count = 0;
    while(count<5){
        let rand = Math.floor(Math.random()*images.length);
        //condition for generating the random numbers
        if (rand != randomNumbers[count]){
            randomNumbers.push(rand)
            count++
        } 
    }
    count = 1;
    console.log(randomNumbers);
  return (
    <article className=''>
        {
        randomNumbers.map((index) => {
            count++
            return(
                <div className='slide duration-200 mx-auto w-[300px] absolute'>
                </div>      
            )}
    )}
    </article>
  )
}

export default LandingGallery
