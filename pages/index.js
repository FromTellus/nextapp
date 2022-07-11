
import { fetchEntries } from '../util/contentfulPost'


import Post from '../components/Post'

export default function Home({ posts }) {
  return (
    <div className="container">
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
      <main>
        <div className="posts">
          {posts.map((p) => {
            console.log(p);
            return <Post key={p.date} title={p.Title} image={p.ReferencePicture} />
          })}
        </div>
      </main>
    </div>
)};

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}