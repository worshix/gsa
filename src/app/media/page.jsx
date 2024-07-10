import Gallery from "./Gallery";
import MediaItems from "./MediaItems";
import { createClient } from '@prismicio'

const articleList = [
  {
      id:'',
      title:'',
      link:'' //link to page with the actual article
  },
  {
      id:'',
      title:'',
      link:'' //link to page with the actual article
  },
]

const newsletterList = [
  {
      id:'',
      title:'',
      link:'' //link to page with the actual newsletter
  },
  {
      id:'',
      title:'',
      link:'' //link to page with the actual newsletter
  },
]

export const metadata = {
  title:'Media'
}

export default async function AllPosts () {
  const client = createClient();
  const articles_arr = await client.getAllByType("article");

  return ( 
	   <section>
		<h1>All Posts</h1>
		<article className='flex overflow-x-scroll'>
	  	{articles_arr.map((el) => (
		    <Post
			    image={el.data.story_image}
			    title={el.data.title}
            		    content={el.data.story}
            		    author={el.data.author}
            	 	    date={el.data.publishing_time}
            	 	    link={el.url}
		     />
		))}
		</article>
	    </section>
  	);
}

const Media = () => {
return (
  <main>
    /*The component above generates articles like on the home page but queries all of them.
      You can just call it here.
    */
    <MediaItems props = {articleList} />
    <MediaItems props = {newsletterList} />
    <Gallery />
    </main>
)
}

export default Media
