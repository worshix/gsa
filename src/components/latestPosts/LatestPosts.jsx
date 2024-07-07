import Post from '@/components/latestPosts/Post';

const fakePost = {
    image:'/assets/images/banner.png',
    alt:'chakadaro chakadaro',
    title:'A very long title must be here so I\'m just mumbling words to get it done',
    content:'Cannot possibly, deliberatley mumble a whole paragraph. However since'+
    ' I have no other option but to just talk about talking about mumbling...Wait a minute this could' +
    ' actually be an infinite loop of taling about talking about talking about talking about ..... mumbling' +
    ' The question is, can that actualy be classified as mumbling',
    author:'The Mumbler',
    date:'04 July 2024',
    link:'#'
  }

const LatestPosts = () => {
  return (
    <section>
        <h1>Latest Nonsense</h1>
        <article className='flex overflow-x-scroll'>
            <Post {...fakePost} />
            <Post {...fakePost} />
            <Post {...fakePost} />
            <Post {...fakePost} />
            <Post {...fakePost} />
        </article>
    </section>
  )
}

export default LatestPosts
