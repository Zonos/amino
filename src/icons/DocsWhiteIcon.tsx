import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DocsWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.274 3.546A2 2 0 0 1 7.648 3H14a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1H6a2 2 0 0 1-2-2V6.556a2 2 0 0 1 .627-1.454l1.647-1.556ZM10 18v1h8V8h-2v8a2 2 0 0 1-2 2h-4ZM8.5 5h-.852L6 6.556v.694h2.5V5Zm2 0v2.25a2 2 0 0 1-2 2H6V16h8V5h-3.5Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
