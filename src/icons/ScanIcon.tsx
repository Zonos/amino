import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ScanIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.75 4A2.75 2.75 0 0 0 5 6.75V9a.75.75 0 0 0 1.5 0V6.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25V9A.75.75 0 0 0 19 9V6.75A2.75 2.75 0 0 0 16.25 4zM6.5 15A.75.75 0 0 0 5 15v2.25A2.75 2.75 0 0 0 7.75 20h8.5A2.75 2.75 0 0 0 19 17.25V15a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zm-1.75-3.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
