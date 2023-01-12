import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MinusCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4.1a7.9 7.9 0 1 0 0 15.8 7.9 7.9 0 0 0 0-15.8ZM1.9 12C1.9 6.422 6.422 1.9 12 1.9c5.578 0 10.1 4.522 10.1 10.1 0 5.578-4.522 10.1-10.1 10.1-5.578 0-10.1-4.522-10.1-10.1Zm5 0A1.1 1.1 0 0 1 8 10.9h8a1.1 1.1 0 0 1 0 2.2H8A1.1 1.1 0 0 1 6.9 12Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);