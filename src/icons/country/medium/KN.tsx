import React from 'react';

import { useStableUniqueId } from 'hooks';

export const KN = () => {
  const ids = useStableUniqueId(1);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V15H20V0H0Z"
          fill="#C51918"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V15L20 0H0Z"
          fill="#5EAA22"
        />
        <path
          d="M0.397446 17.47L0.849551 17.9743L1.41291 17.5983L24.076 2.47115L24.8255 1.97087L24.224 1.29988L20.8985 -2.4099L20.4464 -2.91425L19.883 -2.53822L-2.78004 12.589L-3.52954 13.0892L-2.92805 13.7602L0.397446 17.47Z"
          fill="#272727"
          stroke="#FFD018"
          strokeWidth="1.5625"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.55534 10.574L6.87495 11.7581L6.44044 10.4242L5.08914 9.99465L6.21517 9.30675L6.07949 7.91148L7.19084 8.76592L8.34194 8.12786L8.01911 9.54912L8.94264 10.612L7.55534 10.574Z"
          fill="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8053 6.47827L13.1249 7.66243L12.6904 6.32848L11.3391 5.89894L12.4652 5.21104L12.3295 3.81578L13.4408 4.67022L14.5919 4.03216L14.2691 5.45341L15.1926 6.51629L13.8053 6.47827Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};
