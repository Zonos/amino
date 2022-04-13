import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BB = () => {
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
          d="M14 0H20V15H14V0Z"
          fill="#2E42A5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 0H14V15H6V0Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H6V15H0V0Z"
          fill="#2E42A5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5214 9.54561C11.9169 8.72747 12.3731 7.23454 12.3731 7.23454L12.7193 6.20666L11.3474 6.70346L11.672 6.89202C11.672 6.89202 11.1062 8.02314 10.8212 8.5757C10.5362 9.12826 10.508 8.7632 10.508 8.7632L10.5567 4.90776L10.8716 4.82239L10.0869 3.31494L9.08567 4.84328L9.52683 4.85517C9.52683 4.85517 9.49016 8.92306 9.42884 8.7632C9.39462 8.6724 9.30356 8.95303 9.25919 8.84433C8.98106 8.16295 8.60065 6.84237 8.60065 6.84237L8.82324 6.63413L7.33057 6.32703L7.7762 7.2447C7.7762 7.2447 8.16918 8.87994 8.60065 9.67856C8.69781 9.93123 9.16728 10.039 9.16728 10.039C9.16728 10.039 9.3965 9.80633 9.45329 10.039C9.51007 10.2717 9.45329 11.2109 9.45329 11.2109H10.508C10.508 11.2109 10.4337 10.3249 10.508 10.039C10.5822 9.75316 10.8124 10.039 10.8124 10.039C10.8124 10.039 11.4244 9.79828 11.5214 9.54561Z"
          fill="black"
        />
      </g>
    </svg>
  );
};
