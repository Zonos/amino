import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CaretDownDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.075 10.006c-.849-.97-.16-2.487 1.129-2.487h9.592c1.289 0 1.978 1.517 1.129 2.487l-4.796 5.482a1.5 1.5 0 0 1-2.258 0l-4.796-5.482Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
