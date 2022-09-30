import {getAllTags, getPostsByTag} from "../../lib/api";
import Post from "../../interfaces/post";
import Head from "next/head";
import Layout from "../../components/layout";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";

type Props = {
  posts: Post[],
  tag: string
}

export default function Index({ posts, tag }: Props) {
  return (
      <>
        <Layout>
          <Head>
            <title>Tag: {tag}</title>
          </Head>
          <Container>
            <MoreStories posts={posts} />
          </Container>
        </Layout>
      </>
  )
}

type Params = {
  params: {
    tag: string
  }
}


export const getStaticProps = ({ params }: Params) => {
  const posts = getPostsByTag(params.tag, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags'
  ])

  return {
    props: {
      posts: posts,
      tag: params.tag
    },
  }
}

export function getStaticPaths() {
  const tags = getAllTags();

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag,
        },
      }
    }),
    fallback: false,
  }
}
