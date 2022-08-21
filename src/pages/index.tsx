import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
// import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  const dispPosts = allPosts.filter((post) => {
    if (post.published === true) {
      return post;
    }
  });
  return (
    <>
      <Layout>
        <Head>
          <title>Tech Blog</title>
        </Head>
        <Container>
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              // coverImage={heroPost.coverImage}
              date={heroPost.date}
              // author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {/* {morePosts.length > 0 && <MoreStories posts={allPosts} />} */}
          <MoreStories posts={dispPosts} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "published",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
