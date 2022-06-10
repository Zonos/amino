import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const EditIcon = ({ size, color, className }: IconProps) => {
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
        d="M8.31703 19.9779C8.02085 20.2741 7.63916 20.4698 7.2258 20.5374L4.16185 21.0388C3.48715 21.1492 2.90308 20.5651 3.01348 19.8904L3.51486 16.8265C3.5825 16.4131 3.77821 16.0314 4.07439 15.7352L16.2238 3.58579C17.0049 2.80474 18.2712 2.80475 19.0523 3.58579L20.4665 5.00001C21.2475 5.78106 21.2475 7.04739 20.4665 7.82844L8.31703 19.9779ZM17.9916 5.35356C17.7963 5.1583 17.4798 5.1583 17.2845 5.35356L16.2238 6.41421L17.6381 7.82842L18.6987 6.76778C18.894 6.57251 18.894 6.25593 18.6987 6.06067L17.9916 5.35356ZM16.2238 9.24264L14.8096 7.82842L8.44567 14.1924L9.85988 15.6066L16.2238 9.24264ZM8.44567 17.0208L6.90282 18.5637L5.21191 18.8404L5.48861 17.1494L7.03146 15.6066L8.44567 17.0208Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
