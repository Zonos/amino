import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GR = () => {
  const ids = useStableUniqueId(1);
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
          d="M0 0H16V12H0V0Z"
          fill="#F7FCFF"
        />
        <rect x="0.0135498" y="2.75" width="16" height="1.5" fill="#4564F9" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H16V1.5H0V0Z"
          fill="#4564F9"
        />
        <rect x="-0.0294189" y="5.5" width="16" height="1.5" fill="#4564F9" />
        <rect
          x="0.0559082"
          y="8.19995"
          width="16"
          height="1.5"
          fill="#4564F9"
        />
        <rect x="0.0507812" y="10.75" width="16" height="1.5" fill="#4564F9" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H8V7H0V0Z"
          fill="#4564F9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.23554 0H4.81769V2.75H8V4.64319H4.81769V7.5H3.23554V4.64319H0V2.75H3.23554V0Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};
