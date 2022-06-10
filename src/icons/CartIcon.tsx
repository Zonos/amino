import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CartIcon = ({ size, color, className }: IconProps) => {
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
        d="M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19ZM19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19C15 17.8954 15.8954 17 17 17C18.1046 17 19 17.8954 19 19Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4C3 3.44772 3.44772 3 4 3H4.36039C5.79044 3 7.02168 4.00938 7.30213 5.41165L7.4198 6H18.4969C20.1551 6 21.3538 7.58485 20.9025 9.18045L19.874 12.8165C19.5086 14.1082 18.3296 15 16.9872 15H9.63961C8.20956 15 6.97832 13.9906 6.69787 12.5883L5.34097 5.80389C5.24749 5.33646 4.83707 5 4.36039 5H4C3.44772 5 3 4.55228 3 4ZM7.8198 8L8.65903 12.1961C8.75251 12.6635 9.16293 13 9.63961 13H16.9872C17.4347 13 17.8277 12.7027 17.9495 12.2722L18.978 8.63609C19.0683 8.31697 18.8285 8 18.4969 8H7.8198Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
