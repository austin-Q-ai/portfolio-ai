import Socials from "@/components/Shared/Socials";
import NextImage from "next/image";
import AvatarJPG from "public/static/images/avatar.png";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          {process.env.NEXT_PUBLIC_FIRST_NAME} {process.env.NEXT_PUBLIC_LAST_NAME}
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-300 will-change-transform">
          GenAI Specialist | Backend Engineering | MLOps Engineer | Business Automation | Cloud Architect | 9+ years of experience | Startup Mindset
        </h2>
        <hr />
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          A highly skilled <b>GenAI Specialist & Backend Developer</b> with over 9
          years of experience designing, developing, and maintaining AI & Saas/Web
          applications. What makes me apart from the crowd is my proficienty in 
          AI frameworks and tools such as{" "}
          <b>Langchain, Langgraph, AWS SageMaker/Bedrock, Azure AI, LangSmith, LangFlow, AutoGen</b>. Passionate about
          creating engaging user experiences and implementing clean, efficient
          code that delivers results.
        </p>
        <Socials className="!mt-12" />
      </div>
      <div className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform">
        <NextImage
          src={AvatarJPG}
          layout="fill"
          placeholder="blur"
          alt={`${process.env.NEXT_PUBLIC_FIRST_NAME || 'Chai'} ${process.env.NEXT_PUBLIC_LAST_NAME || 'Dev'}`}
        />
      </div>
    </div>
  );
};

export default Hero;
