import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgHeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="currentColor"
      d="M16.688 4.205c-1.936 0-3.631.833-4.688 2.24-1.057-1.407-2.752-2.24-4.687-2.24A5.82 5.82 0 0 0 1.5 10.018c0 6.562 9.73 11.874 10.145 12.093a.75.75 0 0 0 .71 0c.415-.219 10.145-5.53 10.145-12.093a5.82 5.82 0 0 0-5.812-5.813M12 20.593c-1.712-.998-9-5.542-9-10.575a4.32 4.32 0 0 1 4.313-4.313c1.823 0 3.354.971 3.993 2.531a.75.75 0 0 0 1.388 0c.64-1.562 2.17-2.53 3.993-2.53A4.32 4.32 0 0 1 21 10.017c0 5.025-7.29 9.576-9 10.575"
    />
  </svg>
);
const Memo = memo(SvgHeartIcon);
export default Memo;
