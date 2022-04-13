import React from 'react';

import { useStableUniqueId } from 'hooks';

export const VC = () => {
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
          d="M5 0H15V15H5V0Z"
          fill="#FFDC17"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 0H20V15H15V0Z"
          fill="#5FBF2B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H5V15H0V0Z"
          fill="#2E42A5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.329 3.125L10.4289 5.9143L12.329 8.60494L14.2291 5.9143L12.329 3.125ZM7.67327 3.17428L5.625 5.9143L7.52507 8.55577L9.42514 5.9143L7.67327 3.17428ZM8.02696 8.993L10.0752 6.25298L11.8271 8.993L10.0752 11.8132L8.02696 8.993Z"
          fill="#5FBF2B"
        />
      </g>
    </svg>
  );
};
