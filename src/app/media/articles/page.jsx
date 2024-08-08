import Post from '@/components/latestPosts/Post';
import { createClient } from '@/prismicio';

const metadata = {
  title: "GSA Articles: Insights on Antimicrobial Resistance",
  description: "Stay informed about antimicrobial resistance with articles from Generational Stewards for Antimicrobials (GSA). Read expert insights, news, and stories on our mission to combat AMR.",
  keywords: ["antimicrobial resistance", "GSA articles", "AMR insights", "health advocacy", "stewardship"],
  author: "Generational Stewards for Antimicrobials (GSA)"
}

export default async function LatestPosts () {
  const client = createClient();
  const articles_arr = await client.getAllByTag('articles');
  return ( 
	   <section>
	<h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">Articles</h1>
    <article className='flex overflow-x-scroll p-3 flex-col gap-2 sm:flex-row flex-wrap sm:justify-center'>
			{articles_arr.map((el, index) => (
				<Post
					key={`article-${index}`}
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
