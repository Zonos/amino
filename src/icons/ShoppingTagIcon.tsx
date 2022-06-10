import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ShoppingTagIcon = ({ size, color, className }: IconProps) => {
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
        d="M10.4143 4.17157C11.1645 3.42143 12.1819 3 13.2427 3H18.0001C19.657 3 21.0001 4.34315 21.0001 6V10.7574C21.0001 11.8182 20.5787 12.8356 19.8285 13.5858L13.2914 20.1229C12.1198 21.2945 10.2204 21.2945 9.04878 20.1229L3.87721 14.9513C2.70564 13.7797 2.70564 11.8803 3.87721 10.7087L10.4143 4.17157ZM13.2427 5C12.7123 5 12.2036 5.21071 11.8285 5.58579L5.29143 12.1229C4.9009 12.5134 4.9009 13.1466 5.29143 13.5371L10.463 18.7087C10.8535 19.0992 11.4867 19.0992 11.8772 18.7087L18.4143 12.1716C18.7894 11.7965 19.0001 11.2878 19.0001 10.7574V6C19.0001 5.44772 18.5524 5 18.0001 5H13.2427Z"
        fill="currentColor"
      />
      <path
        d="M4.58594 10.0002L6.00015 8.58594L15.4144 18.0001L14.0001 19.4144L4.58594 10.0002Z"
        fill="currentColor"
      />
      <path
        d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
