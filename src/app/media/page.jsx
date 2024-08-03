//import Gallery from "./Gallery";
import { createClient } from '@/prismicio';
import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';

export const metadata = {
  title:'Media'
}


async function Media () {
	const client = createClient();
	const images = await client.getAllByType('image_gallery');
return (
  <>
  	<h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">Media</h1>
      {/* links to pages for events, news, articles */}
      <section className='flex gap-2 justify-center'>
          <Link className='btn-main' href="/media/events">Events</Link>
          <Link className='btn-main' href="media/articles">Article</Link>
          <Link className='btn-main' href="media/news">News</Link>
      </section>
      <h1 className='section-heading'>Gallery</h1>
      
      {/* the gallery Slide here down here */}
      {/* <Gallery /> */}

      {/* all images just poured here with lazy loading */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {images.map((item) => (
              <div className="relative overflow-hidden bg-gray-200">
                  <PrismicNextImage field={item.data.image} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" />
              </div>
            ))}
      </section>
  </>
)
}

export default Media
