import Media from "./Media";
import Gallery from "./Gallery";

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

const Media = () => {
return (
  <main>
    <Media props = {articleList} />
    <Media props = {newsletterList} />
    <Gallery />
    </main>
)
}

export default Media
