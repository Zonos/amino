import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const PlayCircleSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.5132 8.14513C9.84668 7.74654 9 8.22675 9 9.00338V14.9969C9 15.7735 9.84666 16.2537 10.5132 15.8552L15.5104 12.8671C16.1659 12.4751 16.1659 11.5254 15.5104 11.1334L10.5132 8.14513Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
