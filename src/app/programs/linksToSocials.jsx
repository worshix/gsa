import Link from 'next/link';

const linksToSocials = () => {
  return (
    <article className="articles-socials flex gap-2 text-white p-2 text-xs">
      <Link href="https://twitter.com/Preservefutures"className="flex rounded-md bg-gray-700">
        <span className="mr-1 block p-2">Twitter</span>
        <span className="bi-twitter-x twitter-x block p-2 rounded-r-md"></span>
      </Link>
      <Link href="https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/" className="flex linkedin rounded-md">
        <span className="mr-1 block p-2">LinkedIn</span>
        <span className="bi-linkedin block p-2 bg-[#24a3e2] rounded-r-md"></span>
      </Link>
    </article>  )
}

export default linksToSocials
