import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CubeDuotoneIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3615 2.44058C11.9213 2.16299 12.5787 2.16299 13.1385 2.44058L20.3885 6.03562C21.0693 6.37322 21.5 7.06749 21.5 7.82743V16.405C21.5 17.1649 21.0693 17.8592 20.3885 18.1968L13.1385 21.7918C12.5787 22.0694 11.9213 22.0694 11.3615 21.7918L4.1115 18.1968C3.43068 17.8592 3 17.1649 3 16.405V7.82743C3 7.0675 3.43068 6.37322 4.1115 6.03562L11.3615 2.44058Z"
        fill="currentColor"
      />
      <path
        d="M11.2502 11.9112L6.09553 9.35519C5.52936 9.07445 5.36232 8.34547 5.74975 7.84621C6.04148 7.47028 6.55771 7.35199 6.98403 7.56338L12.2502 10.1747L17.5164 7.56338C17.9427 7.35199 18.459 7.47028 18.7507 7.84621C19.1381 8.34547 18.9711 9.07445 18.4049 9.35519L13.2502 11.9112V18.497C13.2502 19.0493 12.8025 19.497 12.2502 19.497C11.6979 19.497 11.2502 19.0493 11.2502 18.497V11.9112Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
