import * as React from "react";

function Pencil(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M1.126 3.445c.776-.56 10.834-3.649 11.973-1.343C14.24 4.408 1.765 4.02 1.4 7.346c-.366 3.325 13.46-3.874 12.878-.304-.583 3.57-12.766 1.913-12.502 5.69.264 3.776 11.765-3.37 12.817-1.183 1.052 2.187-4.484 3.059-6.83 3.96"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default React.memo(Pencil);
