import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.75 3A2.75 2.75 0 0 0 5 5.75v7.5a.75.75 0 0 0 1.5 0v-7.5c0-.69.56-1.25 1.25-1.25h7.504a.75.75 0 0 0 0-1.5z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="m19 6.06.78-.78a.75.75 0 0 0-1.06-1.06l-14.5 14.5A.75.75 0 0 0 5 19.957v.07a1 1 0 0 0 1.562.828l4.735-3.22a1.25 1.25 0 0 1 1.406 0l4.735 3.22A1 1 0 0 0 19 20.028zm-1.5 1.5v11.523l-3.954-2.688a2.75 2.75 0 0 0-3.092 0L6.5 19.082v-.522z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
