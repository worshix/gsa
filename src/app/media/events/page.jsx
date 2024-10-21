import Post from '@/components/latestPosts/Post';
import { createClient } from '@/prismicio';
import { revalidateTag } from "next/cache";

const metadata = {
  title: "GSA Events: Join the Fight Against Antimicrobial Resistance",
  description: "Find upcoming events, conferences, and workshops hosted by Generational Stewards for Antimicrobials (GSA). Join our efforts to combat antimicrobial resistance and stay updated on our latest activities.",
  keywords: ["antimicrobial resistance events", "GSA conferences", "AMR workshops", "health advocacy events", "stewardship meetings"],
  author: "Generational Stewards for Antimicrobials (GSA)"
}

export default async function LatestPosts () {
  const client = createClient();
  const events = await client.getAllByTag('events');
  revalidateTag("prismicTag");
  return ( 
	   <section>
	<h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">Events</h1>
    <article className='flex overflow-x-scroll p-3 flex-col gap-2 sm:flex-row flex-wrap sm:justify-center'>
			{events.map((el, index) => (
				<Post
					key={`event-${index}`}
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
