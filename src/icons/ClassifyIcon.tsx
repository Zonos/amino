import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClassifyIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M13.094 4.563c-.464-.955-1.885-.62-1.885.443v4.521a3.76 3.76 0 0 0-2.98 3.692c0 .62.149 1.206.412 1.723l-4.245 3.253c-.76.581-.353 1.805.6 1.805h14.01c.735 0 1.215-.78.89-1.448l-6.802-13.99Zm-.395 5.391V7.166l5.509 11.327H6.474l3.413-2.615c.46-.352.497-.975.218-1.39a2.27 2.27 0 0 1-.386-1.27 2.25 2.25 0 0 1 2.048-2.252c.484-.04.932-.442.932-1.012"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M9.222 7.61a.76.76 0 0 0 .32-1.016.74.74 0 0 0-1.004-.323 7.54 7.54 0 0 0-4.034 6.697c0 .776.117 1.526.333 2.232.122.397.54.62.932.497a.755.755 0 0 0 .491-.943 6 6 0 0 1-.266-1.786 6.04 6.04 0 0 1 3.228-5.359Z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
