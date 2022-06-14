import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M1 18.455V6.401a2 2 0 0 1 1.317-1.88l.766-.278a10 10 0 0 1 6.834 0L12 5l2.083-.757a10 10 0 0 1 6.834 0l.766.278A2 2 0 0 1 23 6.401v12.025a1.803 1.803 0 0 1-2.42 1.694 9.015 9.015 0 0 0-6.16 0L12 21l-2.42-.88a9.015 9.015 0 0 0-6.16 0A1.807 1.807 0 0 1 1 18.455Zm11 .417 1.736-.631a11.016 11.016 0 0 1 5.922-.45c.67.134 1.342-.35 1.342-1.032V7.1a1 1 0 0 0-.658-.94l-.108-.039a8 8 0 0 0-5.468 0L12 7.128v11.744Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
