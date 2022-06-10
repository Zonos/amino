import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronUpCircleDuotoneIcon = ({
  size,
  color,
  className,
  secondaryColor,
}: IconProps & { secondaryColor?: string }) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2929 9.29289C11.6834 8.90237 12.3166 8.90237 12.7071 9.29289L15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071C15.3166 14.0976 14.6834 14.0976 14.2929 13.7071L12 11.4142L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929L11.2929 9.29289Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
