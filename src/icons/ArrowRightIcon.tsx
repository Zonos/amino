import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowRightIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M14.222 7.222a1.1 1.1 0 0 1 1.556 0l3.646 3.647a1.6 1.6 0 0 1 0 2.262l-3.646 3.647a1.1 1.1 0 1 1-1.556-1.556l2.122-2.122H5a1.1 1.1 0 0 1 0-2.2h11.344l-2.122-2.122a1.1 1.1 0 0 1 0-1.556Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
