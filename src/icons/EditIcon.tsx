import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

export const EditIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4376 2.12423c-.2455-.12634-.54702-.0297-.67336.21585l-.42687.82963c-.12634.24555-.0297.54702.21585.67336l.82968.42687c.2455.12634.547.0297.6733-.21584l.4269-.82964c.1263-.24554.0297-.54702-.2159-.67336l-.8296-.42687zM9.111 4.70249l.82963.42687c.24557.12634.34217.42781.21587.67336L6.84769 12.2335l-1.74381 1.2766.02497-2.161 3.30879-6.43077c.12634-.24554.42781-.34218.67336-.21584z"
      fill="currentColor"
    />
  </IconBase>
);
