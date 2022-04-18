import React from 'react';

import { type IconProps } from '../types';
import { IconBase } from './IconBase';

export const LocationIcon = ({ size, color }: IconProps) => {
  return (
    <IconBase size={size} color={color}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C8.13401 4 5 7.13401 5 11C5 13.2061 6.33607 15.268 8.20492 16.8876L11.6463 19.8702C11.8493 20.0461 12.1507 20.0461 12.3537 19.8702L15.7951 16.8876C17.6639 15.268 19 13.2061 19 11C19 7.13401 15.866 4 12 4ZM3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11C21 14.0264 19.1902 16.5918 17.1049 18.399L13.6635 21.3816C12.7088 22.209 11.2912 22.209 10.3365 21.3816L6.89505 18.399C4.80977 16.5918 3 14.0264 3 11Z"
        fill="currentColor"
      />
      <path
        d="M14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export const LocationSolidIcon = ({ size, color }: IconProps) => {
  return (
    <IconBase size={size} color={color}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11C21 14.0264 19.1902 16.5918 17.1049 18.399L13.6635 21.3816C12.7088 22.209 11.2912 22.209 10.3365 21.3816L6.89505 18.399C4.80977 16.5918 3 14.0264 3 11ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export const LocationDuotoneIcon = ({ size, color }: IconProps) => {
  return (
    <IconBase size={size} color={color}>
      <path
        d="M12 2C7.02944 2 3 6.02944 3 11C3 14.0264 4.80977 16.5918 6.89505 18.399L10.3365 21.3816C11.2912 22.209 12.7088 22.209 13.6635 21.3816L17.1049 18.399C19.1902 16.5918 21 14.0264 21 11C21 6.02944 16.9706 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11Z"
        fill="#3D3D40"
      />
    </IconBase>
  );
};
