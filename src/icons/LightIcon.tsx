import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LightIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M9 18H15V20C15 21.1046 14.1046 22 13 22H11C9.89543 22 9 21.1046 9 20V18Z"
        fill="currentColor"
      />
      <path
        d="M10.7071 10.2929C10.3166 9.90237 9.68342 9.90237 9.29289 10.2929C8.90237 10.6834 8.90237 11.3166 9.29289 11.7071L11 13.4142V20H13V13.4142L14.7071 11.7071C15.0976 11.3166 15.0976 10.6834 14.7071 10.2929C14.3166 9.90237 13.6834 9.90237 13.2929 10.2929L12 11.5858L10.7071 10.2929Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 15.2853L15.7491 14.6849C17.1248 13.582 18 11.8939 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.8939 6.87516 13.582 8.25094 14.6849L9 15.2853V17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17V15.2853ZM17 16.2454V17C17 18.6569 15.6569 20 14 20H10C8.34315 20 7 18.6569 7 17V16.2454C5.17107 14.7793 4 12.5264 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 12.5264 18.8289 14.7793 17 16.2454Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
