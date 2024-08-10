/* this component will show image slideshow on the landing page */
import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';

const LandingGallery = async () => {
    const client = createClient();
    const images = await client.getAllByType("image_gallery", { limit: 5 });
  
    return (
        <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4" id="images-container">
            {images.map((image, index) => (
                <div 
                    key={"div-" + index} 
                    className={`slide duration-200 h-64 lg:h-80 relative overflow-hidden rounded-md shadow-md shadow-black group`}
                >
                    <PrismicNextImage 
                        field={image.data.image} 
                        key={`landing-image-${index+1}`} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                    />
                </div>
            ))}
        </article>
    );
}

export default LandingGallery;
