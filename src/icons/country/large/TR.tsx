import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TR = () => {
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
          fill="#E31D1C"
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
            d="M16.0253 16.1134C13.884 15.5859 12.2069 13.7936 12.2264 11.1662C12.2446 8.7068 13.7336 6.62795 16.0876 6.06518C18.4415 5.50242 20.514 6.69703 20.514 6.69703C19.8634 5.16122 17.6032 4.08227 15.7502 4.08537C12.301 4.09115 8.62411 6.88839 8.59241 11.1662C8.55955 15.6012 12.5298 18.1269 16.0216 18.1211C18.8209 18.1164 20.1486 16.2013 20.4237 15.3866C20.4237 15.3866 18.1667 16.6409 16.0253 16.1134ZM20.9032 10.3265L18.7697 11.1101L21.1769 11.9593L21.1359 14.4967L22.7221 12.5931L25.3422 12.7835L23.2659 10.9987L24.629 9.09493L22.4095 9.84191L20.8231 8.07832L20.9032 10.3265Z"
            fill="#F7FCFF"
          />
        </g>
      </g>
    </svg>
  );
};
