import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CodeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M13.397 5.015a.75.75 0 0 1 .588.882l-2.5 12.5a.75.75 0 1 1-1.47-.294l2.5-12.5a.75.75 0 0 1 .882-.588M8.8 8.24a.75.75 0 0 1-.04 1.06L5.852 12l2.908 2.7a.75.75 0 0 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 0 1 1.06.04m6.4 0a.75.75 0 0 1 1.06-.04l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.908-2.7-2.908-2.7a.75.75 0 0 1-.04-1.06"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
