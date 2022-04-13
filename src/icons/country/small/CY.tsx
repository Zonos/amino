import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CY = () => {
  const ids = useStableUniqueId(4);
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <rect width="16" height="12" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12H16V0H0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12H16V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2837 2.3796C12.2837 2.3796 9.6426 3.83862 9.31012 3.93094C8.97771 4.02322 9.19949 4.07868 8.62683 4.04178C8.05436 4.00483 6.92778 4.24775 6.66925 4.08154C6.41065 3.91521 6.3183 3.61977 6.29996 4.11852C6.28143 4.61705 6.68792 5.04183 6.17061 5.07882C5.65368 5.11569 5.59814 4.6354 5.24739 4.93107C4.89644 5.22644 4.60091 5.89138 4.37919 5.72516C4.15761 5.55883 3.84374 5.11569 3.93609 5.54047C4.02825 5.96518 4.30532 7.03498 5.19184 7.0535C6.07844 7.07204 6.26296 6.75802 6.29996 7.01662C6.33677 7.27509 6.72472 7.31199 6.81696 6.97957C6.90944 6.64714 7.66661 7.35031 8.0729 6.99941C8.47912 6.64858 8.81153 6.35303 8.94096 6.14987C9.07013 5.94671 9.51343 5.98374 9.93819 5.98374C10.363 5.98374 10.9907 6.16834 10.6583 5.76214C10.3261 5.35567 9.75342 5.1711 10.086 4.76478C10.4182 4.35851 13.2395 3.00755 13.3689 2.85977C13.498 2.71203 12.6714 2.15801 12.2837 2.3796Z"
            fill="#F57A01"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2837 2.3796C12.2837 2.3796 9.6426 3.83862 9.31012 3.93094C8.97771 4.02322 9.19949 4.07868 8.62683 4.04178C8.05436 4.00483 6.92778 4.24775 6.66925 4.08154C6.41065 3.91521 6.3183 3.61977 6.29996 4.11852C6.28143 4.61705 6.68792 5.04183 6.17061 5.07882C5.65368 5.11569 5.59814 4.6354 5.24739 4.93107C4.89644 5.22644 4.60091 5.89138 4.37919 5.72516C4.15761 5.55883 3.84374 5.11569 3.93609 5.54047C4.02825 5.96518 4.30532 7.03498 5.19184 7.0535C6.07844 7.07204 6.26296 6.75802 6.29996 7.01662C6.33677 7.27509 6.72472 7.31199 6.81696 6.97957C6.90944 6.64714 7.66661 7.35031 8.0729 6.99941C8.47912 6.64858 8.81153 6.35303 8.94096 6.14987C9.07013 5.94671 9.51343 5.98374 9.93819 5.98374C10.363 5.98374 10.9907 6.16834 10.6583 5.76214C10.3261 5.35567 9.75342 5.1711 10.086 4.76478C10.4182 4.35851 13.2395 3.00755 13.3689 2.85977C13.498 2.71203 12.6714 2.15801 12.2837 2.3796Z"
            fill={`url(#${ids[2]})`}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.45613 8.052C6.76723 8.052 7.89388 9.51105 7.89388 9.51105C7.91283 9.53 7.93033 9.54842 7.94647 9.56632C7.96261 9.54842 7.98011 9.53 7.99907 9.51105C7.99907 9.51105 9.31318 8.052 10.6243 8.052C11.9356 8.052 9.67958 10.1759 8.22065 10.1759C8.22065 10.1759 8.07069 10.1622 7.94647 10.0998C7.82225 10.1622 7.6723 10.1759 7.6723 10.1759C6.21329 10.1759 4.14477 8.052 5.45613 8.052Z"
            fill="#006B49"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.45613 8.052C6.76723 8.052 7.89388 9.51105 7.89388 9.51105C7.91283 9.53 7.93033 9.54842 7.94647 9.56632C7.96261 9.54842 7.98011 9.53 7.99907 9.51105C7.99907 9.51105 9.31318 8.052 10.6243 8.052C11.9356 8.052 9.67958 10.1759 8.22065 10.1759C8.22065 10.1759 8.07069 10.1622 7.94647 10.0998C7.82225 10.1622 7.6723 10.1759 7.6723 10.1759C6.21329 10.1759 4.14477 8.052 5.45613 8.052Z"
            fill={`url(#${ids[3]})`}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={`${ids[2]}`}
          x1="15"
          y1="9"
          x2="15"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EA5113" />
          <stop offset="1" stopColor="#FC9B58" />
        </linearGradient>
        <linearGradient
          id={`${ids[3]}`}
          x1="11.0189"
          y1="10.1759"
          x2="11.0189"
          y2="8.052"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#008057" />
          <stop offset="1" stopColor="#00B77C" />
        </linearGradient>
      </defs>
    </svg>
  );
};
