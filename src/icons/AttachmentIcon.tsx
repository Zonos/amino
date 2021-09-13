import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

export const AttachmentIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M12 14.25H4c-.13807 0-.25-.1119-.25-.25V2c0-.13807.11193-.25.25-.25h5.5c.07869 0 .15279.03705.2.1l2.5 3.33333c.0325.04328.05.09591.05.15V14c0 .1381-.1119.25-.25.25z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
