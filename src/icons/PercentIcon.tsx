import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const PercentIcon = ({ size, color, className }: IconProps) => {
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
        d="M18.6 3.2C19.0418 3.53137 19.1314 4.15817 18.8 4.6L6.8 20.6C6.46863 21.0418 5.84183 21.1314 5.4 20.8C4.95817 20.4686 4.86863 19.8418 5.2 19.4L17.2 3.4C17.5314 2.95817 18.1582 2.86863 18.6 3.2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6.5C8 7.32843 7.32843 8 6.5 8C5.67157 8 5 7.32843 5 6.5C5 5.67157 5.67157 5 6.5 5C7.32843 5 8 5.67157 8 6.5ZM10 6.5C10 8.43299 8.433 10 6.5 10C4.567 10 3 8.43299 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM19 17.5C19 18.3284 18.3284 19 17.5 19C16.6716 19 16 18.3284 16 17.5C16 16.6716 16.6716 16 17.5 16C18.3284 16 19 16.6716 19 17.5ZM21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
