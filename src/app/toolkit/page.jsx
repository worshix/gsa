import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import * as prismic from '@prismicio/client'


export const metadata = {
    title:'Toolkit'
}
async function Toolkit() {
  
  const client = createClient()
  const toolkits = await client.getAllByType('toolkit')
  console.log(toolkits[0])

  return (
    <main>
      <h1 className="text-5xl font-bold my-10 text-center text-main-400">Toolkit</h1>
      
	  {toolkits.map((el) =>
	      <article>
	      	<h1>{el.data.title}</h1>
	        <PrismicNextLink field={el.data.pdf_link}>
  			Click here to view/download the pdf
		</PrismicNextLink>
	        <p>{el.data.description}</p>
	        <aside> 
	          Published by {el.data.author} on  
			<time
              		  datetime={
				(prismic.asDate(el.data.publishing_time)).toISOString()
          		  }
              		  >
             			{prismic.asDate(el.data.publishing_time).toLocaleString()}
              		</time>
	        </aside>
	      </article>
	   )}
    </main>
  )
}

export default Toolkit
