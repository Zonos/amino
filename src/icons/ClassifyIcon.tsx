import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClassifyIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M8.969 4.73a1.1 1.1 0 0 1-.448 1.489 8.497 8.497 0 0 0-3.437 3.368 7.838 7.838 0 0 0-.947 4.556 1.1 1.1 0 1 1-2.19.214 10.038 10.038 0 0 1 1.21-5.831A10.696 10.696 0 0 1 7.479 4.28a1.1 1.1 0 0 1 1.49.448Zm1.931-.55c0-1.651 2.197-2.22 2.999-.778l8.65 15.57a1.6 1.6 0 0 1-1.399 2.378H3.805c-1.623 0-2.215-2.137-.823-2.972l3.842-2.305a5.76 5.76 0 0 1-.47-2.285c0-2.763 1.943-5.086 4.546-5.606V4.18Zm2.2 2.315v2.178c0 .911-.723 1.537-1.478 1.62-1.711.19-3.068 1.671-3.068 3.495 0 .62.157 1.198.43 1.7.38.7.243 1.709-.58 2.202l-2.433 1.46h14.16L13.1 6.495Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
