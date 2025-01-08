import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MoneyIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.5 10.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm7.75-.75a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M12 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M5.5 4.75A2.75 2.75 0 0 0 2.75 7.5v9a2.75 2.75 0 0 0 2.75 2.75h13a2.75 2.75 0 0 0 2.75-2.75v-9a2.75 2.75 0 0 0-2.75-2.75zM4.25 7.5c0-.69.56-1.25 1.25-1.25h13c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25h-13c-.69 0-1.25-.56-1.25-1.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
