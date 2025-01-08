import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TotalLandedCostIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11.356 4.512a1 1 0 0 1 1.788 0l2.846 5.69a1 1 0 0 1-.895 1.448h-5.69a1 1 0 0 1-.895-1.447zm.894 1.565-2.037 4.073h4.074zM13 14.75c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 18.25 20h-3.5A1.75 1.75 0 0 1 13 18.25zm1.75-.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25zM7.5 13a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
