import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inline, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inline={inline}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M7.75 4.5c-.69 0-1.25.56-1.25 1.25v13.333l3.954-2.688a2.75 2.75 0 0 1 3.092 0l3.954 2.688V5.75c0-.69-.56-1.25-1.25-1.25h-8.5ZM5 5.75A2.75 2.75 0 0 1 7.75 3h8.5A2.75 2.75 0 0 1 19 5.75v14.278a1 1 0 0 1-1.562.827l-4.735-3.22a1.25 1.25 0 0 0-1.406 0l-4.735 3.22A1 1 0 0 1 5 20.028V5.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
