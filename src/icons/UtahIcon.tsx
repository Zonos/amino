import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const UtahIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.617 5.5A1.25 1.25 0 0 0 6.37 6.664l-.724 10.5A1.25 1.25 0 0 0 6.893 18.5h10.263a1.25 1.25 0 0 0 1.249-1.307l-.317-6.91a1.25 1.25 0 0 0-1.248-1.194h-2.09A1.75 1.75 0 0 1 13 7.34V5.75a.25.25 0 0 0-.25-.25zM4.873 6.56A2.75 2.75 0 0 1 7.617 4h5.133c.966 0 1.75.784 1.75 1.75v1.59c0 .137.112.25.25.25h2.09a2.75 2.75 0 0 1 2.747 2.623l.316 6.911A2.75 2.75 0 0 1 17.156 20H6.893a2.75 2.75 0 0 1-2.744-2.94z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
