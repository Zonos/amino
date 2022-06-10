import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const WarningIcon = ({ size, color, className }: IconProps) => {
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
        d="M18.7824 16.1068L13.7896 6.10358C13.053 4.62782 10.9472 4.6278 10.2106 6.10357L5.21763 16.1068C4.55392 17.4365 5.52095 19 7.0071 19H16.9929C18.479 19 19.4461 17.4366 18.7824 16.1068ZM15.579 5.21041C14.1059 2.25888 9.89432 2.25886 8.42112 5.21038L3.42816 15.2136C2.10074 17.8731 4.03478 21 7.0071 21H16.9929C19.9652 21 21.8992 17.8731 20.5719 15.2137L15.579 5.21041Z"
        fill="currentColor"
      />
      <path
        d="M13 8C13 7.44771 12.5522 7 12 7C11.4477 7 11 7.44771 11 8V12C11 12.5523 11.4477 13 12 13C12.5522 13 13 12.5523 13 12V8Z"
        fill="currentColor"
      />
      <path
        d="M12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17C12.5522 17 13 16.5523 13 16C13 15.4477 12.5522 15 12 15Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
