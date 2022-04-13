import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TT = () => {
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
          fill="#E31D1C"
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
            d="M14.7741 14.7409L14.5091 14.9576L14.2752 14.7078L-0.896837 -1.49154L-1.16442 -1.77724L-0.861411 -2.02505L0.686764 -3.29121L0.95167 -3.50786L1.18561 -3.25809L16.3577 12.9413L16.6252 13.227L16.3222 13.4748L14.7741 14.7409Z"
            fill="#272727"
            stroke="#F7FCFF"
            strokeWidth="0.732"
          />
        </g>
      </g>
    </svg>
  );
};
