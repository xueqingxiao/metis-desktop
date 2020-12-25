import * as React from "react";

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 10 17" {...props}>
      <path
        d="M.92 8.92c0 .165.062.33.188.454l7.356 7.356a.646.646 0 00.915-.003.648.648 0 00.003-.916L2.49 8.918 9.38 2.026a.646.646 0 00-.003-.916.648.648 0 00-.916-.003L1.11 8.462a.642.642 0 00-.189.455v.003z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default React.memo(ArrowLeft);
