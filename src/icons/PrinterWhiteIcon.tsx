import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PrinterWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10 5a1 1 0 0 0-1 1v2h6V6a1 1 0 0 0-1-1h-4Zm7 3V6a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v2H6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h1.17A3.001 3.001 0 0 0 10 21h4a3.001 3.001 0 0 0 2.83-2H18a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-1Zm0 9h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1v-1.5A1.5 1.5 0 0 1 8.5 14h7a1.5 1.5 0 0 1 1.5 1.5V17Zm-2 1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2h6v2Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
