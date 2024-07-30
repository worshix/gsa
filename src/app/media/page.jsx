//import Gallery from "./Gallery";
import { createClient } from '@/prismicio';
import Link from 'next/link';

export const metadata = {
  title:'Media'
}


const Media = () => {
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
      <section>

      </section>
  </>
)
}

export default Media
