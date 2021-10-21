import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO, add} from "date-fns"
import { getAllPosts } from "../lib/data"

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Siilintangs Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {posts.map(post => (
           <BlogListPost key={post.slug} {...post} />
        ))}
      </div>
      
    </div>
  )
}

export async function getStaticProps() {

  const allPosts = getAllPosts()
  
  return {
      props: {
          posts: allPosts.map(({data, content, slug}) => ({
            ...data,
            date: data.date.toISOString(),
            content: content,
            slug 
          }))
      }
  }
}

function BlogListPost({title, slug, date, content}) {
  return (
    <div className="border border-gray-100 shadow hover:shadow-md hover:border-gray-300 rounded-md p-4 transition duration-200 ease-linear">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{title}</a>
        </Link>
      </div>
      <div className="text-xs text-gray-600">{format(parseISO(date), 'MMM do uuu')}</div>
      <div className="text-lg">{content.substr(0, 300)}</div>
    </div>
    
  )
}