import { ReactNode } from "react";

import {
  // FacebookLogo,
  GitHubLogo,
  // Twitterlogo,
  HashnodeLogo,
  // LinkedInLogo,
} from "@/components/Shared/Icons";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  // {
  //   id: "twitter",
  //   name: "Twitter",
  //   // TODO: replace company url with your personal one.
  //   url: `https://x.com/${process.env.TWITTER_USERNAME}`,
  //   icon: <Twitterlogo color="#1DA1F2" />,
  // },
  // {
  //   id: "linkedin",
  //   name: "Linkedin",
  //   url: `https://www.linkedin.com/in/${process.env.LINKEDIN_USERNAME}`,
  //   icon: <LinkedInLogo />,
  // },
  // {
  //   id: "facebook",
  //   name: "Facebook",
  //   // TODO: replace company url with your personal one.
  //   url: `https://facebook.com/${process.env.FACEBOOK_USERNAME}`,
  //   icon: <FacebookLogo />,
  // },
  {
    id: "github",
    name: "GitHub",
    url: `https://github.com/${process.env.GITHUB_USERNAME}`,
    icon: <GitHubLogo />,
  },

  {
    id: "hashnode",
    name: "Hashnode",
    url: `https://hashnode.com/@${process.env.HASHNODE_USERNAME}`,
    icon: <HashnodeLogo color="#2962ff" />,
  },
];

export default socials;
