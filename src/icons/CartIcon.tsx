import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CartIcon = forwardRef<SVGSVGElement, IconProps>(
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
        fillRule="evenodd"
        d="M11 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3 4a1 1 0 0 1 1-1h.36a3 3 0 0 1 2.942 2.412L7.42 6h11.077a2.5 2.5 0 0 1 2.405 3.18l-1.028 3.636A3 3 0 0 1 16.987 15H9.64a3 3 0 0 1-2.942-2.412L5.34 5.804A1 1 0 0 0 4.361 5H4a1 1 0 0 1-1-1Zm4.82 4 .839 4.196a1 1 0 0 0 .98.804h7.348a1 1 0 0 0 .963-.728l1.028-3.636A.5.5 0 0 0 18.497 8H7.82Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
