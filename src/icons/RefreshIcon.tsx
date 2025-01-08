import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RefreshIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11.752 5.307a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h2.546c2.9 0 5.25 2.35 5.25 5.25v.25a.75.75 0 0 0 1.5 0V13a6.75 6.75 0 0 0-6.75-6.75h-2.546zm1.5 8.886a.75.75 0 1 0-1.004 1.114l1.048.943H10.75A5.25 5.25 0 0 1 5.5 11v-.25a.75.75 0 0 0-1.5 0V11a6.75 6.75 0 0 0 6.75 6.75h2.546l-1.048.942a.75.75 0 1 0 1.004 1.116l2.5-2.25a.75.75 0 0 0 0-1.116z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
