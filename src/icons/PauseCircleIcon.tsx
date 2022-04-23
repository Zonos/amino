import React from 'react';

import { type IconProps } from '~/src/types';

import { IconBase } from './IconBase';

export const PauseCircleIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="currentColor"
    />
    <path
      d="M10 8C9.44772 8 9 8.44772 9 9V15C9 15.5523 9.44772 16 10 16C10.5523 16 11 15.5523 11 15V9C11 8.44772 10.5523 8 10 8Z"
      fill="currentColor"
    />
    <path
      d="M14 8C13.4477 8 13 8.44772 13 9V15C13 15.5523 13.4477 16 14 16C14.5523 16 15 15.5523 15 15V9C15 8.44772 14.5523 8 14 8Z"
      fill="currentColor"
    />
  </IconBase>
);

export const PauseCircleSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM9 9C9 8.44772 9.44772 8 10 8C10.5523 8 11 8.44772 11 9V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V9ZM14 8C13.4477 8 13 8.44772 13 9V15C13 15.5523 13.4477 16 14 16C14.5523 16 15 15.5523 15 15V9C15 8.44772 14.5523 8 14 8Z"
      fill="currentColor"
    />
  </IconBase>
);

export const PauseCircleDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      fill="currentColor"
    />
    <path
      d="M10 8C9.44772 8 9 8.44772 9 9V15C9 15.5523 9.44772 16 10 16C10.5523 16 11 15.5523 11 15V9C11 8.44772 10.5523 8 10 8Z"
      fill="#3D3D40"
    />
    <path
      d="M14 8C13.4477 8 13 8.44772 13 9V15C13 15.5523 13.4477 16 14 16C14.5523 16 15 15.5523 15 15V9C15 8.44772 14.5523 8 14 8Z"
      fill="#3D3D40"
    />
  </IconBase>
);
