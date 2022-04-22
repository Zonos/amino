import React from 'react';

import { type IconProps } from 'src/types';

import { IconBase } from './IconBase';

export const PlayIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 6.00677C4 2.71133 7.76157 0.829598 10.3987 2.80581L18.3961 8.79884C20.5311 10.3988 20.5311 13.6008 18.3961 15.2007L10.3987 21.1939C7.76161 23.1701 4 21.2884 4 17.9929V6.00677ZM9.19936 4.40629C7.88079 3.41819 6 4.35905 6 6.00677V17.9929C6 19.6407 7.8808 20.5815 9.19937 19.5934L17.1967 13.6003C18.2642 12.8003 18.2642 11.1993 17.1967 10.3993L9.19936 4.40629Z"
      fill="currentColor"
    />
  </IconBase>
);

export const PlaySolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M8.72154 2.54687C6.73333 1.15374 4 2.57604 4 5.00375V18.9965C4 21.4243 6.73336 22.8466 8.72156 21.4534L18.7297 14.4406C20.4229 13.2541 20.4229 10.746 18.7297 9.55955L8.72154 2.54687Z"
      fill="currentColor"
    />
  </IconBase>
);

export const PlayDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M8.72154 2.54687C6.73333 1.15374 4 2.57604 4 5.00375V18.9965C4 21.4243 6.73336 22.8466 8.72156 21.4534L18.7297 14.4406C20.4229 13.2541 20.4229 10.746 18.7297 9.55955L8.72154 2.54687Z"
      fill="currentColor"
    />
  </IconBase>
);
