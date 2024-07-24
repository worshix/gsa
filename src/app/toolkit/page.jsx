import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import * as prismic from '@prismicio/client';

export const metadata = {
  title: 'Toolkit'
};

async function Toolkit() {
  const client = createClient();
  const toolkits = await client.getAllByType('toolkit');

  return (
	<>
	<h1 className="text-5xl font-bold my-10 text-center text-main-400 w-full flex-shrink-0">Toolkit</h1>
    <section className="bg-white p-4 flex flex-col items-center sm:flex-row flex-wrap sm:justify-center sm:items-start">
      {toolkits.map((el, index) => (
        <article key={index} className="mb-8 w-[320px] border-2 border-main-500 rounded-md p-2 flex-shrink-0">
			<div className='flex gap-2'>
          	<h1 className="text-2xl font-bold">{el.data.title}</h1>
			<span className='text-red-600 text-xl block'><i className="bi bi-file-earmark-pdf"></i></span>
			</div>
          <p className="mt-2">{el.data.description}</p>
          <aside className="mt-4 text-sm text-gray-600">
            Published by {el.data.author} on{' '}
            <time dateTime={(prismic.asDate(el.data.publishing_time)).toISOString()}>
              {prismic.asDate(el.data.publishing_time).toLocaleString()}
            </time>
          </aside>
		  <PrismicNextLink field={el.data.pdf_link}
    className="bg-white w-10 h-10 flex justify-center items-center rounded-lg hover:text-blue-600 hover:translate-y-1 hover:duration-300 ml-auto"
	target="_blank"
	title='download'
              	rel="noopener noreferrer">
					<div class="group relative">
    <svg
      class="w-6 h-6"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
	</div>
          </PrismicNextLink>
        </article>
      ))}
    </section>
	</>
  );
}

export default Toolkit;
