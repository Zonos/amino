import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const DutiesIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        opacity=".5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 14.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6Zm8 0h-6v6h6v-6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.742 1.496c.767-1.328 2.685-1.328 3.452 0l3.472 6.015c.767 1.328-.191 2.989-1.725 2.989H8.996c-1.534 0-2.493-1.66-1.726-2.99l3.472-6.014Zm1.726 1.011L9.008 8.5h6.92l-3.46-5.993Z"
        fill="currentColor"
      />
      <path
        opacity=".5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 14.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
