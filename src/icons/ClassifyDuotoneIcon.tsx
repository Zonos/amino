import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ClassifyDuotoneIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M11.1037 3.52941C11.502 2.82353 12.498 2.82353 12.8963 3.52941L21.8598 19.4118C22.2582 20.1176 21.7602 21 20.9634 21H3.03655C2.2398 21 1.74183 20.1176 2.14021 19.4118L11.1037 3.52941Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
