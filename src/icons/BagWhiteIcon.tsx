import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BagWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11 5a1 1 0 0 0-1 1v1h4V6a1 1 0 0 0-1-1h-2Zm5 2V6a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1h-.467a3 3 0 0 0-2.996 2.841l-.424 8A3 3 0 0 0 7.11 21h9.782a3 3 0 0 0 2.996-3.159l-.424-8A3 3 0 0 0 16.467 7H16Zm-2 2v1a1 1 0 1 0 2 0V9h.467a1 1 0 0 1 .999.947l.424 8a1 1 0 0 1-1 1.053H7.11a1 1 0 0 1-.999-1.053l.425-8A1 1 0 0 1 7.533 9H8v1a1 1 0 1 0 2 0V9h4Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
