import React from 'react';

import { useStableUniqueId } from 'hooks';

export const MK = () => {
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
          fill="#F50100"
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
            d="M0 -0.026123V2.52633L8.75 6.24586L2.03452 -0.026123H0ZM10 7.5001L11.875 0.000102054H8.125L10 7.5001ZM10 7.5001L8.125 15.0001H11.875L10 7.5001ZM0 12.4696V15.0221L2.03452 15.0221L8.75 8.7501L0 12.4696ZM20 2.54156V-0.0108876L17.9655 -0.0108877L11.25 6.26109L20 2.54156ZM20 15.0373V12.4849L11.25 8.76534L17.9655 15.0373L20 15.0373ZM20 5.6251L12.5 7.5001L20 9.3751V5.6251ZM7.5 7.5001L0 5.6251V9.3751L7.5 7.5001Z"
            fill="#FFD018"
          />
          <path
            d="M10 10.625C11.7259 10.625 13.125 9.22589 13.125 7.5C13.125 5.77411 11.7259 4.375 10 4.375C8.27411 4.375 6.875 5.77411 6.875 7.5C6.875 9.22589 8.27411 10.625 10 10.625Z"
            fill="#FFD018"
            stroke="#F50100"
            strokeWidth="1.25"
          />
        </g>
      </g>
    </svg>
  );
};
