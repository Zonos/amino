import React from 'react';

import { useStableUniqueId } from 'hooks';

export const EH = () => {
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V5H20V0H0Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10V15H20V10H0Z"
          fill="#5EAA22"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0L10 7.5L0 15V0Z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.555 9.67322C13.555 9.67322 12.1332 8.81399 12.1332 7.39411C12.1332 5.97423 13.555 5.22726 13.555 5.22726C12.9186 4.8235 10.712 5.39974 10.712 7.44037C10.712 9.481 12.8979 9.85802 13.555 9.67322ZM14.7053 7.07037L13.8779 6.2951L14.1636 7.28487L13.3629 7.66416L14.3464 7.98427L14.7735 9.05567L14.9602 8.06389L15.9316 8.2784L15.1966 7.56063L15.4453 6.79482L14.7053 7.07037Z"
          fill="#E31D1C"
        />
      </g>
    </svg>
  );
};
