import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const TagSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2427 3C12.1819 3 11.1645 3.42143 10.4143 4.17157L3.87721 10.7087C2.70564 11.8803 2.70564 13.7797 3.87722 14.9513L9.04878 20.1229C10.2204 21.2945 12.1198 21.2945 13.2914 20.1229L19.8285 13.5858C20.5787 12.8356 21.0001 11.8182 21.0001 10.7574V6C21.0001 4.34315 19.657 3 18.0001 3H13.2427ZM15.5001 10C16.3285 10 17.0001 9.32843 17.0001 8.5C17.0001 7.67157 16.3285 7 15.5001 7C14.6717 7 14.0001 7.67157 14.0001 8.5C14.0001 9.32843 14.6717 10 15.5001 10Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
