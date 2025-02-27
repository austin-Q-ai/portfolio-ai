import { GetStaticProps, NextPage } from "next";

import ProjectCard from "@/components/Projects/ProjectCard";

import { allProjects, Project } from "contentlayer/generated";
import Link from "@/components/Shared/Link";
import { ArrowRight } from "react-feather";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { NextSeo } from "next-seo";

export interface ProjectWithPlaceholderImage extends Project {
  placeholderImage: string;
}

interface ProjectsPageProps {
  allProjectsWithPlaceholderImages: ProjectWithPlaceholderImage[];
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({
  allProjectsWithPlaceholderImages,
}) => {
  return (
    <>
      <NextSeo
        title={`Projects | ${process.env.NEXT_PUBLIC_FIRST_NAME || "Chai"} ${process.env.NEXT_PUBLIC_LAST_NAME || "Dev"}`}
        description={`Projects worked upon by ${process.env.NEXT_PUBLIC_FIRST_NAME || "Chai"} ${process.env.NEXT_PUBLIC_LAST_NAME || "Dev"}`}
      />
      <h1 className="mb-8 text-2xl font-bold">Projects</h1>
      <div className="flex-col space-y-8">

        {allProjectsWithPlaceholderImages.map((project, index) => (
          <ProjectCard
            key={project._id}
            name={project.name}
            description={project.description}
            link={project.link}
            githubLink={project.githubLink}
            slug={project.slug}
            image={project.image}
            placeholderImage={project.placeholderImage}
          />
        ))}
      </div>
      <Link
        href={`https://github.com/stars/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/lists/projects`}
        className="group mt-8 flex flex-row items-center justify-start space-x-2 text-xl font-medium"
        noExternalLinkIcon
      >
        <span>View more on GitHub</span>
        <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </Link>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsWithPlaceholderImages = [];

  for (const project of allProjects) {
    const previewUrl = await getPreviewImageUrl(project.image.url);

    allProjectsWithPlaceholderImages.push({
      ...project,
      placeholderImage: previewUrl,
    });
  }

  return {
    props: { allProjectsWithPlaceholderImages },
  };
};

export default ProjectsPage;
