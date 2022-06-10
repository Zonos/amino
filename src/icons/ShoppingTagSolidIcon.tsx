import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ShoppingTagSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M12.8286 3C12.033 3 11.2699 3.31607 10.7073 3.87868L6.35364 8.23232C6.15838 8.42759 6.15838 8.74417 6.35364 8.93943L15.0608 17.6465C15.256 17.8418 15.5726 17.8418 15.7679 17.6465L20.1215 13.2929C20.6841 12.7303 21.0002 11.9672 21.0002 11.1716V5C21.0002 3.89543 20.1048 3 19.0002 3H12.8286ZM17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z"
        fill="currentColor"
      />
      <path
        d="M13.6465 19.7679C13.8418 19.5726 13.8418 19.256 13.6465 19.0608L4.93943 10.3536C4.74417 10.1584 4.42759 10.1584 4.23232 10.3536L3.59018 10.9958C2.80913 11.7768 2.80913 13.0432 3.59018 13.8242L10.176 20.41C10.957 21.1911 12.2234 21.191 13.0044 20.41L13.6465 19.7679Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
