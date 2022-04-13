import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TO = () => {
  const ids = useStableUniqueId(2);
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
          fill="#E31D1C"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <rect width="11.25" height="10" fill="#F7FCFF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 1.25H5V3.75H2.5V6.25H5V8.75H7.5V6.25H10V3.75H7.5V1.25Z"
            fill="#E31D1C"
          />
        </g>
      </g>
    </svg>
  );
};
