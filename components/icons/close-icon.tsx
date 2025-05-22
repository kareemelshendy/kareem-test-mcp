import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 6 6 18M6 6l12 12"
    />
  </svg>
);
const Memo = memo(SvgCloseIcon);
export default Memo;
