import React from 'react';

import { useStableUniqueId } from 'hooks';

export const AW = () => {
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
          fill="#5BA3DA"
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
            d="M2.7803 4.28993L0.242249 3.5357L2.83666 2.79658L3.47003 0.436523L4.20125 2.86868L6.60054 3.51054L4.19416 4.23364L3.47598 6.55795L2.7803 4.28993Z"
            fill="#EF2929"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.7803 4.28993L0.242249 3.5357L2.83666 2.79658L3.47003 0.436523L4.20125 2.86868L6.60054 3.51054L4.19416 4.23364L3.47598 6.55795L2.7803 4.28993Z"
            fill="#FF0000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.0001 7H6.10352e-05V8.00006H16.0001V7ZM16.0001 9.00004H6.10352e-05V10.0001H16.0001V9.00004Z"
            fill="#FAD615"
          />
        </g>
      </g>
    </svg>
  );
};
