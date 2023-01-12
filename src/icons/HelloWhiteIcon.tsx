import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HelloWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.707 5.121a1 1 0 0 0-1.414 0l-6.171 6.172a1 1 0 0 0 0 1.414l6.171 6.172a1 1 0 0 0 1.414 0l6.172-6.172a1 1 0 0 0 0-1.414L12.707 5.12ZM9.88 3.707a3 3 0 0 1 4.242 0l6.172 6.172a3 3 0 0 1 0 4.242l-6.171 6.172a3 3 0 0 1-4.243 0L3.707 14.12a3 3 0 0 1 0-4.242L9.88 3.707Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);