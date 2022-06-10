import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ArrowRightSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M13.8787 8.29289C13.4882 7.90237 13.4882 7.26921 13.8787 6.87868C14.2692 6.48816 14.9024 6.48816 15.2929 6.87868L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L15.2929 17.1213C14.9024 17.5118 14.2692 17.5118 13.8787 17.1213C13.4882 16.7308 13.4882 16.0976 13.8787 15.7071L16.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L13.8787 8.29289Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
