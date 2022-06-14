import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const TaxesIcon = ({ size, color, className }: IconProps) => {
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
        d="M13 15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6Zm8 0h-6v6h6v-6Z"
        fill="currentColor"
      />
      <path
        opacity=".5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.742 1.996c.767-1.328 2.685-1.328 3.452 0l3.472 6.015C18.433 9.339 17.475 11 15.941 11H8.996C7.462 11 6.503 9.34 7.27 8.01l3.472-6.014Zm1.726 1.011L9.008 9h6.92l-3.46-5.993ZM6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
