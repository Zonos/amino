import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const TruckDuotoneIcon = ({
  size,
  color,
  className,
  secondaryColor,
}: IconProps & { secondaryColor?: string }) => {
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
        d="M2 7C2 5.34315 3.34315 4 5 4H10C11.6569 4 13 5.34315 13 7H16.2251C16.9729 7 17.6938 7.27929 18.2464 7.78313L21.0213 10.3132C21.6447 10.8816 22 11.6863 22 12.5301V15C22 16.3538 21.1033 17.4981 19.8715 17.8715C19.4981 19.1033 18.3538 20 17 20C15.6938 20 14.5825 19.1652 14.1707 18H9.82929C9.41746 19.1652 8.30622 20 7 20C5.64623 20 4.5019 19.1033 4.12854 17.8715C2.89669 17.4981 2 16.3538 2 15V7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17C4 15.3431 5.34315 14 7 14C8.65685 14 10 15.3431 10 17ZM8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 17C20 18.6569 18.6569 20 17 20C15.3431 20 14 18.6569 14 17C14 15.3431 15.3431 14 17 14C18.6569 14 20 15.3431 20 17ZM18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
