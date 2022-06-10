import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChartDuotoneIcon = ({
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
        d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 5C17.4477 5 17 5.44772 17 6V18C17 18.5523 17.4477 19 18 19C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5ZM10 7C9.44772 7 9 7.44772 9 8V18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18V8C11 7.44772 10.5523 7 10 7ZM6 13C5.44772 13 5 13.4477 5 14V18C5 18.5523 5.44772 19 6 19C6.55228 19 7 18.5523 7 18V14C7 13.4477 6.55228 13 6 13ZM13 10C13 9.44772 13.4477 9 14 9C14.5523 9 15 9.44772 15 10V18C15 18.5523 14.5523 19 14 19C13.4477 19 13 18.5523 13 18V10Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
