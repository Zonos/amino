import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TriangleDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M14.46 5.492c-1.014-2.027-3.906-2.027-4.92 0L4.276 16.02c-.914 1.83.416 3.98 2.46 3.98h10.528c2.044 0 3.374-2.151 2.46-3.98z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
