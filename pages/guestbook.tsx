import { NextPage } from "next";
import Giscus from "@giscus/react";
import { NextSeo } from "next-seo";

const GuestBookPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`Guestbook | ${process.env.NEXT_PUBLIC_FIRST_NAME} ${process.env.NEXT_PUBLIC_LAST_NAME}`}
        description="Leave messages on my portfolio site's guestbook :)"
      />
      <h1 className="text-3xl font-bold">GuestBook</h1>
      <p className="mt-4 text-gray-300">Leave a message :)</p>
      <div className="mt-16">
        <Giscus
          id={process.env.GISCUS_ID}
          repo={`${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/portfolio-ai`}
          repoId={process.env.GISCUS_REPOID}
          category={process.env.GISCUS_CATEGORY}
          categoryId={process.env.GISCUS_CATEGORY_ID}
          mapping="specific"
          term="GuestBook"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark"
          lang="en"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default GuestBookPage;
