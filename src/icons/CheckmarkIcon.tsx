import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CheckmarkIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M18.707 7.293a1 1 0 0 1 0 1.414l-7.93 7.93a1.1 1.1 0 0 1-1.555 0l-3.93-3.93a1 1 0 1 1 1.415-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
