import React from 'react';

import { IconProps } from 'types';
import { IconBase } from './IconBase';

export const SearchIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6109 6.92308c0 1.89051-1.5325 3.42312-3.42304 3.42312-1.89051 0-3.42307-1.53261-3.42307-3.42312C5.76479 5.03256 7.29735 3.5 9.18786 3.5c1.89054 0 3.42304 1.53256 3.42304 3.42308zm1.5 0c0 2.71894-2.2041 4.92312-4.92304 4.92312-1.08887 0-2.09517-.3535-2.91041-.952l-2.99712 2.9971c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7678 0-1.0607l2.99712-2.9971c-.5985-.81524-.952-1.82155-.952-2.91042C4.26479 4.20414 6.46892 2 9.18786 2s4.92304 2.20414 4.92304 4.92308z"
      fill="currentColor"
    />
  </IconBase>
);
