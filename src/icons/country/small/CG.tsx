import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CG = () => {
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
        <rect width="16" height="12" rx="0.25" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 0V12H0L16 0Z"
          fill="#FA1111"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12V0H16L0 12Z"
          fill="#07A907"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7459 -2.8999L-0.5 11.7881L2.52582 13.2941L17.3203 -0.105896L14.7459 -2.8999Z"
          fill="#FBCD17"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="-3"
          width="19"
          height="17"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.7459 -2.8999L-0.5 11.7881L2.52582 13.2941L17.3203 -0.105896L14.7459 -2.8999Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`} />
      </g>
    </svg>
  );
};
