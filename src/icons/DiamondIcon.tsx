import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DiamondIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.636 5.192a.9.9 0 0 0-1.272 0l-6.172 6.172a.9.9 0 0 0 0 1.272l6.172 6.172a.9.9 0 0 0 1.272 0l6.172-6.172a.9.9 0 0 0 0-1.272l-6.171-6.172ZM9.809 3.636a3.1 3.1 0 0 1 4.384 0l6.172 6.172a3.1 3.1 0 0 1 0 4.384l-6.172 6.172a3.1 3.1 0 0 1-4.384 0l-6.172-6.172a3.1 3.1 0 0 1 0-4.384l6.172-6.172Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
