import * as React from "react";

function Text(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M1 3V1h12v2M3.5 12.5h7M7 1v11"
        stroke="currentColor"
        strokeWidth={1.867}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default React.memo(Text);
