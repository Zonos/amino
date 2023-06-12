import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DiamondDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color || 'gray400'}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M9.879 3.707a3 3 0 0 1 4.242 0l6.172 6.172a3 3 0 0 1 0 4.242l-6.171 6.172a3 3 0 0 1-4.243 0L3.707 14.12a3 3 0 0 1 0-4.242L9.88 3.707Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
