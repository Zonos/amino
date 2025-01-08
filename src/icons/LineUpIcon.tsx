import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LineUpIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.5 4.75a.75.75 0 0 0-1.5 0v12.5A2.75 2.75 0 0 0 6.75 20h12.5a.75.75 0 0 0 0-1.5H6.75c-.69 0-1.25-.56-1.25-1.25z"
        fill="currentColor"
      />
      <path
        d="M8 16.25a.75.75 0 0 1 0-1.5h1.251c2.9 0 5.25-2.35 5.25-5.25V7.457l-1.72 1.721a.75.75 0 1 1-1.061-1.06l2.824-2.825a1 1 0 0 1 1.415 0l2.825 2.825a.75.75 0 0 1-1.06 1.06L16 7.459V9.5a6.75 6.75 0 0 1-6.75 6.75z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
