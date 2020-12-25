import * as React from "react";

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 10 17" {...props}>
      <path
        d="M9.08 8.92c0 .165-.062.33-.188.454L1.536 16.73a.646.646 0 01-.915-.003.648.648 0 01-.003-.916L7.51 8.918.62 2.026a.646.646 0 01.003-.916.648.648 0 01.916-.003L8.89 8.462c.12.12.189.285.189.455v.003z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default React.memo(ArrowRight);
