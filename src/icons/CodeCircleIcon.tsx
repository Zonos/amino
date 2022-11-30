import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CodeCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.711 9.237a.75.75 0 0 0-1.422-.474l-2 6a.75.75 0 1 0 1.422.474l2-6ZM7 12a1 1 0 0 1 .293-.707l1-1a1 1 0 0 1 1.414 1.414L9.414 12l.293.293a1 1 0 0 1-1.414 1.414l-1-1A1 1 0 0 1 7 12Zm10 0a1 1 0 0 0-.293-.707l-1-1a1 1 0 0 0-1.414 1.414l.293.293-.293.293a1 1 0 0 0 1.414 1.414l1-1A1 1 0 0 0 17 12Z"
      />
    </IconBase>
  )
);
