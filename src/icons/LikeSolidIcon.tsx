import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LikeSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <rect x="4" y="9" width="2" height="11" rx="1" fill="currentColor" />
      <path
        d="M10.3797 4.40268C10.5723 4.1493 10.8758 4 11.1982 4H13.3509C13.9146 4 14.3715 4.44772 14.3715 5V7.36364C14.3715 7.91592 14.8285 8.36364 15.3922 8.36364H17.9584C19.1855 8.36364 20.1353 9.41686 19.9842 10.61L19.0166 18.2464C18.8897 19.248 18.021 20 16.9908 20H9.04135C7.91395 20 7 19.1046 7 18V10.3073C7 9.98243 7.04039 9.65878 7.12029 9.34349L7.1708 9.14415C7.30134 8.62896 7.53525 8.14438 7.85888 7.71866L10.3797 4.40268Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
