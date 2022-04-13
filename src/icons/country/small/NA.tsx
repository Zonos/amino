import React from 'react';

import { useStableUniqueId } from 'hooks';

export const NA = () => {
  const ids = useStableUniqueId(2);
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <rect width="16" height="12" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12H16V0H0Z"
          fill="#009933"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12H16V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12L16 0H0Z"
            fill="#3195F9"
          />
          <path
            d="M-0.506236 13.5468L-0.240958 14.0274L0.21286 13.7185L17.6288 1.86383L17.9798 1.62488L17.8009 1.23978L16.6299 -1.27981L16.3843 -1.80836L15.8993 -1.48519L-1.77858 10.2931L-2.16135 10.5481L-1.93909 10.9508L-0.506236 13.5468Z"
            fill="#E31D1C"
            stroke="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.11477 4.62247L2.46772 5.42973L2.31099 4.4071L1.347 4.78268L1.72258 3.81869L0.699951 3.66196L1.5072 3.01491L0.699951 2.36786L1.72258 2.21113L1.347 1.24715L2.31099 1.62272L2.46772 0.600098L3.11477 1.40735L3.76181 0.600098L3.91855 1.62272L4.88253 1.24715L4.50695 2.21113L5.52958 2.36786L4.72233 3.01491L5.52958 3.66196L4.50695 3.81869L4.88253 4.78268L3.91855 4.4071L3.76181 5.42973L3.11477 4.62247ZM3.11477 4.26491C3.80512 4.26491 4.36477 3.70527 4.36477 3.01491C4.36477 2.32456 3.80512 1.76491 3.11477 1.76491C2.42441 1.76491 1.86477 2.32456 1.86477 3.01491C1.86477 3.70527 2.42441 4.26491 3.11477 4.26491ZM4.11477 3.01491C4.11477 3.5672 3.66705 4.01491 3.11477 4.01491C2.56248 4.01491 2.11477 3.5672 2.11477 3.01491C2.11477 2.46263 2.56248 2.01491 3.11477 2.01491C3.66705 2.01491 4.11477 2.46263 4.11477 3.01491Z"
            fill="#FECA00"
          />
        </g>
      </g>
    </svg>
  );
};
