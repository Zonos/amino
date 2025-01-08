import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CheckCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.342 10.21a.75.75 0 0 0-1.184-.92l-2.978 3.829-1.4-1.4a.75.75 0 1 0-1.06 1.061l1.8 1.8a1 1 0 0 0 1.496-.093z"
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
