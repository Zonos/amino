import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BellOffSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M10.0618 20.4949C9.99363 20.2273 10.2239 20 10.5 20H13.5C13.7762 20 14.0065 20.2273 13.9383 20.4949C13.7181 21.3601 12.9338 22 12 22C11.0663 22 10.282 21.3601 10.0618 20.4949Z"
        fill="currentColor"
      />
      <path
        d="M6.8814 6.8814C6.31761 7.80228 6.0002 8.87862 6.0002 10.0093V11.3354C6.0002 12.0691 5.6552 12.7601 5.06874 13.2011C3.02136 14.7405 4.11005 18 6.67157 18H17.3287C17.5414 18 17.744 17.9775 17.9354 17.9354L6.8814 6.8814Z"
        fill="currentColor"
      />
      <path
        d="M12 2C11.4477 2 11 2.44772 11 3V4C10.4477 4 10 4.44772 10 5C10 5.55228 10.4477 6 11 6H12C14.2091 6 16 7.79086 16 10V11C16 11.5523 16.4477 12 17 12C17.5523 12 18 11.5523 18 11V10C18 7.027 15.8377 4.55904 13 4.08296V3C13 2.44772 12.5523 2 12 2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
