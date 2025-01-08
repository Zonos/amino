import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ExportIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M14.647 8.286a.75.75 0 0 0 1.061-1.06l-3.002-3.003a1 1 0 0 0-1.414 0L8.29 7.225a.75.75 0 1 0 1.06 1.06l1.899-1.898v8.793a.75.75 0 0 0 1.5 0V6.387z"
        fill="currentColor"
      />
      <path
        d="M20 14a.75.75 0 0 0-1.5 0v3.25c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25V14A.75.75 0 0 0 4 14v3.25A2.75 2.75 0 0 0 6.75 20h10.5A2.75 2.75 0 0 0 20 17.25z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
