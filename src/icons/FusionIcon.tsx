import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FusionIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4.045 6.641a4.75 4.75 0 0 0 0 6.718l7.248 7.248a1 1 0 0 0 1.414 0l7.248-7.248a4.75 4.75 0 0 0 0-6.718L17.834 4.52a1 1 0 0 0-1.415 0l-2.895 2.895a3 3 0 0 0-3.048 0L7.58 4.52a1 1 0 0 0-1.415 0l-2.12 2.12Zm1.06 5.657a3.25 3.25 0 0 1 0-4.596l1.768-1.768 2.829 2.829c.404.403.997.357 1.362.064a1.5 1.5 0 0 1 1.872 0c.365.293.958.34 1.362-.064l2.829-2.829 1.767 1.768a3.25 3.25 0 0 1 0 4.596L12 19.192z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M10.033 3.28a.75.75 0 1 0 .42 1.44 5.53 5.53 0 0 1 3.094 0 .75.75 0 1 0 .42-1.44 7.03 7.03 0 0 0-3.934 0"
        fill="currentColor"
      />
    </IconBase>
  ),
);
