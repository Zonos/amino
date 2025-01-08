import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const InfoIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 10.25a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-.75.75m0 5.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0V15a.75.75 0 0 1-.75.75"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-6.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
