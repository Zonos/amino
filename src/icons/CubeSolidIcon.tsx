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
        d="M12.889 2.458a2 2 0 0 0-1.777 0L3.934 6.017l8.064 4.092 8.042-4.104-7.152-3.547Zm8.361 5.175h-.001l-8.25 4.212v9.91l7.14-3.54a2 2 0 0 0 1.111-1.792v-8.79ZM11 21.754v-9.909L2.75 7.658v8.765a2 2 0 0 0 1.111 1.791L11 21.754Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
