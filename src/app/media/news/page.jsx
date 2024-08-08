import Post from '@/components/latestPosts/Post';
import { createClient } from '@/prismicio';

export default async function LatestPosts () {
  const client = createClient();
  /*const articles_arr = await client.getAllByType("article", {
	  limit: 10,
  	  orderings: [
    	  {
      	    field: 'my.article.publishing_time',
      	    direction: 'desc',
    	  },
  	],
  });*/
  const news = await client.getAllByTag('news');
  return ( 
	   <section>
	<h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">News</h1>
    <article className='flex overflow-x-scroll p-3 flex-col gap-2 sm:flex-row flex-wrap sm:justify-center'>
			{news.map((el, index) => (
				<Post
					key={`news-${index}`}
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
