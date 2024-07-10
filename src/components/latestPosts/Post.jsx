/* For each post in summary */
import Link from "next/link";

const Post = ({image, alt, title, content, author, date, link}) => {

    const contentArray = content.split(/\s+/)
    const summary = contentArray.slice(0,25)

  return (
    <div className="post-card w-[350px]  shrink-0">
      <div>
        <img className="post-card-image" src={`${image}`} alt={alt}/>
      </div>
      <div className="post-card-body">
        <h1 className="font-bold">{title}</h1>
        <p>{summary.join(" ") + "..."}</p>
        <Link href={link}>read more</Link>
      </div>
      <div className="post-card-details">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}

export default Post
