import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PlusIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 3.9A1.1 1.1 0 0 1 13.1 5v5.9H19a1.1 1.1 0 0 1 0 2.2h-5.9V19a1.1 1.1 0 0 1-2.2 0v-5.9H5a1.1 1.1 0 0 1 0-2.2h5.9V5A1.1 1.1 0 0 1 12 3.9Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
