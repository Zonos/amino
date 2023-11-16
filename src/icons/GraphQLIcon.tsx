import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const GraphQLIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M13.25 5v.036l4.63 2.316a1.25 1.25 0 1 1 1.37 2.044v5.208a1.25 1.25 0 1 1-1.394 2.02l-4.606 2.125a1.25 1.25 0 0 1-2.5.001l-4.606-2.127a1.25 1.25 0 1 1-1.394-2.02V9.397a1.25 1.25 0 1 1 1.37-2.044l4.63-2.316V5a1.25 1.25 0 1 1 2.5 0Zm-7 7.917V9a.822.822 0 0 0 .04-.057l3.63-1.815-3.67 5.789Zm8.835 3.333L12.3 17.536a1.253 1.253 0 0 0-.598 0L8.915 16.25h6.17Zm2.625-7.307c.013.02.026.039.04.057v3.917l-3.671-5.789 3.63 1.815Zm-.574 5.807L12 6.65l-5.136 8.1h10.272Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
