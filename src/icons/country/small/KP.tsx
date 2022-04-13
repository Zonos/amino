import React from 'react';

import { useStableUniqueId } from 'hooks';

export const KP = () => {
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
          fill="#3D58DB"
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
            d="M0 2.5H-0.5V3V9V9.5H0H16H16.5V9V3V2.5H16H0Z"
            fill="#C51918"
            stroke="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 8.5C6.38071 8.5 7.5 7.38071 7.5 6C7.5 4.61929 6.38071 3.5 5 3.5C3.61929 3.5 2.5 4.61929 2.5 6C2.5 7.38071 3.61929 8.5 5 8.5Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.99748 6.93486L3.63932 7.87995L4.11846 6.29621L2.79993 5.29657L4.45422 5.26286L4.99748 3.69995L5.54075 5.26286L7.19504 5.29657L5.87651 6.29621L6.35565 7.87995L4.99748 6.93486Z"
            fill="#C51918"
          />
        </g>
      </g>
    </svg>
  );
};
