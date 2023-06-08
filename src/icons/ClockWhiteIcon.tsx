import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClockWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-6a1 1 0 0 1 1 1v4h2a1 1 0 1 1 0 2h-2.5a1.5 1.5 0 0 1-1.5-1.5V7a1 1 0 0 1 1-1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
