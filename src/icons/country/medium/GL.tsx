import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GL = () => {
  const ids = useStableUniqueId(3);
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
          d="M0 7.5H20V15H0V7.5Z"
          fill="#C51918"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="7"
          width="20"
          height="8"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 7.5H20V15H0V7.5Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 12.5C10.2614 12.5 12.5 10.2614 12.5 7.5C12.5 4.73858 10.2614 2.5 7.5 2.5C4.73858 2.5 2.5 4.73858 2.5 7.5C2.5 10.2614 4.73858 12.5 7.5 12.5Z"
            fill="#F7FCFF"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H20V7.5H0V0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="8"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H20V7.5H0V0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[2]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 12.5C10.2614 12.5 12.5 10.2614 12.5 7.5C12.5 4.73858 10.2614 2.5 7.5 2.5C4.73858 2.5 2.5 4.73858 2.5 7.5C2.5 10.2614 4.73858 12.5 7.5 12.5Z"
            fill="#C51918"
          />
        </g>
      </g>
    </svg>
  );
};
