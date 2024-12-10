import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RemoveDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      className={className}
      color={color || 'gray400'}
      inlineBlock={inlineBlock}
      ref={ref}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M16.242 7.757a.75.75 0 0 1 0 1.061L13.061 12l3.181 3.182a.75.75 0 0 1-1.06 1.06L12 13.062l-3.182 3.182a.75.75 0 1 1-1.06-1.061L10.938 12 7.757 8.818a.75.75 0 1 1 1.06-1.06L12 10.938l3.182-3.182a.75.75 0 0 1 1.06 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
