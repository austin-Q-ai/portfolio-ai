import { GetStaticProps, NextPage } from "next";

import hashnodeData from "@/data/hashnode.json";
import BlogPostCard from "@/components/Blog/BlogPostCard";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { HashnodePostWithPlaceHolderImage } from "types/hashnode";
import { NextSeo } from "next-seo";

interface BlogPostsPageProps {
  posts: HashnodePostWithPlaceHolderImage[];
}

const BlogPostsPage: NextPage<BlogPostsPageProps> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title={`Blog Posts | ${process.env.FirstName} ${process.env.LastName}`}
        description={`Blog written by ${process.env.FirstName} ${process.env.LastName}`}
      />
      <h1 className="mb-8 text-2xl font-bold">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

        {posts.map(post => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            image={post.coverImageUrl}
            placeholderImage={post.placeholderImage}
            date={post.publishedAt}
            readingTime={post.readingTime.text}
            excerpt={post.brief}
            url={`https://${hashnodeData.domain}/${post.slug}`}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = hashnodeData.posts;

  const allProjectsWithPlaceholerImages = [];

  for (const post of posts) {
    const previewUrl = await getPreviewImageUrl(post.coverImageUrl);
    allProjectsWithPlaceholerImages.push({
      ...post,
      placeholderImage: previewUrl,
    });
  }

  return {
    props: { posts: allProjectsWithPlaceholerImages },
  };
};

export default BlogPostsPage;
