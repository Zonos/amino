import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CalendarIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M8 3a1 1 0 0 1 1 1v1h6V4a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1V4a1 1 0 0 1 1-1ZM6 7a1 1 0 0 0-1 1v1h14V8a1 1 0 0 0-1-1H6Zm13 4H5v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
