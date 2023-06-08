import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BagIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11 5.1a.9.9 0 0 0-.9.9v.9h3.8V6a.9.9 0 0 0-.9-.9h-2Zm5.1 1.8V6A3.1 3.1 0 0 0 13 2.9h-2A3.1 3.1 0 0 0 7.9 6v.9h-.367a3.1 3.1 0 0 0-3.096 2.936l-.424 8A3.1 3.1 0 0 0 7.11 21.1h9.782a3.1 3.1 0 0 0 3.096-3.264l-.424-8A3.1 3.1 0 0 0 16.466 6.9H16.1Zm-2.2 2.2v.9a1.1 1.1 0 0 0 2.2 0v-.9h.367a.9.9 0 0 1 .899.852l.424 8a.9.9 0 0 1-.899.948H7.11a.9.9 0 0 1-.899-.948l.424-8a.9.9 0 0 1 .9-.852H7.9v.9a1.1 1.1 0 0 0 2.2 0v-.9h3.8Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
