import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const DollarSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 6C11.4477 6 11 6.44772 11 7H10.7434C9.22827 7 8 8.22827 8 9.74342C8 10.9243 8.75562 11.9726 9.87587 12.3461L13.4917 13.5513C13.7952 13.6525 14 13.9366 14 14.2566C14 14.6672 13.6672 15 13.2566 15H11C10.4477 15 10 14.5523 10 14C10 13.4477 9.55228 13 9 13C8.44772 13 8 13.4477 8 14C8 15.6569 9.34315 17 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17H13.2566C14.7717 17 16 15.7717 16 14.2566C16 13.0757 15.2444 12.0274 14.1241 11.6539L10.5083 10.4487C10.2048 10.3475 10 10.0634 10 9.74342C10 9.33284 10.3328 9 10.7434 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10C16 8.34315 14.6569 7 13 7C13 6.44772 12.5523 6 12 6Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
