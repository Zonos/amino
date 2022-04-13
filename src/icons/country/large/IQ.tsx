import React from 'react';

import { useStableUniqueId } from 'hooks';

export const IQ = () => {
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
          fill="#F7FCFF"
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
            d="M0 0V8H32V0H0Z"
            fill="#BF2714"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 16V24H32V16H0Z"
            fill="#272727"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.33662 12.8112C6.24623 14.1166 5 15 5 15C5 15 6.08949 15 6.50674 14.1256H15.4241V12.1998C15.4241 12.1998 15.2376 11.275 14.4436 11.275C13.6495 11.275 13.4706 12.1998 13.4706 12.1998H10.3341L13.3688 9.52087L12.7788 9L9.40801 11.9756V12.6065H14.1931V12.2351C14.1931 12.2351 14.22 12.0201 14.4436 12.0201C14.6671 12.0201 14.6127 12.2351 14.6127 12.2351V13.0284H8.58261V11.9437L7.92968 12.2351V13.0284C7.92968 13.0284 7.13001 12.8112 6.62466 12.8112C6.11931 12.8112 6.08949 12.2351 6.08949 12.2351L5.33662 12.8112ZM17.4466 12.8853L17.9356 14.1031H15.9896V9.21438L16.8105 9.47713V12.8853H17.4466ZM26.511 12.8853L27 14.1031H25.054V9.21438L25.8749 9.47713V12.8853H26.511ZM24.1015 9.26496L23.5945 9.60815V12.8819H23.078V10.2563L22.2271 10.7468V12.8819H21.6562V11.3995L21.0094 11.8158V12.2182C21.0094 12.2182 19.7653 12.304 19.7653 14.0628H24.0965L24.1015 9.26496ZM7.49178 14.9656C7.64822 14.9656 7.77504 14.8537 7.77504 14.7156C7.77504 14.5775 7.64822 14.4655 7.49178 14.4655C7.33534 14.4655 7.20852 14.5775 7.20852 14.7156C7.20852 14.8537 7.33534 14.9656 7.49178 14.9656ZM21.9145 9.64166C21.6946 9.93158 21.0271 9.64166 21.0271 9.64166L22.9198 9.42239C22.7243 9.80398 21.9145 9.64166 21.9145 9.64166Z"
            fill="#009C4E"
          />
        </g>
      </g>
    </svg>
  );
};
