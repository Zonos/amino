import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ImportIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.35 11.574a.75.75 0 0 0-1.06 1.061l3.002 3.002a1 1 0 0 0 1.414 0l3.002-3.002a.75.75 0 1 0-1.06-1.06l-1.9 1.898V4.68a.75.75 0 0 0-1.5 0v8.793z"
        fill="currentColor"
      />
      <path
        d="M20 14a.75.75 0 0 0-1.5 0v3.25c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25V14A.75.75 0 0 0 4 14v3.25A2.75 2.75 0 0 0 6.75 20h10.5A2.75 2.75 0 0 0 20 17.25z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
