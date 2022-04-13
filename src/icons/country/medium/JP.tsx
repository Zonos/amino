import React from 'react';

import { useStableUniqueId } from 'hooks';

export const JP = () => {
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
          fill="#F7FCFF"
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 12.1875C12.5888 12.1875 14.6875 10.0888 14.6875 7.5C14.6875 4.91117 12.5888 2.8125 10 2.8125C7.41117 2.8125 5.3125 4.91117 5.3125 7.5C5.3125 10.0888 7.41117 12.1875 10 12.1875Z"
            fill="#E31D1C"
          />
        </g>
      </g>
    </svg>
  );
};
