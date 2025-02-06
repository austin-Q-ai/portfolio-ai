import Link from "@/components/Shared/Link";
import Socials from "@/components/Shared/Socials";

const Footer = (): JSX.Element => {
  return (
    <footer className="mx-auto mb-16 flex max-w-3xl flex-col items-center space-y-4 px-8 text-center">
      <Socials small className="mb-8" />
      <p>
        Made by <Link href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}>{process.env.NEXT_PUBLIC_FIRST_NAME || 'Chai '} {process.env.NEXT_PUBLIC_LAST_NAME || 'Dev'}</Link>
      </p>
      <p>
        This portfolio is open source and the source code can be found{" "}
        <Link href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/portfolio-ai`}>
          on GitHub
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
