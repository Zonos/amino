import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BA = () => {
  const ids = useStableUniqueId(2);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${ids[1]})`}>
        <mask
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="34"
          height="24"
        >
          <rect width="34" height="24" fill="white" />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H32V24H0V0Z"
            fill="#2E42A5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 0H29V24L9 0Z"
            fill="#FECA00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.10792 2.7937L4.93235 3.41174L5.15687 2.10272L4.20581 1.17567L5.52014 0.984684L6.10792 -0.206299L6.69571 0.984684L8.01004 1.17567L7.05898 2.10272L7.28349 3.41174L6.10792 2.7937Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5945 7.07373L8.41893 7.69176L8.64344 6.38275L7.69238 5.4557L9.00671 5.26471L9.5945 4.07373L10.1823 5.26471L11.4966 5.4557L10.5456 6.38275L10.7701 7.69176L9.5945 7.07373Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8633 11.2383L11.6877 11.8563L11.9122 10.5473L10.9612 9.62025L12.2755 9.42926L12.8633 8.23828L13.4511 9.42926L14.7654 9.62025L13.8144 10.5473L14.0389 11.8563L12.8633 11.2383Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.0652 15.2292L14.8896 15.8473L15.1141 14.5383L14.1631 13.6112L15.4774 13.4202L16.0652 12.2292L16.653 13.4202L17.9673 13.6112L17.0163 14.5383L17.2408 15.8473L16.0652 15.2292Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.5144 19.3367L18.3388 19.9547L18.5634 18.6457L17.6123 17.7186L18.9266 17.5277L19.5144 16.3367L20.1022 17.5277L21.4165 17.7186L20.4655 18.6457L20.69 19.9547L19.5144 19.3367Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.3267 23.311L22.1511 23.9291L22.3756 22.6201L21.4246 21.693L22.7389 21.502L23.3267 20.311L23.9145 21.502L25.2288 21.693L24.2777 22.6201L24.5022 23.9291L23.3267 23.311Z"
            fill="#F7FCFF"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[1]}`}>
          <path
            d="M0 3C0 1.34315 1.34315 0 3 0H29C30.6569 0 32 1.34315 32 3V21C32 22.6569 30.6569 24 29 24H3C1.34315 24 0 22.6569 0 21V3Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
