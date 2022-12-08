import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PlayDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.722 2.547C6.733 1.154 4 2.576 4 5.004v13.993c0 2.427 2.733 3.85 4.722 2.456l10.008-7.012c1.693-1.187 1.693-3.695 0-4.881L8.722 2.547Z"
      />
    </IconBase>
  )
);
