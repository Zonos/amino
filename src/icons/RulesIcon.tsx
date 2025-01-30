import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RulesIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M16.665 4.22a.75.75 0 1 0-1.062 1.06l.838.841-3.908-.006a2.25 2.25 0 0 0-2.252 2.247l-.005 2.75-4.715-.008.841-.838a.75.75 0 0 0-1.058-1.063L3.22 11.321a.75.75 0 0 0-.001 1.062l2.116 2.125a.749.749 0 1 0 1.062-1.06l-.841-.844 4.718.008-.005 3.002a2.25 2.25 0 0 0 2.244 2.255l3.91.006-.843.841a.75.75 0 0 0 1.058 1.063l2.123-2.118a.75.75 0 0 0 .002-1.062l-2.116-2.125a.749.749 0 1 0-1.062 1.06l.838.84-3.907-.006a.75.75 0 0 1-.748-.751l.006-3.732v-.04l.006-3.48a.75.75 0 0 1 .75-.75l3.91.007-.843.84a.75.75 0 0 0 1.059 1.062l2.124-2.118a.75.75 0 0 0 .001-1.06z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
