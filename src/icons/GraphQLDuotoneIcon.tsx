import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const GraphQLDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      className={className}
      color={color || 'gray400'}
      inlineBlock={inlineBlock}
      ref={ref}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M13.25 5.036V5a1.25 1.25 0 1 0-2.5.036L6.12 7.352a1.25 1.25 0 1 0-1.37 2.044v5.208a1.25 1.25 0 1 0 1.394 2.02l4.606 2.126a1.25 1.25 0 1 0 2.5 0l4.606-2.127a1.25 1.25 0 1 0 1.394-2.02V9.397a1.25 1.25 0 1 0-1.37-2.044l-4.63-2.316Zm4.46 3.907c.013.02.026.039.04.057v3.917l-3.671-5.789 3.63 1.815Zm-.574 5.807L12 6.65l-5.136 8.1h10.272ZM6.25 12.917l3.67-5.789-3.63 1.815A.822.822 0 0 1 6.25 9v3.917Zm5.451 4.619a1.253 1.253 0 0 1 .598 0l2.786-1.286h-6.17l2.786 1.286Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
