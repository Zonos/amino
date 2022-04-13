import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GG = () => {
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
            d="M7.5 0H12.5V5H20V10H12.5V15H7.5V10H0V5H7.5V0Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.12849 1.90381L8.75005 3.00019V6.25009H4.29082V6.21436L3.19128 5.59102V9.31614L4.23169 8.75009H8.75005V11.907L8.12849 13.0033H11.8536L11.2554 11.9038H11.2501V8.75009H15.7504L16.7908 9.31614V5.59102L15.6913 6.21436V6.25009H11.2501V3.00334H11.2554L11.8536 1.90381H8.12849Z"
            fill="#FECA00"
          />
        </g>
      </g>
    </svg>
  );
};
