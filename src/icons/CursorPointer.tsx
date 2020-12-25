import * as React from "react";

function CursorPointer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 15 15" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.513 6.583c.86-.342.834-1.568-.04-1.873L1.923.672a1 1 0 00-1.278 1.26l3.847 11.54c.293.876 1.515.92 1.872.069l1.9-4.545a1 1 0 01.552-.543l4.697-1.87z"
        fill="currentColor"
      />
    </svg>
  );
}

export default React.memo(CursorPointer);
