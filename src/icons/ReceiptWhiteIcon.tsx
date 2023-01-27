import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ReceiptWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2v14.168C20 20.18 19.18 21 18.168 21c-.307 0-.607-.09-.862-.261l-1.751-1.167a1 1 0 0 0-1.11 0l-.78.52a3 3 0 0 1-3.33 0l-.78-.52a1 1 0 0 0-1.11 0l-1.75 1.167a1.56 1.56 0 0 1-.863.261A1.832 1.832 0 0 1 4 19.168V5a1 1 0 0 1-1-1Zm3 1v13.798l1.336-.89a3 3 0 0 1 3.328 0l.781.52a1 1 0 0 0 1.11 0l.78-.52a3 3 0 0 1 3.33 0l1.335.89V5H6Zm2 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm6 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm6 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
