import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TL = () => {
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
          d="M0 -0.625H-0.625V0V15V15.625H0H20H20.625V15V0V-0.625H20H0Z"
          fill="#E31D1C"
          stroke="#F7FCFF"
          strokeWidth="1.25"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0L15 7.5L0 15V0Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0L10 7.5L0 15V0Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.15489 9.00534L2.89269 10.3178L2.76084 8.45192L1.15117 7.46034L2.82984 6.9336L3.10437 5.08474L4.26655 6.54864L5.96156 6.09446L5.08547 7.82904L5.93742 9.50201L4.15489 9.00534Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};
