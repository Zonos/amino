import React from 'react';

import { useStableUniqueId } from 'hooks';

export const DZ = () => {
  const ids = useStableUniqueId(0);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0H32V24H16V0Z"
        fill="#F7FCFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H16V24H0V0Z"
        fill="#36A400"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.791 6.79468C19.313 6.79468 20.7038 7.35664 21.7672 8.2844C20.4205 6.58386 18.3376 5.49292 15.9998 5.49292C11.939 5.49292 8.64697 8.78491 8.64697 12.8458C8.64697 16.9067 11.939 20.1987 15.9998 20.1987C18.3376 20.1987 20.4205 19.1077 21.7673 17.4071C20.7039 18.3349 19.3131 18.8969 17.791 18.8969C14.449 18.8969 11.7399 16.1877 11.7399 12.8458C11.7399 9.50385 14.449 6.79468 17.791 6.79468ZM20.6108 9.54348L18.9084 11.4729L16.4633 10.7992L17.8189 12.9195L16.4633 15.1766L19.0282 14.2533L20.4303 16.442V13.9017L22.7217 12.9195L20.4303 12.0987L20.6108 9.54348Z"
        fill="#FF0000"
      />
    </svg>
  );
};
