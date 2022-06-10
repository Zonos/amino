import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const PlayCircleIcon = ({ size, color, className }: IconProps) => {
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
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <path
        d="M9 9.00315C9 8.22651 9.84668 7.7463 10.5132 8.14489L15.5104 11.1331C16.1659 11.5251 16.1659 12.4748 15.5104 12.8668L10.5132 15.8549C9.84666 16.2535 9 15.7733 9 14.9967V9.00315Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
