import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const MonitorDuotoneIcon = ({
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
        d="M7 20C7 19.4477 7.44772 19 8 19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20Z"
        fill="currentColor"
      />
      <path
        d="M7.8 17C6.11984 17 5.27976 17 4.63803 16.673C4.07354 16.3854 3.6146 15.9265 3.32698 15.362C3 14.7202 3 13.8802 3 12.2L3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3L16.2 3C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V12.2C21 13.8802 21 14.7202 20.673 15.362C20.3854 15.9265 19.9265 16.3854 19.362 16.673C18.7202 17 17.8802 17 16.2 17H7.8Z"
        fill={secondaryColor || '#CACACE'}
      />
    </IconBase>
  );
};
