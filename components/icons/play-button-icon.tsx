import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgPlayButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 142 142"
    {...props}
  >
    <path
      fill="currentColor"
      d="M0 0v142h142V0zm103.806 8.32h10.776v8.32h-10.776zm-19.097 0h10.776v8.32H84.71zm-19.098 0H76.39v8.32H65.61zm-19.096 0H57.29v8.32H46.515zm-19.098 0h10.777v8.32H27.417zm-19.097 0h10.776v8.32H8.32zm10.776 125.36H8.32v-8.321h10.776zm19.098 0H27.417v-8.321h10.777zm19.097 0H46.515v-8.321H57.29zm19.098 0H65.61v-8.321H76.39zm19.096 0H84.71v-8.321h10.776zm19.098 0h-10.777v-8.321h10.777zm19.097 0h-10.777v-8.321h10.777zm0-16.641H8.32V24.961h125.36zm0-100.398h-10.777V8.32h10.777z"
    />
    <path
      fill="currentColor"
      d="M58.45 49.263v43.474L96.1 71zm8.32 14.411L79.46 71 66.77 78.326z"
    />
    <path
      fill="currentColor"
      d="M125.359 33.281H16.641v75.438h108.718zm-8.32 67.117H24.961V41.602h92.078z"
    />
  </svg>
);
const Memo = memo(SvgPlayButtonIcon);
export default Memo;
