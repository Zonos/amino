import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PlayIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M17.837 13.118c.921-.46.921-1.775 0-2.236L7.309 5.618A1.25 1.25 0 0 0 5.5 6.736v10.528c0 .93.978 1.534 1.809 1.118zm.67-3.578c2.028 1.014 2.027 3.906 0 4.92L7.98 19.724c-1.83.914-3.98-.416-3.98-2.46V6.736c0-2.044 2.151-3.374 3.98-2.46z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
