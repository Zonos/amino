import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowRightDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        clipRule="evenodd"
        d="M14.227 17.127a.75.75 0 0 1 0-1.061l3.316-3.316H4.75a.75.75 0 0 1 0-1.5h12.793l-3.316-3.316a.75.75 0 0 1 1.06-1.06l4.42 4.419a1 1 0 0 1 0 1.414l-.384-.384.384.384-4.42 4.42a.75.75 0 0 1-1.06 0"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
