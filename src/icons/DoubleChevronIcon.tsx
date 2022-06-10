import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const DoubleChevronIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M16.3267 9.82843C16.7095 10.219 17.3301 10.219 17.7129 9.82843C18.0957 9.4379 18.0957 8.80474 17.7129 8.41421L12.6931 3.29289C12.5093 3.10536 12.26 3 12 3C11.7401 3 11.4907 3.10536 11.3069 3.29289L6.28712 8.41421C5.90434 8.80474 5.90434 9.4379 6.28712 9.82843C6.66991 10.219 7.29052 10.219 7.6733 9.82843L12 5.41421L16.3267 9.82843Z"
        fill="currentColor"
      />
      <path
        d="M7.67327 14.1716C7.29049 13.781 6.66987 13.781 6.28709 14.1716C5.9043 14.5621 5.9043 15.1953 6.28709 15.5858L11.3069 20.7071C11.4907 20.8946 11.74 21 12 21C12.2599 21 12.5093 20.8946 12.6931 20.7071L17.7129 15.5858C18.0957 15.1953 18.0957 14.5621 17.7129 14.1716C17.3301 13.781 16.7095 13.781 16.3267 14.1716L12 18.5858L7.67327 14.1716Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
