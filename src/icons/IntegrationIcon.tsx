import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const IntegrationIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M4 12a7 7 0 0 1 7-7h4.728c.426 0 .772.346.772.772V8.75h2.75a.75.75 0 0 1 0 1.5H16.5v4.5h2.75a.75.75 0 0 1 0 1.5H16.5v1.978a.77.77 0 0 1-.772.772H11a7 7 0 0 1-7-7m7-5.5a5.5 5.5 0 1 0 0 11h4v-11z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
