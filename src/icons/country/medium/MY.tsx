import React from 'react';

import { useStableUniqueId } from 'hooks';

export const MY = () => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H20V15H0V0Z"
          fill="#F7FCFF"
        />
        <rect
          x="0.0169678"
          y="3.125"
          width="20"
          height="1.8125"
          fill="#E31D1C"
        />
        <rect
          x="0.0169678"
          y="6.375"
          width="20"
          height="1.8125"
          fill="#E31D1C"
        />
        <rect x="0.0698242" y="9.5" width="20" height="1.5625" fill="#E31D1C" />
        <rect
          x="0.0698242"
          y="12.625"
          width="20"
          height="1.6875"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H20V1.5625H0V0Z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H10V8.5H0V0Z"
          fill="#3D58DB"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.24597 3.87629C2.24597 4.73643 2.65111 5.54981 3.47533 5.54981C4.71194 5.54981 4.95252 5.28617 5.52955 4.92244C5.66598 5.22886 5.20582 6.54017 3.45845 6.54017C2.06079 6.51204 0.931274 5.3892 0.931274 3.87629C0.931274 2.13972 2.20851 1.20187 3.42338 1.21249C4.4959 1.21249 5.63341 1.82109 5.59856 2.59748C5.09321 2.10383 4.5445 2.10383 3.63107 2.10383C2.71764 2.10383 2.24597 3.01604 2.24597 3.87629Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.875 4.5625L6.29559 5.40823L6.32395 4.38345L5.35809 4.7271L5.98338 3.9147L5 3.625L5.98338 3.3353L5.35809 2.5229L6.32395 2.86655L6.29559 1.84177L6.875 2.6875L7.45441 1.84177L7.42605 2.86655L8.39191 2.5229L7.76662 3.3353L8.75 3.625L7.76662 3.9147L8.39191 4.7271L7.42605 4.38345L7.45441 5.40823L6.875 4.5625Z"
          fill="#FECA00"
        />
      </g>
    </svg>
  );
};
