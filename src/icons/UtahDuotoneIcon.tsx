import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const UtahDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.617 4a2.75 2.75 0 0 0-2.744 2.56l-.724 10.5A2.75 2.75 0 0 0 6.893 20h10.263a2.75 2.75 0 0 0 2.747-2.876l-.316-6.91a2.75 2.75 0 0 0-2.747-2.625h-2.09a.25.25 0 0 1-.25-.25V5.75A1.75 1.75 0 0 0 12.75 4z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
