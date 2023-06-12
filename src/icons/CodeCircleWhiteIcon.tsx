import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CodeCircleWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10.624-4.992a1 1 0 0 1 .868 1.116l-1 8a1 1 0 1 1-1.984-.248l1-8a1 1 0 0 1 1.116-.868ZM9.207 9.793a1 1 0 0 1 0 1.414L8.414 12l.793.793a1 1 0 1 1-1.414 1.414l-1.147-1.146a1.5 1.5 0 0 1 0-2.122l1.147-1.146a1 1 0 0 1 1.414 0Zm5.586 0a1 1 0 0 1 1.414 0l1.146 1.146a1.5 1.5 0 0 1 0 2.122l-1.146 1.146a1 1 0 0 1-1.414-1.414l.793-.793-.793-.793a1 1 0 0 1 0-1.414Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
