import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgPhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <path
      fill="currentColor"
      d="m13.898 10.131-2.944-1.319-.008-.004a1 1 0 0 0-.995.123l-1.522 1.297c-.963-.469-1.958-1.456-2.426-2.407L7.3 6.276l.036-.048a1 1 0 0 0 .082-.941v-.008L6.096 2.33a1 1 0 0 0-1.038-.595A3.516 3.516 0 0 0 2 5.228c0 4.962 4.038 9 9 9a3.516 3.516 0 0 0 3.492-3.058 1 1 0 0 0-.594-1.039M11 13.228a8.01 8.01 0 0 1-8-8 2.51 2.51 0 0 1 2.18-2.5v.007l1.312 2.938L5.2 7.219a1 1 0 0 0-.098 1.03c.566 1.157 1.733 2.316 2.904 2.881a1 1 0 0 0 1.03-.106l1.52-1.296 2.937 1.315h.007a2.51 2.51 0 0 1-2.5 2.185"
    />
  </svg>
);
const Memo = memo(SvgPhoneIcon);
export default Memo;
