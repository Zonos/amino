import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CaretDownDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inline, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color || 'gray400'}
      inline={inline}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M8.26 9a1 1 0 0 0-.792 1.611l3.74 4.842a1 1 0 0 0 1.583 0l3.741-4.842A1 1 0 0 0 15.741 9H8.259Z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
