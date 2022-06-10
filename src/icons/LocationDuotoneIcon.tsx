import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LocationDuotoneIcon = ({
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
        d="M12 2C7.02944 2 3 6.02944 3 11C3 14.0264 4.80977 16.5918 6.89505 18.399L10.3365 21.3816C11.2912 22.209 12.7088 22.209 13.6635 21.3816L17.1049 18.399C19.1902 16.5918 21 14.0264 21 11C21 6.02944 16.9706 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
