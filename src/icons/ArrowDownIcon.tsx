import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowDownIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.873 14.227a.75.75 0 0 1 1.061 0l3.316 3.316V4.75a.75.75 0 0 1 1.5 0v12.793l3.316-3.316a.75.75 0 1 1 1.06 1.061l-4.419 4.42a1 1 0 0 1-1.414 0l.384-.384-.384.383-4.42-4.42a.75.75 0 0 1 0-1.06"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
