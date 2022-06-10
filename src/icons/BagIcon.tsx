import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BagIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.02472 11.4505C2.75585 9.07808 4.61171 7 6.99927 7H17.0009C19.3884 7 21.2443 9.07808 20.9754 11.4505L20.2954 17.4504C20.0663 19.4723 18.3557 21 16.3209 21H7.67927C5.64443 21 3.93386 19.4724 3.70471 17.4504L3.02472 11.4505ZM6.99927 9C5.80549 9 4.87756 10.039 5.01199 11.2252L5.69199 17.2252C5.80657 18.2362 6.66185 19 7.67927 19H16.3209C17.3383 19 18.1936 18.2362 18.3081 17.2252L18.9881 11.2252C19.1226 10.039 18.1946 9 17.0009 9H6.99927Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00006 7C8.00006 4.79086 9.79093 3 12.0001 3C14.2092 3 16.0001 4.79086 16.0001 7V10C16.0001 10.5523 15.5523 11 15.0001 11C14.4478 11 14.0001 10.5523 14.0001 10V7C14.0001 5.89543 13.1046 5 12.0001 5C10.8955 5 10.0001 5.89543 10.0001 7V10C10.0001 10.5523 9.55235 11 9.00006 11C8.44778 11 8.00006 10.5523 8.00006 10V7Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
