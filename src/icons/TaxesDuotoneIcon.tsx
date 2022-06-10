import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const TaxesDuotoneIcon = ({
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
        d="M13 15C13 13.8954 13.8954 13 15 13H21C22.1046 13 23 13.8954 23 15V21C23 22.1046 22.1046 23 21 23H15C13.8954 23 13 22.1046 13 21V15Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7424 1.9964C11.5094 0.667868 13.427 0.667867 14.194 1.9964L17.6664 8.01081C18.4334 9.33934 17.4747 11 15.9406 11H8.99577C7.46171 11 6.50293 9.33934 7.26996 8.01081L10.7424 1.9964Z"
        fill={secondaryColor || '#CACACE'}
      />
      <path
        d="M1 18C1 15.2386 3.23858 13 6 13C8.76142 13 11 15.2386 11 18C11 20.7614 8.76142 23 6 23C3.23858 23 1 20.7614 1 18Z"
        fill={secondaryColor || '#CACACE'}
      />
    </IconBase>
  );
};
