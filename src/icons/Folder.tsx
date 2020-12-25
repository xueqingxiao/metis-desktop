import * as React from "react";

function Folder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 15" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.477C0 14.317.651 15 1.455 15h13.09C15.35 15 16 14.317 16 13.477V3.047a1 1 0 00-1-1H8.396a.997.997 0 01-.685-.27L6.107.27A1 1 0 005.422 0H1a1 1 0 00-1 1v12.477zm8.7-8.144a.7.7 0 10-1.4 0v6.066a.7.7 0 101.4 0V5.333z"
        fill="currentColor"
      />
      <path d="M5.375 8.164L8 5.333l2.625 2.831" fill="#fff" />
      <path
        d="M5.375 8.164L8 5.333l2.625 2.831h-5.25z"
        stroke="#fff"
        strokeWidth={1.4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default React.memo(Folder);
