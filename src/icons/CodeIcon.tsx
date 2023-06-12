import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CodeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M14.097 3.937a1.1 1.1 0 0 1 .777 1.348l-3.623 13.523a1.1 1.1 0 0 1-2.125-.57l3.623-13.523a1.1 1.1 0 0 1 1.348-.778Zm2.125 3.285a1.1 1.1 0 0 1 1.556 0l3.646 3.647a1.6 1.6 0 0 1 0 2.262l-3.646 3.647a1.1 1.1 0 1 1-1.556-1.556L19.445 12l-3.223-3.222a1.1 1.1 0 0 1 0-1.556Zm-8.444 0a1.1 1.1 0 0 1 0 1.556L4.556 12l3.222 3.222a1.1 1.1 0 1 1-1.556 1.556L2.576 13.13a1.6 1.6 0 0 1 0-2.262l3.646-3.647a1.1 1.1 0 0 1 1.556 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
