import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const TotalLandedCostIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M13 14.5C13 13.3954 13.8954 12.5 15 12.5H21C22.1046 12.5 23 13.3954 23 14.5V20.5C23 21.6046 22.1046 22.5 21 22.5H15C13.8954 22.5 13 21.6046 13 20.5V14.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7424 1.4964C11.5094 0.167868 13.427 0.167867 14.194 1.4964L17.6664 7.51081C18.4334 8.83934 17.4747 10.5 15.9406 10.5H8.99577C7.46171 10.5 6.50293 8.83934 7.26996 7.51081L10.7424 1.4964Z"
        fill="currentColor"
      />
      <path
        d="M1 17.5C1 14.7386 3.23858 12.5 6 12.5C8.76142 12.5 11 14.7386 11 17.5C11 20.2614 8.76142 22.5 6 22.5C3.23858 22.5 1 20.2614 1 17.5Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
