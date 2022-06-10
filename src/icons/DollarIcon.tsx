import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const DollarIcon = ({ size, color, className }: IconProps) => {
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
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C14.6569 7 16 8.34315 16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10.7434C10.3328 9 10 9.33284 10 9.74342C10 10.0634 10.2048 10.3475 10.5083 10.4487L14.1241 11.6539C15.2444 12.0274 16 13.0757 16 14.2566C16 15.7717 14.7717 17 13.2566 17H13C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C9.34315 17 8 15.6569 8 14C8 13.4477 8.44772 13 9 13C9.55228 13 10 13.4477 10 14C10 14.5523 10.4477 15 11 15H13.2566C13.6672 15 14 14.6672 14 14.2566C14 13.9366 13.7952 13.6525 13.4917 13.5513L9.87587 12.3461C8.75562 11.9726 8 10.9243 8 9.74342C8 8.22827 9.22827 7 10.7434 7H11Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
