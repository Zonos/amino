import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BellOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.75 10.75a5.25 5.25 0 0 1 7.635-4.678.75.75 0 1 0 .683-1.336A6.75 6.75 0 0 0 5.25 10.75v.933a.25.25 0 0 1-.046.144l-1.317 1.866a2.09 2.09 0 0 0 0 2.418.75.75 0 0 0 1.227-.862.59.59 0 0 1-.001-.692l1.317-1.865a1.75 1.75 0 0 0 .32-1.01z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="m17.787 7.274 1.994-1.994a.75.75 0 0 0-1.061-1.06l-14.5 14.5a.75.75 0 1 0 1.06 1.06L8.06 17h.19v.25A2.75 2.75 0 0 0 11 20h2a2.75 2.75 0 0 0 2.75-2.75V17h1.39c2.23 0 3.533-2.514 2.247-4.336l-.591-.837a.25.25 0 0 1-.046-.144v-.933c0-1.27-.352-2.46-.963-3.476m-1.103 1.102a5.2 5.2 0 0 1 .566 2.374v.933c0 .361.112.714.32 1.009l.591.837a1.25 1.25 0 0 1-1.02 1.971H9.56l7.123-7.124ZM9.75 17.25V17h4.5v.25c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
