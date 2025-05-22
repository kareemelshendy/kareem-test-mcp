import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 39 47"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.85 26.515c-.034.035-.303 1.105-.595 2.379-.293 1.273-.488 2.329-.433 2.346s.938.148 1.964.293c2.06.289 4.465.99 5.97 1.739 4.688 2.334 7.792 6.521 8.598 11.6l.206 1.294h4.142l.197-1.173c1.288-7.68 7.03-12.687 15.624-13.624.562-.06 1.02-.134 1.02-.162 0-.259-1.034-4.55-1.116-4.632-.059-.059-.585-.015-1.169.097-6.461 1.242-11.719 4.798-13.917 9.413l-.528 1.107-.041-22.763L21.746.035h-4.192l-.026 14.43-.041 22.71-.708-1.397c-1.837-3.626-5.44-6.496-10.276-8.187-1.378-.481-4.52-1.208-4.652-1.076"
    />
  </svg>
);
const Memo = memo(SvgArrowIcon);
export default Memo;
