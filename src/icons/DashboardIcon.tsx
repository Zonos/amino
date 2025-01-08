import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DashboardIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M14.926 10.12a.85.85 0 0 0-1.046-1.046L12 9.593l-1.88-.52a.85.85 0 0 0-1.046 1.046L9.592 12l-.518 1.882a.85.85 0 0 0 1.045 1.045l1.88-.519 1.881.52a.85.85 0 0 0 1.046-1.046L14.407 12zm-2.7.966.95-.262-.262.95a.85.85 0 0 0 0 .452l.261.95-.95-.262a.85.85 0 0 0-.451 0l-.95.261.262-.949a.85.85 0 0 0 0-.452l-.262-.95.95.262a.85.85 0 0 0 .452 0"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M5.374 4.144a1 1 0 0 0-1.23 1.23L5.972 12l-1.828 6.626a1 1 0 0 0 1.23 1.23L12 18.028l6.626 1.828a1 1 0 0 0 1.23-1.23L18.028 12l1.828-6.626a1 1 0 0 0-1.23-1.23L12 5.972zm2.08 7.59-1.63-5.91 5.91 1.63a1 1 0 0 0 .532 0l5.91-1.63-1.63 5.91a1 1 0 0 0 0 .532l1.63 5.91-5.91-1.63a1 1 0 0 0-.532 0l-5.91 1.63 1.63-5.91a1 1 0 0 0 0-.532"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
