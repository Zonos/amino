import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DiamondDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M13.945 4.754a2.75 2.75 0 0 0-3.89 0l-5.303 5.303a2.75 2.75 0 0 0 0 3.89l5.304 5.303a2.75 2.75 0 0 0 3.889 0l5.303-5.304a2.75 2.75 0 0 0 0-3.889z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
