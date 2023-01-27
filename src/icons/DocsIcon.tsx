import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DocsIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.206 3.473A2.1 2.1 0 0 1 7.647 2.9H14c1.16 0 2.1.94 2.1 2.1v.9H18c1.16 0 2.1.94 2.1 2.1v11a2.1 2.1 0 0 1-2.1 2.1h-8A2.1 2.1 0 0 1 7.9 19v-.9H6A2.1 2.1 0 0 1 3.9 16V6.556a2.1 2.1 0 0 1 .658-1.527l1.648-1.556ZM10.1 18.1v.8h7.8V8.1h-1.8V16a2.1 2.1 0 0 1-2.1 2.1h-3.9Zm-2.413-13L6.1 6.6v.55h2.3V5.1h-.713Zm2.913 0v2.15a2.1 2.1 0 0 1-2.1 2.1H6.1v6.55h7.8V5.1h-3.3Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
