import React from 'react';

import { type IconProps } from '~/src/types/IconProps';

import { IconBase } from './IconBase';

export const TrashIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 8V18C7 19.1046 7.89543 20 9 20H15C16.1046 20 17 19.1046 17 18V8H19V18C19 20.2091 17.2091 22 15 22H9C6.79086 22 5 20.2091 5 18V8H7Z"
      fill="currentColor"
    />
    <path
      d="M10 11C9.44772 11 9 11.4477 9 12V16C9 16.5523 9.44772 17 10 17C10.5523 17 11 16.5523 11 16V12C11 11.4477 10.5523 11 10 11Z"
      fill="currentColor"
    />
    <path
      d="M14 11C13.4477 11 13 11.4477 13 12V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V12C15 11.4477 14.5523 11 14 11Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H8ZM10 5C10 4.44772 10.4477 4 11 4H13C13.5523 4 14 4.44772 14 5V6H10V5Z"
      fill="currentColor"
    />
  </IconBase>
);

export const TrashSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 10C5 8.89543 5.89543 8 7 8H17C18.1046 8 19 8.89543 19 10V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19V10ZM9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V13ZM13 13C13 12.4477 13.4477 12 14 12C14.5523 12 15 12.4477 15 13V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V13Z"
      fill="currentColor"
    />
    <path
      d="M10 2C8.89543 2 8 2.89543 8 4H5C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6H19C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4H16C16 2.89543 15.1046 2 14 2H10Z"
      fill="currentColor"
    />
  </IconBase>
);

export const TrashDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M19 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8Z"
      fill="currentColor"
    />
    <path
      d="M10 12C9.44772 12 9 12.4477 9 13V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V13C11 12.4477 10.5523 12 10 12Z"
      fill="#3D3D40"
    />
    <path
      d="M14 12C13.4477 12 13 12.4477 13 13V17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17V13C15 12.4477 14.5523 12 14 12Z"
      fill="#3D3D40"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H8ZM10 5C10 4.44772 10.4477 4 11 4H13C13.5523 4 14 4.44772 14 5V6H10V5Z"
      fill="#3D3D40"
    />
  </IconBase>
);
