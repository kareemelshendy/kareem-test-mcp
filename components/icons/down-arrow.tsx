import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 33"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8 12.112 8 8 8-8"
    />
  </svg>
);
const Memo = memo(SvgDownArrow);
export default Memo;
