import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LoginIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M11 4a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-6a1 1 0 1 1 0-2h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1Zm1.293 4.293a1 1 0 0 1 1.414 0l2.647 2.646a1.5 1.5 0 0 1 0 2.122l-2.647 2.646a1 1 0 0 1-1.414-1.414L13.586 13H4a1 1 0 1 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
