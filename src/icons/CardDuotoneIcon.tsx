import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CardDuotoneIcon = ({
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
        d="M2 8.8C2 7.11984 2 6.27976 2.32698 5.63803C2.6146 5.07354 3.07354 4.6146 3.63803 4.32698C4.27976 4 5.11984 4 6.8 4H17.2C18.8802 4 19.7202 4 20.362 4.32698C20.9265 4.6146 21.3854 5.07354 21.673 5.63803C22 6.27976 22 7.11984 22 8.8V15.2C22 16.8802 22 17.7202 21.673 18.362C21.3854 18.9265 20.9265 19.3854 20.362 19.673C19.7202 20 18.8802 20 17.2 20H6.8C5.11984 20 4.27976 20 3.63803 19.673C3.07354 19.3854 2.6146 18.9265 2.32698 18.362C2 17.7202 2 16.8802 2 15.2V8.8Z"
        fill="currentColor"
      />
      <path
        d="M6 15C6 14.4477 6.44772 14 7 14H11C11.5523 14 12 14.4477 12 15C12 15.5523 11.5523 16 11 16H7C6.44772 16 6 15.5523 6 15Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path d="M2 8H22V10H2V8Z" fill={secondaryColor || '#3D3D42'} />
    </IconBase>
  );
};
