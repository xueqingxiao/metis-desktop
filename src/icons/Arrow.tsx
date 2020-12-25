import * as React from "react";

function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" {...props}>
      <path
        d="M5.953.083a1 1 0 00-1 1v.149a1 1 0 00.999 1l6.308.005a.5.5 0 01.354.853L1.07 14.715a1 1 0 00.002 1.412l.11.109a1 1 0 001.416-.003l11.53-11.612a.5.5 0 01.855.352l.006 6.296a1 1 0 001 .999h.148a1 1 0 001-1V1.083a1 1 0 00-1-1H5.953z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default React.memo(Arrow);
