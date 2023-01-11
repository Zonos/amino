import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const SettingsWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.072a1 1 0 0 0 1.5.866l.928-.536a2 2 0 0 1 2.732.732l1 1.732a2 2 0 0 1-.732 2.732l-.928.536a1 1 0 0 0 0 1.732l.928.536a2 2 0 0 1 .732 2.732l-1 1.732a2 2 0 0 1-2.732.732l-.928-.536a1 1 0 0 0-1.5.866V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1.072a1 1 0 0 0-1.5-.866l-.928.536a2 2 0 0 1-2.732-.732l-1-1.732a2 2 0 0 1 .732-2.732l.928-.536a1 1 0 0 0 0-1.732l-.928-.536a2 2 0 0 1-.732-2.732l1-1.732a2 2 0 0 1 2.732-.732l.928.536A1 1 0 0 0 9 5.072V4Zm4 0h-2v1.072c0 2.31-2.5 3.753-4.5 2.598l-.928-.536-1 1.732.928.536c2 1.155 2 4.042 0 5.196l-.928.536 1 1.732.928-.536c2-1.154 4.5.289 4.5 2.598V20h2v-1.072c0-2.31 2.5-3.753 4.5-2.598l.928.536 1-1.732-.928-.536c-2-1.155-2-4.041 0-5.196l.928-.536-1-1.732-.928.536c-2 1.155-4.5-.289-4.5-2.598V4Zm-3 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
