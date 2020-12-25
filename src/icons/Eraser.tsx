import * as React from "react";

function Eraser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M11.968 2.128a2 2 0 00-2.847.052l-7.47 7.853a1 1 0 00-.004 1.373l2.705 2.883a1 1 0 00.73.316H6.87a1 1 0 00.727-.314l6.719-7.12a2 2 0 00-.057-2.804l-2.291-2.239z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.416 2.352a3 3 0 014.34-.153l1.472 1.439a3 3 0 01.056 4.234L9.078 13.24 3.514 7.87l4.902-5.517z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default React.memo(Eraser);
