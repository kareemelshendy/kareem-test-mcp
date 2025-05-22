import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgStarsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 52 86"
    {...props}
  >
    <path
      fill="currentColor"
      d="m29.477 1.858-.845.47-.469-.842a1.192 1.192 0 0 0-2.08 1.157l.47.842-.843.469a1.192 1.192 0 0 0 1.157 2.08l.845-.471.47.845a1.191 1.191 0 0 0 2.08-1.157l-.469-.842.846-.47a1.192 1.192 0 0 0-1.157-2.08zm20.035 49.783-.846.47-.47-.845a1.192 1.192 0 0 0-2.08 1.157l.47.845-.841.469a1.191 1.191 0 0 0 1.157 2.08l.845-.47.47.844a1.192 1.192 0 0 0 2.08-1.157l-.47-.845.845-.47a1.192 1.192 0 0 0-1.157-2.08zM4.769 80.361l-.842.47-.47-.846a1.192 1.192 0 0 0-2.08 1.157l.47.845-.845.47a1.192 1.192 0 0 0 1.157 2.08l.842-.468.47.845a1.192 1.192 0 0 0 2.08-1.157l-.47-.845.845-.47a1.191 1.191 0 0 0-1.157-2.08"
    />
  </svg>
);
const Memo = memo(SvgStarsIcon);
export default Memo;
