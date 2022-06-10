import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CubeSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M12.8885 2.45819C12.3287 2.1806 11.6713 2.1806 11.1115 2.45819L3.93484 6.01687L11.9991 10.1088L20.0411 6.00495L12.8885 2.45819Z"
        fill="currentColor"
      />
      <path
        d="M21.25 7.63328L21.2489 7.63381L12.9991 11.8453L12.9991 21.7546L20.1385 18.2144C20.8193 17.8768 21.25 17.1825 21.25 16.4226V7.63328Z"
        fill="currentColor"
      />
      <path
        d="M10.9991 21.7537L10.9991 11.8453L2.75 7.65831V16.4226C2.75 17.1825 3.18068 17.8768 3.8615 18.2144L10.9991 21.7537Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
