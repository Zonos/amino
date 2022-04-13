import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BD = () => {
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
        <rect width="32" height="24" fill="#38A17E" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 19C16.866 19 20 15.866 20 12C20 8.13401 16.866 5 13 5C9.13401 5 6 8.13401 6 12C6 15.866 9.13401 19 13 19Z"
          fill="#F72E45"
        />
      </g>
    </svg>
  );
};
