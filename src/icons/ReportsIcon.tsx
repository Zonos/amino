import React from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './_IconBase';

/** @deprecated Use ChartIcon instead */
export const ReportsIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 20C3 19.4477 3.44772 19 4 19H20C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 3C17.4477 3 17 3.44772 17 4V16C17 16.5523 17.4477 17 18 17C18.5523 17 19 16.5523 19 16V4C19 3.44772 18.5523 3 18 3ZM10 5C9.44772 5 9 5.44772 9 6V16C9 16.5523 9.44772 17 10 17C10.5523 17 11 16.5523 11 16V6C11 5.44772 10.5523 5 10 5ZM6 11C5.44772 11 5 11.4477 5 12V16C5 16.5523 5.44772 17 6 17C6.55228 17 7 16.5523 7 16V12C7 11.4477 6.55228 11 6 11ZM13 8C13 7.44772 13.4477 7 14 7C14.5523 7 15 7.44772 15 8V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V8Z"
      fill="currentColor"
    />
  </IconBase>
);
ReportsIcon.deprecated = true;
