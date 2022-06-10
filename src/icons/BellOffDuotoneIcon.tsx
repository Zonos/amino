import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BellOffDuotoneIcon = ({
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
        d="M10 20H14C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.88245 6.88269C6.31784 7.80485 5.99995 8.8827 5.99995 10.015V13.3354C5.99995 14.0691 5.65495 14.7601 5.06849 15.2011C3.02112 16.7405 4.10981 20 6.67133 20H17.3285C18.1146 20 18.7621 19.693 19.2227 19.2229L6.88245 6.88269Z"
        fill={secondaryColor || '#CACACE'}
      />
      <path
        d="M12 2C11.4477 2 11 2.44772 11 3V4C10.4477 4 10 4.44772 10 5C10 5.55228 10.4477 6 11 6H12C14.2091 6 16 7.79086 16 10V11C16 11.5523 16.4477 12 17 12C17.5523 12 18 11.5523 18 11V10C18 7.027 15.8377 4.55904 13 4.08296V3C13 2.44772 12.5523 2 12 2Z"
        fill={secondaryColor || '#CACACE'}
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
