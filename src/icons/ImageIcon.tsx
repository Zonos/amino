import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ImageIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.25 10.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M6.75 4A2.75 2.75 0 0 0 4 6.75v10.5A2.75 2.75 0 0 0 6.75 20h10.5A2.75 2.75 0 0 0 20 17.25V6.75A2.75 2.75 0 0 0 17.25 4zM5.5 6.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v6.66L16.787 12a2.75 2.75 0 0 0-3.559.054l-1.86 1.627a1.25 1.25 0 0 1-1.218.245l-1.16-.386a2.75 2.75 0 0 0-2.022.112l-1.467.677zm10.334 6.408 2.666 2.196v1.896c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25v-1.27l2.095-.967a1.25 1.25 0 0 1 .92-.051l1.16.387a2.75 2.75 0 0 0 2.681-.54l1.86-1.627a1.25 1.25 0 0 1 1.618-.024"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
