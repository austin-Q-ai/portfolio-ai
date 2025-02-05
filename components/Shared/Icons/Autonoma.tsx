import * as React from "react";
import { SVGProps } from "react";

const AutonomaAILogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    viewBox="0 0 200 200"
    {...props}
  >
    <path
      style={{
        opacity: 1,
      }}
      fill="#fbfbfb"
      d="M-.5-.5h200v200H-.5V-.5Z"
    />
    <path
      style={{
        opacity: 1,
      }}
      fill="#030303"
      d="M9.5 1.5c59.668-.167 119.334 0 179 .5 4.396.73 7.23 3.23 8.5 7.5.667 60 .667 120 0 180-1.27 4.27-4.104 6.77-8.5 7.5-59.667.667-119.333.667-179 0-3.833-1.167-6.333-3.667-7.5-7.5-.667-60-.667-120 0-180 1.353-3.85 3.853-6.517 7.5-8Z"
    />
    <path
      style={{
        opacity: 1,
      }}
      fill="#f4f4f4"
      d="M95.5 52.5c4.41-.882 7.909.452 10.5 4a10130.746 10130.746 0 0 1 41.5 85.5c-2.607 5.394-6.441 6.561-11.5 3.5a909359.198 909359.198 0 0 1-36-76l-37 76c-7.82 3.768-11.153 1.435-10-7a5149.067 5149.067 0 0 1 42.5-86Z"
    />
  </svg>
);

export default AutonomaAILogo;
