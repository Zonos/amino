import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const StarDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color || 'gray400'}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M12.646 4.37a.75.75 0 0 0-1.292 0L9.01 8.353 4.56 9.525a.75.75 0 0 0-.36 1.235l2.98 3.21-1.161 5.114a.75.75 0 0 0 1.053.843L12 17.581l4.928 2.346a.75.75 0 0 0 1.053-.843L16.82 13.97l2.98-3.21a.75.75 0 0 0-.358-1.235L14.99 8.353z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
