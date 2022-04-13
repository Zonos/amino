import React from 'react';

import { useStableUniqueId } from 'hooks';

export const LB = () => {
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
          d="M20 0H0V3.75H20V0ZM20 11.25H0V15H20V11.25Z"
          fill="#F50101"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 3.75H20V11.25H0V3.75Z"
          fill="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4467 7.8207C13.4933 8.36279 11.4928 7.59579 11.4928 7.81284C11.4928 8.02989 13.6359 8.41099 13.6323 8.89688C13.6287 9.38276 11.0912 8.75824 11.6602 8.97674C12.2292 9.19523 13.451 9.71832 13.3121 10.0442C13.0156 10.7402 11.0458 9.56138 10.882 9.79378C10.6176 10.1686 12.3355 11.0429 12.321 11.1265C12.293 11.2867 11.1477 10.8747 10.882 11.2074C10.6669 11.1467 10.5675 10.8571 10.5007 10.8187L10.078 5.36655C10.078 5.36655 10.4576 10.4999 9.97261 10.6476C9.48765 10.7952 8.14049 11.2441 8.10129 11.0199C8.0867 10.9363 9.72336 10.1686 9.45897 9.79378C9.26424 9.51754 7.28913 10.4971 7.16311 9.92989C6.60176 9.52523 8.98107 9.17507 8.98107 8.76125C8.98107 8.34738 6.80445 9.25106 7.06484 8.67497C7.32523 8.09889 9.06779 7.89263 9.10029 7.81284C9.15973 7.66693 7.16311 8.03999 7.16311 7.81284C7.16311 7.38303 8.35822 7.29846 9.10029 6.91166C9.14414 6.47028 7.3001 7.3462 7.16311 6.99237C7.02613 6.63855 9.52008 5.7219 9.45897 5.65049C9.36246 5.53772 7.35251 6.04658 7.68398 5.77936C8.3273 5.26073 9.583 4.55549 9.87194 4.36738C9.87194 4.36738 9.90674 4.2964 9.94393 4.32049C9.98121 4.2964 10.0222 4.27002 10.0222 4.27002C10.0222 4.27002 10.0222 4.71379 10.016 4.36738C10.0098 4.02097 12.9595 5.53675 12.993 5.92101C13.032 6.3699 11.1704 5.58259 11.2142 6.02397C11.5926 6.25843 12.6689 6.71215 13.1136 6.91166C13.3153 7.00215 11.6275 6.72012 11.6632 6.8586C11.754 7.2115 13.3981 7.25532 13.4467 7.8207Z"
          fill="#52AB0B"
        />
      </g>
    </svg>
  );
};
