/* this component will show image slideshow on the landing page */
import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';


const LandingGallery = async () => {
    const client = createClient();
    const images = await client.getAllByType("image_gallery");  
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
    <article className='pt-6 p-2'>
        {
        randomNumbers.map((index) => {
            count++
            return(
                <div className='slide duration-200 mx-auto w-[60%] absolute h-fit'>
                            <PrismicNextImage field={images[index].data.image} alt={images[index].data.image.alt} className={`rounded-md shadow-md shadow-black gallery-image-${count-1}`} />               
                </div>      
            )}
    )}
    </article>
  )
}

export default LandingGallery
