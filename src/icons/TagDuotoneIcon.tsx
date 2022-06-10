import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const TagDuotoneIcon = ({
  size,
  color,
  className,
  secondaryColor,
}: IconProps & { secondaryColor?: string }) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M12.8286 3C12.033 3 11.2699 3.31607 10.7073 3.87868L3.59018 10.9958C2.80913 11.7768 2.80913 13.0432 3.59018 13.8242L10.176 20.41C10.957 21.1911 12.2234 21.191 13.0044 20.41L20.1215 13.2929C20.6841 12.7303 21.0002 11.9672 21.0002 11.1716V5C21.0002 3.89543 20.1048 3 19.0002 3H12.8286Z"
        fill="currentColor"
      />
      <path
        d="M17 8.5C17 9.32843 16.3284 10 15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
