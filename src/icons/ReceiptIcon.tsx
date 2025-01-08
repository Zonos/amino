import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ReceiptIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.25 9A.75.75 0 0 1 9 8.25h2.5a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9m6.25-.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM8.25 13a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m6.25-.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M4.75 4a.75.75 0 0 0 0 1.5H5v13.553a1 1 0 0 0 1.524.851l2.514-1.547 2.515 1.258a1 1 0 0 0 .894 0l2.515-1.258 2.514 1.547A1 1 0 0 0 19 19.053V5.5h.25a.75.75 0 0 0 0-1.5zM17.5 5.5h-11v12.658l1.988-1.224a1 1 0 0 1 .972-.043l2.54 1.27 2.54-1.27a1 1 0 0 1 .972.043l1.988 1.224z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
