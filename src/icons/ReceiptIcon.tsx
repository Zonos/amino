import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ReceiptIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.9 4A1.1 1.1 0 0 1 4 2.9h16a1.1 1.1 0 0 1 .1 2.196v14.072a1.932 1.932 0 0 1-1.932 1.932c-.327 0-.646-.097-.918-.278l-1.75-1.167a.9.9 0 0 0-1 0l-.78.52a3.1 3.1 0 0 1-3.44 0l-.78-.52a.9.9 0 0 0-1 0l-1.75 1.167a1.655 1.655 0 0 1-.918.278A1.932 1.932 0 0 1 3.9 19.168V5.096A1.1 1.1 0 0 1 2.9 4Zm3.2 1.1v13.511l1.18-.787a3.1 3.1 0 0 1 3.44 0l.78.521a.9.9 0 0 0 1 0l.78-.52a3.1 3.1 0 0 1 3.44 0l1.18.786V5.1H6.1ZM7.9 9A1.1 1.1 0 0 1 9 7.9h2a1.1 1.1 0 0 1 0 2.2H9A1.1 1.1 0 0 1 7.9 9Zm6 0A1.1 1.1 0 0 1 15 7.9h.01a1.1 1.1 0 0 1 0 2.2H15A1.1 1.1 0 0 1 13.9 9Zm-6 4A1.1 1.1 0 0 1 9 11.9h2a1.1 1.1 0 0 1 0 2.2H9A1.1 1.1 0 0 1 7.9 13Zm6 0a1.1 1.1 0 0 1 1.1-1.1h.01a1.1 1.1 0 0 1 0 2.2H15a1.1 1.1 0 0 1-1.1-1.1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
