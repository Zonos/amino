import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const WarningIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.29 4.613c1.18-2.126 4.239-2.126 5.42 0l6.6 11.881c1.149 2.067-.345 4.606-2.71 4.606H5.4c-2.364 0-3.858-2.54-2.71-4.605l6.6-11.882Zm3.497 1.068a.9.9 0 0 0-1.574 0l-6.6 11.882a.9.9 0 0 0 .786 1.337H18.6a.9.9 0 0 0 .787-1.337L12.786 5.681ZM12 7.901A1.1 1.1 0 0 1 13.1 9v4a1.1 1.1 0 0 1-2.2 0V9A1.1 1.1 0 0 1 12 7.9Zm0 6.99a1.1 1.1 0 0 1 1.1 1.1V16a1.1 1.1 0 0 1-2.2 0v-.01a1.1 1.1 0 0 1 1.1-1.1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
