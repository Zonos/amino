import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ExportIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M20 10.9a1.1 1.1 0 0 1 1.1 1.1v6a3.1 3.1 0 0 1-3.1 3.1H6A3.1 3.1 0 0 1 2.9 18v-6a1.1 1.1 0 0 1 2.2 0v6a.9.9 0 0 0 .9.9h12a.9.9 0 0 0 .9-.9v-6a1.1 1.1 0 0 1 1.1-1.1Zm-4.222-3.122a1.1 1.1 0 0 1-1.556 0L13.1 6.656V16a1.1 1.1 0 1 1-2.2 0V6.656L9.778 7.778a1.1 1.1 0 0 1-1.556-1.556l2.647-2.646a1.6 1.6 0 0 1 2.263 0l2.646 2.646a1.1 1.1 0 0 1 0 1.556Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
