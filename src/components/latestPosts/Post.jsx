/* For each post in summary */
import Link from "next/link";
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import * as prismic from '@prismicio/client';

const Post = ({image, title, content, author, date, link}) => {

    const contentArray = prismic.asText(content).split(/\s+/)
    const summary = contentArray.slice(0,25)

  return (
    <div className="post-card w-[350px]  shrink-0">
      <div>
        <PrismicNextImage field={image} className="post-card-image" />
      </div>
      <div className="post-card-body">
        <h1 className="font-bold">{title}</h1>
        <p>{summary.join(" ") + "..."}</p>
        <Link href={link}>read more</Link>
      </div>
      <div className="post-card-details">
        <span>{author}</span>
        <span>{date}</span>
	<time
  	  datetime={prismic
          .asDate(date)
          .toISOString()}
	>
  	  {prismic.asDate(date).toLocaleString()}
	</time>
      </div>
    </div>
  )
};

export default Post
