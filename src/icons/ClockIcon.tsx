import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClockIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      ref={ref}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M12.75 9.25a.75.75 0 0 0-1.5 0v2.646a1 1 0 0 0 .293.708l1.927 1.926a.75.75 0 1 0 1.06-1.06l-1.78-1.78V9.25Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-6.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
