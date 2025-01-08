import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TriangleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M13.118 6.163c-.46-.921-1.776-.921-2.236 0L5.618 16.691A1.25 1.25 0 0 0 6.736 18.5h10.528a1.25 1.25 0 0 0 1.118-1.809zm-3.578-.67c1.014-2.028 3.906-2.028 4.92 0l5.264 10.527c.914 1.829-.416 3.98-2.46 3.98H6.736c-2.044 0-3.374-2.151-2.46-3.98z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
