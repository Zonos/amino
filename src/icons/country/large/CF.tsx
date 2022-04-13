import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CF = () => {
  const ids = useStableUniqueId(1);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="24"
      >
        <rect width="32" height="24" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H32V6H0V0Z"
          fill="#3D58DB"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 6H32V12H0V6Z"
          fill="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12H32V18H0V12Z"
          fill="#73BE4A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 18H32V24H0V18Z"
          fill="#FFD018"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.52953 5.41606L2.10499 7.09777L2.87972 4.21741L1.09985 2.37743L3.50989 2.27794L4.52953 -0.570312L5.54916 2.27794H7.9551L6.17933 4.21741L7.06866 6.92776L4.52953 5.41606Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0H20V24H12V0Z"
          fill="#E11C1B"
        />
      </g>
    </svg>
  );
};
