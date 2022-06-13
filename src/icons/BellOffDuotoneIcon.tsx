import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BellOffDuotoneIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M10 20h4a2 2 0 1 1-4 0Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.882 6.883c-.564.922-.882 2-.882 3.132v3.32c0 .734-.345 1.425-.932 1.866C3.021 16.741 4.11 20 6.671 20h10.657c.787 0 1.434-.307 1.895-.777L6.883 6.883Z"
        fill="#CACACE"
      />
      <path
        d="M12 2a1 1 0 0 0-1 1v1a1 1 0 1 0 0 2h1a4 4 0 0 1 4 4v1a1 1 0 1 0 2 0v-1a6.002 6.002 0 0 0-5-5.917V3a1 1 0 0 0-1-1Z"
        fill="#CACACE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
