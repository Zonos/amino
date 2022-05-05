import React from 'react';

import { type IconProps } from '~/src/types/IconProps';

import { IconBase } from './IconBase';

export const ClassifyIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2301 5.94118L4.69057 19H19.7696L12.2301 5.94118ZM11.4156 4.53053L11.415 4.52941L11.4156 4.53053ZM13.1471 3.52941C12.7395 2.82353 11.7207 2.82353 11.3131 3.52941L2.14344 19.4118C1.73589 20.1176 2.24532 21 3.0604 21H21.3998C22.2148 21 22.7243 20.1176 22.3167 19.4118L13.1471 3.52941Z"
      fill="currentColor"
    />
  </IconBase>
);

export const ClassifySolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M11.3131 3.52941C11.7207 2.82353 12.7395 2.82353 13.1471 3.52941L22.3167 19.4118C22.7243 20.1176 22.2148 21 21.3998 21H3.0604C2.24532 21 1.73589 20.1176 2.14344 19.4118L11.3131 3.52941Z"
      fill="currentColor"
    />
  </IconBase>
);

export const ClassifyDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M11.3131 3.52941C11.7207 2.82353 12.7395 2.82353 13.1471 3.52941L22.3167 19.4118C22.7243 20.1176 22.2148 21 21.3998 21H3.0604C2.24532 21 1.73589 20.1176 2.14344 19.4118L11.3131 3.52941Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2301 5.94118L4.69057 19H19.7696L12.2301 5.94118ZM11.4156 4.53053C11.4154 4.53015 11.4152 4.52978 11.415 4.52941L11.4156 4.53053ZM13.1471 3.52941C12.7395 2.82353 11.7207 2.82353 11.3131 3.52941L2.14344 19.4118C1.73589 20.1176 2.24532 21 3.0604 21H21.3998C22.2148 21 22.7243 20.1176 22.3167 19.4118L13.1471 3.52941Z"
      fill="#3D3D40"
    />
  </IconBase>
);
