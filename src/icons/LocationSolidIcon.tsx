import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LocationSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11C21 14.0264 19.1902 16.5918 17.1049 18.399L13.6635 21.3816C12.7088 22.209 11.2912 22.209 10.3365 21.3816L6.89505 18.399C4.80977 16.5918 3 14.0264 3 11ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
