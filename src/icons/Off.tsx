import * as React from "react";

function Off(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M12.625 26c-7 0-12.6-5.6-12.6-12.6 0-4 1.8-7.6 5-10 .8-.4 1.8-.4 2.2.4.6.8.4 1.8-.4 2.2-2.2 1.8-3.4 4.6-3.4 7.4 0 5.2 4.2 9.2 9.2 9.2 5 0 9.2-4.2 9.2-9.2 0-3.2-1.6-6-4.2-7.8-.8-.4-1-1.6-.4-2.2.4-.8 1.6-1 2.2-.4 3.6 2.4 5.6 6.2 5.6 10.4.2 7-5.4 12.6-12.4 12.6z" />
        <path d="M12.625 16.4c-1 0-1.6-.8-1.6-1.6V1.6c0-1 .8-1.6 1.6-1.6s1.6.8 1.6 1.6v13.2c0 1-.6 1.6-1.6 1.6z" />
      </g>
    </svg>
  );
}

export default React.memo(Off);
