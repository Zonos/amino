import React from 'react';

import { useStableUniqueId } from 'hooks';

export const FM = () => {
  const ids = useStableUniqueId(2);
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
          d="M0 0V24H32V0H0Z"
          fill="#63B3E1"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V24H32V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 7.30005L14.2366 8.2271L14.5734 6.26357L13.1468 4.873L15.1183 4.58652L16 2.80005L16.8817 4.58652L18.8532 4.873L17.4266 6.26357L17.7634 8.2271L16 7.30005Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9999 19.3L14.2365 20.2271L14.5733 18.2636L13.1467 16.873L15.1182 16.5865L15.9999 14.8L16.8816 16.5865L18.8531 16.873L17.4265 18.2636L17.7633 20.2271L15.9999 19.3Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.80005 13.5L8.03669 14.4271L8.37346 12.4635L6.94688 11.0729L8.91837 10.7865L9.80005 9L10.6817 10.7865L12.6532 11.0729L11.2266 12.4635L11.5634 14.4271L9.80005 13.5Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 13.5L20.2366 14.4271L20.5734 12.4635L19.1468 11.0729L21.1183 10.7865L22 9L22.8817 10.7865L24.8532 11.0729L23.4266 12.4635L23.7634 14.4271L22 13.5Z"
            fill="#F7FCFF"
          />
        </g>
      </g>
    </svg>
  );
};
