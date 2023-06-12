import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TriangleDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.257 5.06c.765-1.36 2.722-1.36 3.486 0l7.29 12.96c.75 1.333-.213 2.98-1.743 2.98H4.71c-1.53 0-2.493-1.647-1.743-2.98l7.29-12.96Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
