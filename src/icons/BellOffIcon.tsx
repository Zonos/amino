import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BellOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414L18.586 20H14a2 2 0 1 1-4 0H8.253C5.891 20 4 18.05 4 15.715c0-1.145.474-2.258 1.318-3.046.435-.406.682-.975.682-1.57V7.414L2.293 3.707a1 1 0 0 1 0-1.414ZM8 9.414V11.1c0 1.15-.477 2.248-1.318 3.032A2.178 2.178 0 0 0 6 15.715C6 16.972 7.021 18 8.253 18h8.333L8 9.414ZM11 4h-1a1 1 0 0 0 0 2h2a4 4 0 0 1 4 4v1a1 1 0 1 0 2 0v-1a6.002 6.002 0 0 0-5-5.917V3a1 1 0 1 0-2 0v1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
