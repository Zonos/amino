import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PrinterIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.5 6.75A2.75 2.75 0 0 1 10.25 4h3.5a2.75 2.75 0 0 1 2.75 2.75v1.5h.75A2.75 2.75 0 0 1 20 11v4.5a2.75 2.75 0 0 1-2.75 2.75h-.864A2.5 2.5 0 0 1 14 20h-4a2.5 2.5 0 0 1-2.386-1.75H6.75A2.75 2.75 0 0 1 4 15.5V11a2.75 2.75 0 0 1 2.75-2.75h.75zM9 8.25h6v-1.5c0-.69-.56-1.25-1.25-1.25h-3.5C9.56 5.5 9 6.06 9 6.75zm6 9.25v-2.75H9v2.75a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1m-7.5-.75v-2.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2.5h.75c.69 0 1.25-.56 1.25-1.25V11c0-.69-.56-1.25-1.25-1.25H6.75c-.69 0-1.25.56-1.25 1.25v4.5c0 .69.56 1.25 1.25 1.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
