import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PlayDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4 5.608c0-2.356 2.592-3.792 4.59-2.544l10.226 6.392c1.88 1.175 1.88 3.913 0 5.088L8.59 20.935C6.592 22.185 4 20.748 4 18.391V5.608Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
