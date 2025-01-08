import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CartIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4 4.75A.75.75 0 0 1 4.75 4h.188a2.75 2.75 0 0 1 2.646 2h9.659a2.75 2.75 0 0 1 2.73 3.08l-.515 4.25a2.75 2.75 0 0 1-2.73 2.42H9.772a2.75 2.75 0 0 1-2.73-2.42l-.78-6.443-.11-.44A1.25 1.25 0 0 0 4.937 5.5H4.75A.75.75 0 0 1 4 4.75M7.846 7.5l.685 5.65a1.25 1.25 0 0 0 1.241 1.1h6.956a1.25 1.25 0 0 0 1.24-1.1l.516-4.25a1.25 1.25 0 0 0-1.241-1.4z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M18 18.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M9.75 20a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        fill="currentColor"
      />
    </IconBase>
  ),
);
