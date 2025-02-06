import Giscus from "@giscus/react";

interface CustomGiscusProps {
  term: string;
}

const CustomGiscus = ({ term }: CustomGiscusProps) => {
  return (
    <Giscus
      id={process.env.GISCUS_ID}
      repo={`${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/portfolio-ai`}
      repoId={process.env.GISCUS_REPOID}
      category={process.env.GISCUS_CATEGORY}
      categoryId={process.env.GISCUS_CATEGORY_ID}
      mapping="specific"
      term={term}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
};

export default CustomGiscus;
