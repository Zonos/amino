import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const EditIcon = forwardRef<SVGSVGElement, IconProps>(
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
        clipRule="evenodd"
        d="M16.687 5.527a1.75 1.75 0 0 0-2.475 0l-8.777 8.777a2.75 2.75 0 0 0-.742 1.36l-.677 3.112a1 1 0 0 0 1.19 1.19l3.112-.677a2.75 2.75 0 0 0 1.36-.743l8.777-8.777a1.75 1.75 0 0 0 0-2.475zm-1.414 1.06a.25.25 0 0 1 .354 0l1.767 1.768a.25.25 0 0 1 0 .354l-8.777 8.777a1.25 1.25 0 0 1-.618.337l-2.352.512.511-2.352a1.25 1.25 0 0 1 .338-.619z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M13.75 18.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
