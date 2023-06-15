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
        d="M14.07 4.034a1 1 0 0 1 .708 1.225l-3.624 13.523a1 1 0 0 1-1.931-.518l3.623-13.523a1 1 0 0 1 1.225-.707Zm2.223 3.259a1 1 0 0 1 1.414 0l3.647 3.646a1.5 1.5 0 0 1 0 2.122l-3.647 3.646a1 1 0 0 1-1.414-1.414L19.586 12l-3.293-3.293a1 1 0 0 1 0-1.414Zm-8.586 0a1 1 0 0 1 0 1.414L4.414 12l3.293 3.293a1 1 0 1 1-1.414 1.414l-3.646-3.646a1.5 1.5 0 0 1 0-2.122l3.646-3.646a1 1 0 0 1 1.414 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
