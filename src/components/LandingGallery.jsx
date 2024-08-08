/* this component will show image slideshow on the landing page */
import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';

const LandingGallery = async () => {
    const client = createClient();
    const images = await client.getAllByType("image_gallery", {limit: 10});  
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
  return (
    <article className='images-container pt-6 p-2 w-2/3 flex-col flex gap-2 md:gap-4 sm:gap-3' id="images-container">
        {
        randomNumbers.map((index) => {
            count++
            return(
                <div key={"div-"+index} className='slide duration-200 max-w-[500px] mx-auto'>
                    <PrismicNextImage field={images[index].data.image} key={`landing-image-${index}`} className={`rounded-md shadow-md shadow-black gallery-image-${count-1}`} />               
                </div>      
            )}
    )}
    </article>
  )
}

export default LandingGallery
