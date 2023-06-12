import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronRightDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.293 17.707a1 1 0 0 1 0-1.414L13.586 12 9.293 7.707a1 1 0 0 1 1.414-1.414l4.93 4.93a1.1 1.1 0 0 1 0 1.555l-4.93 4.93a1 1 0 0 1-1.414 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
