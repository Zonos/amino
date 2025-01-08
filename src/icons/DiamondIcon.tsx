import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DiamondIcon = forwardRef<SVGSVGElement, IconProps>(
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
        clipRule="evenodd"
        d="M10.056 4.754a2.75 2.75 0 0 1 3.889 0l5.303 5.303a2.75 2.75 0 0 1 0 3.89l-5.304 5.303a2.75 2.75 0 0 1-3.889 0l-5.303-5.304a2.75 2.75 0 0 1 0-3.889zm2.828 1.06a1.25 1.25 0 0 0-1.768 0l-5.303 5.304a1.25 1.25 0 0 0 0 1.768l5.303 5.303a1.25 1.25 0 0 0 1.768 0l5.303-5.303a1.25 1.25 0 0 0 0-1.768z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
