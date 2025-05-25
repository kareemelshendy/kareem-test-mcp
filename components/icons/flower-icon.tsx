import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgFlowerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 70 75"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20.086 9.883C5.275 7.689-4.924 24.313 3.709 36.565-5.566 48.3 3.726 65.479 18.623 64.14c5.53 13.936 25.024 14.494 31.294.898 14.808 2.195 25.01-14.431 16.374-26.681 9.275-11.736-.016-28.915-14.914-27.576-5.528-13.937-25.024-14.494-31.291-.898"
    />
  </svg>
);
const Memo = memo(SvgFlowerIcon);
export default Memo;
