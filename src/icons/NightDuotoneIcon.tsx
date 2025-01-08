import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const NightDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color || 'gray400'}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M10.989 5.06a.75.75 0 0 0-.85-1.041C6.611 4.822 4 8.066 4 11.914 4 16.355 7.484 20 11.835 20c3.152 0 5.854-1.918 7.098-4.659a.75.75 0 0 0-.85-1.04 6.2 6.2 0 0 1-1.362.152c-3.474 0-6.335-2.924-6.335-6.586 0-1.006.217-1.957.603-2.807"
        fill="currentColor"
      />
    </IconBase>
  ),
);
