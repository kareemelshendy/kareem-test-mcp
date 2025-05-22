import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgLocationMarkerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.857 5.085a1.143 1.143 0 1 1 2.286 0 1.143 1.143 0 0 1-2.286 0m-3.428 0a4.571 4.571 0 1 1 9.142 0c0 4.282-4.112 6.681-4.285 6.782a.57.57 0 0 1-.567 0c-.178-.1-4.29-2.497-4.29-6.782m1.142 0c0 3.014 2.56 5.015 3.429 5.607.868-.592 3.429-2.593 3.429-5.607a3.429 3.429 0 0 0-6.858 0m8.77 4.83a.572.572 0 0 0-.396 1.072c1.18.436 1.912 1.02 1.912 1.526 0 .954-2.608 2.286-6.857 2.286s-6.857-1.332-6.857-2.286c0-.505.733-1.09 1.912-1.525a.571.571 0 0 0-.396-1.072C.944 10.548 0 11.471 0 12.513c0 2.227 4.122 3.429 8 3.429s8-1.202 8-3.429c0-1.042-.944-1.965-2.66-2.598"
    />
  </svg>
);
const Memo = memo(SvgLocationMarkerIcon);
export default Memo;
