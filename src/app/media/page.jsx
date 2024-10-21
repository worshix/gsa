//import Gallery from "./Gallery";
import { createClient } from '@/prismicio';
import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';
import Gallery from './Gallery';
import { revalidateTag } from "next/cache";

export const metadata = {
  title:'GSA in Action: Photos, Stories, and Updates',
  description: 'Explore the visual story of Generational Stewards for Antimicrobials (GSA) - browse photos from our campaigns, meetings, and events, and discover more through our articles, upcoming events, and newsletters.'
}

async function Media () {
	const client = createClient();
	const images = await client.getAllByType('image_gallery');
	revalidateTag("prismic");
return (
  <>
  	<h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">Media</h1>
      {/* links to pages for events, news, articles */}
      <section className='flex gap-2 justify-center'>
          <Link className='btn-main' href="/media/events">Events</Link>
          <Link className='btn-main' href="media/articles">Article</Link>
          <Link className='btn-main' href="media/news">News</Link>
      </section>
      <h1 className='section-heading slide-in-top'>Gallery</h1>      
      {/* the gallery Slide here down here */}
      <Gallery images={images} />
  </>
 )
}
export default Media
