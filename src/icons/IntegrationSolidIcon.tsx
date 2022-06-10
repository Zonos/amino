import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const IntegrationSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6C16 6.16919 15.9894 6.33608 15.969 6.5H17.4765C19.1238 6.5 20.4636 7.82841 20.4767 9.47609L20.5 12.3934C20.5028 12.7522 20.3132 13.0851 20.0031 13.2656C19.693 13.4461 19.3099 13.4466 18.9993 13.267C18.7061 13.0974 18.3659 13 18 13C16.8954 13 16 13.8954 16 15C16 16.1046 16.8954 17 18 17C18.3659 17 18.7061 16.9026 18.9993 16.733C19.3087 16.5541 19.69 16.5538 19.9996 16.7324C20.3092 16.911 20.5 17.2412 20.5 17.5987V19.4998C20.5 21.1566 19.157 22.5 17.5 22.5H6.50002C4.84317 22.5 3.50003 21.1569 3.50002 19.5L3.5 9.5C3.5 7.84308 4.84333 6.5 6.50011 6.5L8.03105 6.5C8.01056 6.33608 8 6.16919 8 6Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
