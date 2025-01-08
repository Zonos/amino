import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DocsIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11 4.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .53.22l5.5 5.5c.141.14.22.331.22.53v5A2.75 2.75 0 0 1 17.25 18h-1.354a2.75 2.75 0 0 1-2.646 2h-6.5A2.75 2.75 0 0 1 4 17.25v-8.5A2.75 2.75 0 0 1 6.75 6h3a.75.75 0 0 1 .53.22l5.5 5.5c.141.14.22.331.22.53v4.25h1.25c.69 0 1.25-.56 1.25-1.25v-4.69L13.44 5.5h-1.69a.75.75 0 0 1-.75-.75M6.75 7.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V13h-2.75A2.75 2.75 0 0 1 9 10.25V7.5zm3.75 1.06 2.94 2.94h-1.69c-.69 0-1.25-.56-1.25-1.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
