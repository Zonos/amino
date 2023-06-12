import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const StarWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.713 3.2a1.5 1.5 0 0 1 2.573 0l2.358 3.93 4.797 1.2a1.5 1.5 0 0 1 .758 2.451l-3.144 3.537.8 5.596c.17 1.198-1.074 2.095-2.156 1.554l-4.7-2.35-4.698 2.35c-1.083.54-2.327-.356-2.156-1.554l.8-5.596L2.8 10.78a1.5 1.5 0 0 1 .757-2.451l4.797-1.2 2.358-3.93ZM12 4.944 9.964 8.337a1.5 1.5 0 0 1-.923.683l-4.197 1.05 2.75 3.092a1.5 1.5 0 0 1 .363 1.21l-.697 4.88 4.069-2.034a1.5 1.5 0 0 1 1.342 0l4.069 2.034-.697-4.88a1.5 1.5 0 0 1 .363-1.21l2.75-3.092-4.198-1.05a1.5 1.5 0 0 1-.922-.683L12 4.944Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
