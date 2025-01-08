import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RemoveCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M14.475 10.586a.75.75 0 1 0-1.06-1.06L12 10.938l-1.414-1.414a.75.75 0 0 0-1.06 1.06L10.938 12l-1.414 1.414a.75.75 0 1 0 1.06 1.06L12 13.062l1.414 1.414a.75.75 0 0 0 1.06-1.06L13.062 12z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-6.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
