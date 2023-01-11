import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FileWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.053 2.817A3 3 0 0 1 10.11 2H17a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7.93a3 3 0 0 1 .943-2.183l3.11-2.93ZM10.11 4a1 1 0 0 0-.685.272l-3.11 2.931A1 1 0 0 0 6 7.885h3.3a1 1 0 0 0 1-1V4h-.19Zm2.19 0v2.885a3 3 0 0 1-3 3H6V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4.7Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
