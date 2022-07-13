
import { fetchEntries } from '../util/contentfulPost'


import Post from '../components/Post'
// import Search from '../components/QuantitySearch'

export default function Home({ posts }) {
  return (
    <div className="container">
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
      <main>
        <div className="posts">
          {posts.map((p) => {
            console.log("startofP", p.price, "this is title", p.referencePicture.fields.file.url, "This is picture", p.description.content, "this is description");
            return <Post key={p.Date} title={p.titel} description={p.titel} image={p.referencePicture.fields.file.url} price={p.price} />
          })}
        </div>
        {/* <Search /> */}
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

