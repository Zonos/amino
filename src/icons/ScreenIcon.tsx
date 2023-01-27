import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ScreenIcon = forwardRef<SVGSVGElement, IconProps>(
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
        fillRule="evenodd"
        d="M14.748 5.093a7.9 7.9 0 0 0-5.51.006 1.1 1.1 0 0 1-.77-2.06 10.1 10.1 0 0 1 7.046-.009 1.1 1.1 0 1 1-.766 2.063Zm4.621-2.017c1.006-1.007 2.732-.297 2.732 1.13V11.5c0 5.578-4.522 10.1-10.1 10.1-5.579 0-10.1-4.522-10.1-10.1V4.206C1.9 2.775 3.627 2.072 4.63 3.076l4.33 4.329A5.08 5.08 0 0 1 12 6.4a5.08 5.08 0 0 1 3.04 1.004l4.328-4.328Zm.532 2.58-3.862 3.861c-.573.573-1.452.489-1.946-.026A2.888 2.888 0 0 0 12 8.6c-.822 0-1.563.34-2.092.892-.495.514-1.373.6-1.947.026L4.1 5.656V11.5a7.9 7.9 0 1 0 15.8 0V5.656Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
