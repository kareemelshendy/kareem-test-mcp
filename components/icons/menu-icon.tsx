import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 15"
    {...props}
  >
    <path
      fill="currentColor"
      d="M18 7.53a.75.75 0 0 1-.75.75H.75a.75.75 0 1 1 0-1.5h16.5a.75.75 0 0 1 .75.75M.75 2.28h16.5a.75.75 0 1 0 0-1.5H.75a.75.75 0 0 0 0 1.5m16.5 10.5H.75a.75.75 0 1 0 0 1.5h16.5a.75.75 0 1 0 0-1.5"
    />
  </svg>
);
const Memo = memo(SvgMenuIcon);
export default Memo;
