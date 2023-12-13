import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const IntegrationIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inline, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inline={inline}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M4 12a7 7 0 0 1 7-7h4.728c.426 0 .772.346.772.772V8.75h2.75a.75.75 0 0 1 0 1.5H16.5v4.5h2.75a.75.75 0 0 1 0 1.5H16.5v1.978a.772.772 0 0 1-.772.772H11a7 7 0 0 1-7-7Zm7-5.5a5.5 5.5 0 1 0 0 11h4v-11h-4Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
