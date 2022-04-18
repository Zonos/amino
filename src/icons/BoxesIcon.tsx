import React from 'react';

import { type IconProps } from '../types';
import { IconBase } from './IconBase';

export const BoxesIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5V10H18C19.6569 10 21 11.3431 21 13V17C21 18.6569 19.6569 20 18 20H6C4.34315 20 3 18.6569 3 17V13C3 11.3431 4.34315 10 6 10H7V5ZM9 10H15V5C15 4.44772 14.5523 4 14 4H13V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V4H10C9.44772 4 9 4.44772 9 5V10ZM7 12H6C5.44772 12 5 12.4477 5 13V17C5 17.5523 5.44772 18 6 18H11V12H9V13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13V12ZM13 12V18H18C18.5523 18 19 17.5523 19 17V13C19 12.4477 18.5523 12 18 12H17V13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13V12H13Z"
      fill="currentColor"
    />
  </IconBase>
);

export const BoxesSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 12C13.8954 12 13 12.8954 13 14V18C13 19.1046 13.8954 20 15 20H19C20.1046 20 21 19.1046 21 18V14C21 12.8954 20.1046 12 19 12H18.5C18.2239 12 18 12.2239 18 12.5V14C18 14.5523 17.5523 15 17 15C16.4477 15 16 14.5523 16 14V12.5C16 12.2239 15.7761 12 15.5 12H15Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 12C3.89543 12 3 12.8954 3 14V18C3 19.1046 3.89543 20 5 20H9C10.1046 20 11 19.1046 11 18V14C11 12.8954 10.1046 12 9 12H8.5C8.22386 12 8 12.2239 8 12.5V14C8 14.5523 7.55228 15 7 15C6.44772 15 6 14.5523 6 14V12.5C6 12.2239 5.77614 12 5.5 12H5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2C8.89543 2 8 2.89543 8 4V8C8 9.10457 8.89543 10 10 10H14C15.1046 10 16 9.10457 16 8V4C16 2.89543 15.1046 2 14 2H13.5C13.2239 2 13 2.22386 13 2.5V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2.5C11 2.22386 10.7761 2 10.5 2H10Z"
      fill="currentColor"
    />
  </IconBase>
);

export const BoxesDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M10 2C8.89543 2 8 2.89543 8 4V8C8 9.10457 8.89543 10 10 10H14C15.1046 10 16 9.10457 16 8V4C16 2.89543 15.1046 2 14 2H10Z"
      fill="currentColor"
    />
    <path
      d="M3 14C3 12.8954 3.89543 12 5 12H9C10.1046 12 11 12.8954 11 14V18C11 19.1046 10.1046 20 9 20H5C3.89543 20 3 19.1046 3 18V14Z"
      fill="currentColor"
    />
    <path
      d="M13 14C13 12.8954 13.8954 12 15 12H19C20.1046 12 21 12.8954 21 14V18C21 19.1046 20.1046 20 19 20H15C13.8954 20 13 19.1046 13 18V14Z"
      fill="currentColor"
    />
    <path
      d="M11 2H13V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2Z"
      fill="#3D3D40"
    />
    <path
      d="M6 12H8V14C8 14.5523 7.55228 15 7 15C6.44772 15 6 14.5523 6 14V12Z"
      fill="#3D3D40"
    />
    <path
      d="M18 12H16V14C16 14.5523 16.4477 15 17 15C17.5523 15 18 14.5523 18 14V12Z"
      fill="#3D3D40"
    />
  </IconBase>
);
