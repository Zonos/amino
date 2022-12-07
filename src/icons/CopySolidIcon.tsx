import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CopySolidIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M16 2.027V6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V2.027c-.087.005-.17.01-.252.017-.562.046-1.079.145-1.564.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C4 6.29 4 6.954 4 7.758v8.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C8.29 22 8.954 22 9.758 22h4.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V7.758c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392A9.558 9.558 0 0 0 16 2.027Z"
      />
      <path
        fill="currentColor"
        d="M10 2h4v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2Z"
      />
    </IconBase>
  )
);
