import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CopyIDIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.25 8A2.25 2.25 0 0 0 4 10.25v7A2.75 2.75 0 0 0 6.75 20h6.925A2.325 2.325 0 0 0 16 17.675a.75.75 0 0 0-1.5 0c0 .456-.37.825-.825.825H6.75c-.69 0-1.25-.56-1.25-1.25v-7a.75.75 0 0 1 .75-.75.75.75 0 0 0 0-1.5m5.25.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m.75 2.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M10.75 4A2.75 2.75 0 0 0 8 6.75v6.5A2.75 2.75 0 0 0 10.75 16h6.5A2.75 2.75 0 0 0 20 13.25v-6.5A2.75 2.75 0 0 0 17.25 4zM9.5 6.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v6.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
