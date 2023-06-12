import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PercentIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M18.66 3.12a1.1 1.1 0 0 1 .22 1.54l-12 16a1.1 1.1 0 0 1-1.76-1.32l12-16a1.1 1.1 0 0 1 1.54-.22ZM7.5 5.1a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM3.9 6.5a3.6 3.6 0 1 1 7.2 0 3.6 3.6 0 0 1-7.2 0Zm12.6 9.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm-3.6 1.4a3.6 3.6 0 1 1 7.2 0 3.6 3.6 0 0 1-7.2 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
