/* this component will show image slideshow on the landing page */
import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';

const LandingGallery = async () => {
    const client = createClient();
    const images = await client.getAllByType("image_gallery", {limit: 5});  
  return (
    <article className='images-container pt-6 p-2 flex' id="images-container">
        {
        images.map((image,index) => {
            return(
                <div key={"div-"+index} className='slide duration-200 max-w-[500px]'>
                    <PrismicNextImage field={image.data.image} key={`landing-image-${index+1}`} className={`rounded-md shadow-md shadow-black gallery-image-${index+1}`} />               
                </div>      
            )}
    )}
    </article>
  )
}

export default LandingGallery
