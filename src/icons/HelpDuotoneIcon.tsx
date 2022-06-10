import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const HelpDuotoneIcon = ({
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
        d="M11.1333 9.50073C10.8568 9.97879 10.2451 10.1421 9.76702 9.86561C9.28896 9.58906 9.1256 8.97733 9.40214 8.49927C9.91934 7.60518 10.8885 7 12.0002 7C13.657 7 15.0002 8.34315 15.0002 10C15.0002 11.0977 14.3268 11.994 13.5002 12.5C12.8362 12.9065 13.2502 14 11.9976 14C11.4453 14 10.9976 13.5523 10.9976 13C10.9976 12.9649 10.9994 12.9302 11.0029 12.896C11.0306 12.3672 11.2665 11.9368 11.5232 11.6239C11.7944 11.2935 12.1509 11.0237 12.4235 10.8616C13.9402 9.96 12.0904 8.1154 11.1333 9.50073ZM11.9976 15C11.4453 15 10.9976 15.4477 10.9976 16C10.9976 16.5523 11.4453 17 11.9976 17C12.5498 17 12.9976 16.5523 12.9976 16C12.9976 15.4477 12.5498 15 11.9976 15Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
