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
        d="M8 2.9A1.1 1.1 0 0 1 9.1 4v.9h5.8V4a1.1 1.1 0 0 1 2.2 0v.9h.9A3.1 3.1 0 0 1 21.1 8v10a3.1 3.1 0 0 1-3.1 3.1H6A3.1 3.1 0 0 1 2.9 18V8A3.1 3.1 0 0 1 6 4.9h.9V4A1.1 1.1 0 0 1 8 2.9ZM6 7.1a.9.9 0 0 0-.9.9v.9h13.8V8a.9.9 0 0 0-.9-.9H6Zm12.9 4H5.1V18a.9.9 0 0 0 .9.9h12a.9.9 0 0 0 .9-.9v-6.9Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
