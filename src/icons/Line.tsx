import * as React from "react";

function Line(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" {...props}>
      <path
        d="M1 1l11.314 11.314"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default React.memo(Line);
