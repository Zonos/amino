import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CopyIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.5 6.75c0-.69.56-1.25 1.25-1.25h7a.75.75 0 0 1 .75.75.75.75 0 0 0 1.5 0A2.25 2.25 0 0 0 13.75 4h-7A2.75 2.75 0 0 0 4 6.75v7A2.25 2.25 0 0 0 6.25 16a.75.75 0 0 0 0-1.5.75.75 0 0 1-.75-.75z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M10.75 8A2.75 2.75 0 0 0 8 10.75v6.5A2.75 2.75 0 0 0 10.75 20h6.5A2.75 2.75 0 0 0 20 17.25v-6.5A2.75 2.75 0 0 0 17.25 8zM9.5 10.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v6.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
