import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const PlayIcon = ({ size, color, className }: IconProps) => {
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
        d="M4 6.00677C4 2.71133 7.76157 0.829598 10.3987 2.80581L18.3961 8.79884C20.5311 10.3988 20.5311 13.6008 18.3961 15.2007L10.3987 21.1939C7.76161 23.1701 4 21.2884 4 17.9929V6.00677ZM9.19936 4.40629C7.88079 3.41819 6 4.35905 6 6.00677V17.9929C6 19.6407 7.8808 20.5815 9.19937 19.5934L17.1967 13.6003C18.2642 12.8003 18.2642 11.1993 17.1967 10.3993L9.19936 4.40629Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
