import { SVGProps } from "react";
import { X } from "react-feather";

import {
  NextJSLogo,
  TypescriptLogo,
  ReactLogo,
  FigmaLogo,
  GoLogo,
  TailwindCSSLogo,
  TmcMotorsLogo,
  TalkhealthLogo,
  QuestifyAILogo,
  AutonomaAILogo,
} from ".";

interface IconFactoryProps extends SVGProps<SVGSVGElement> {
  name: string;
}

const IconFactory = ({
  name,
  ...otherProps
}: IconFactoryProps): JSX.Element => {
  switch (name) {
    case "nextjs":
      return <NextJSLogo {...otherProps} />;
    case "typescript":
      return <TypescriptLogo {...otherProps} />;
    case "figma":
      return <FigmaLogo {...otherProps} />;
    case "tailwindcss":
      return <TailwindCSSLogo {...otherProps} />;
    case "go":
      return <GoLogo {...otherProps} />;
    case "react":
      return <ReactLogo {...otherProps} />;
    case "tmc-motors":
      return <TmcMotorsLogo {...otherProps} />;
    case "talkhealth":
      return <TalkhealthLogo {...otherProps} />;
    case "questify-ai":
      return <QuestifyAILogo {...otherProps} />;
    case "autonoma-ai":
      return <AutonomaAILogo {...otherProps} />;
    default:
      return <X />;
  }
};

export default IconFactory;
