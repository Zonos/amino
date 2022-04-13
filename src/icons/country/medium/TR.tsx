import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TR = () => {
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
          fill="#E31D1C"
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
            d="M10.0158 10.0709C8.67751 9.7412 7.62931 8.621 7.64147 6.97891C7.65286 5.44178 8.58352 4.1425 10.0547 3.79077C11.526 3.43904 12.8212 4.18567 12.8212 4.18567C12.4146 3.22579 11.002 2.55145 9.84388 2.55339C7.68812 2.557 5.39007 4.30527 5.37026 6.97891C5.34972 9.75078 7.83113 11.3294 10.0135 11.3257C11.7631 11.3228 12.5929 10.1258 12.7648 9.61663C12.7648 9.61663 11.3542 10.4006 10.0158 10.0709ZM13.0645 6.45407L11.7311 6.94386L13.2356 7.47461L13.2099 9.06047L14.2013 7.87072L15.8388 7.98971L14.5412 6.87424L15.3931 5.68436L14.0059 6.15122L13.0144 5.04898L13.0645 6.45407Z"
            fill="#F7FCFF"
          />
        </g>
      </g>
    </svg>
  );
};
