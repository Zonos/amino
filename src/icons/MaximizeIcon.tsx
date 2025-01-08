import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MaximizeIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M13.47 9.47a.75.75 0 1 0 1.06 1.06l3.97-3.97v2.19a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0 0 1.5h2.19zm-2.94 5.06a.75.75 0 1 0-1.06-1.06L5.5 17.44v-2.19a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5H6.56z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
