import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ExclamationMarkWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10-8c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10 5.01a1 1 0 0 1-1-1V16a1 1 0 1 1 2 0v.01a1 1 0 0 1-1 1ZM12 13a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
