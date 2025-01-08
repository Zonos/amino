import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CalculatorIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.5 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 3.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M12 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 3.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M15.5 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 3.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M8.5 7a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M6.75 4A2.75 2.75 0 0 0 4 6.75v10.5A2.75 2.75 0 0 0 6.75 20h10.5A2.75 2.75 0 0 0 20 17.25V6.75A2.75 2.75 0 0 0 17.25 4zM5.5 6.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
