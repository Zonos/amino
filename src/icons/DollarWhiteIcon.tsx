import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DollarWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-6a1 1 0 0 1 1 1v.12a4.237 4.237 0 0 1 2.789 2.222l.105.21a1 1 0 1 1-1.788.895l-.106-.21A2.236 2.236 0 0 0 12 9h-.675a.838.838 0 0 0-.265 1.633l2.513.837A2.838 2.838 0 0 1 13 16.981V17a1 1 0 1 1-2 0v-.12a4.236 4.236 0 0 1-2.789-2.222l-.105-.21a1 1 0 1 1 1.788-.895l.106.21A2.236 2.236 0 0 0 12 15h.675a.838.838 0 0 0 .265-1.633l-2.513-.837A2.838 2.838 0 0 1 11 7.019V7a1 1 0 0 1 1-1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
