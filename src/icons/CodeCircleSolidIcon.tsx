import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CodeCircleSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm1.237 6.288a.75.75 0 0 1 .474.95l-2 6a.75.75 0 0 1-1.422-.475l2-6a.75.75 0 0 1 .948-.475Zm-5.944 3.005a1 1 0 0 0 0 1.414l1 1a1 1 0 0 0 1.414-1.414L9.414 12l.293-.293a1 1 0 0 0-1.414-1.414l-1 1Zm9.414 0a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414l.293-.293-.293-.293a1 1 0 0 1 1.414-1.414l1 1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
