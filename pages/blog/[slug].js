import Head from 'next/head'
import {format, parseISO} from "date-fns"
import { getAllPosts } from '../../lib/data'

import marked from 'marked';


export default function BlogPage({title, date, content}) {

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="border-b-2 border-gray-200 mb-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="text-md text-gray-600">{format(parseISO(date), 'MMM do uuu')}</div>
        </div>
       
        <div className="prose max-w-max" dangerouslySetInnerHTML={{__html: marked(content)}}></div>
        </main>
    </div>
  )
}

export async function getStaticProps(context) {
    
    const { params } = context 
    // params contain slug
    const allPosts = getAllPosts()
    const {data, content} = allPosts.find(post => post.slug === params.slug)
    
    return {
        props: {
            ...data,
            date: data.date.toISOString(),
            content: content,
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: getAllPosts().map(post => ({
            params: {
                slug: post.slug,
            },
        })),

        fallback: false
    }
}