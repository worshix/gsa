/* For each post in summary */
import Link from "next/link";
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import * as prismic from '@prismicio/client';

const Post = ({image, title, content, author, date, link}) => {

    const contentArray = prismic.asText(content).split(/\s+/)
    const summary = contentArray.slice(0,25)
    console.log(image);

  return (
    <div className="post-card w-[320px] shrink-0 rounded-md shadow-md shadow-black mx-auto overflow-hidden">
      <div className="h-[200px] overflow-hidden bg-main-500">
        <div className="w-[30px] h-[30px] p-1 text-white ml-auto bg-main2 rounded-md text-center font-bold absolute">
            N
        </div>
        <PrismicNextImage field={image} className="post-card-image rounded-md" />
      </div>
      <div className="post-card-body p-2">
        <h1 className="font-bold text-center text-main-500 p-2">{title}</h1>
        <p className="font-light text-slate-600">{summary.join(" ") + "..."}</p>
        <Link type="button" className="flex text-black gap-[2px] services-link my-2 ml-auto h-fit p-2 text-xs w-fit" href={link}>
          <div className="block bg-slate-200 p-2 rounded-lg text-black font-bold">read more</div>
          <div className="bg-slate-200 p-2 rounded-lg flex w-[30px] overflow-hidden flex-shrink-0 h-[32px] arrow-container">
            <i className="arrow-right-1 text-black bi bi-arrow-right block absolute duration-500 -translate-x-full transition-all opacity-0"></i>
            <i className="arrow-right-2 text-black bi bi-arrow-right block absolute duration-500 transition-all"></i>
          </div>
        </Link>
    </div>
      <div className="post-card-details bg-main-500 p-2 text-white">
        <span className="block">by {author}</span>
	      <time className="text-xs"
  	      datetime={
            prismic
            .asDate(date)
            .toISOString()
          }
	      >
  	     {prismic.asDate(date).toLocaleString()}
	      </time>

      </div>
    </div>
  )
};

export default Post
