import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const StarDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.713 3.2a1.5 1.5 0 0 1 2.573 0l2.358 3.93 4.797 1.2a1.5 1.5 0 0 1 .758 2.451l-3.144 3.537.8 5.596c.17 1.198-1.074 2.095-2.156 1.554l-4.7-2.35-4.698 2.35c-1.083.54-2.327-.356-2.156-1.554l.8-5.596L2.8 10.78a1.5 1.5 0 0 1 .757-2.451l4.797-1.2 2.358-3.93Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
