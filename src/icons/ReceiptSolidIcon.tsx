import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ReceiptSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5 8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12.5a.5.5 0 0 1-.692.462l-1.988-.829a1 1 0 0 0-.654-.04l-2.857.8a2.999 2.999 0 0 1-1.618 0l-2.857-.8a1 1 0 0 0-.654.04l-1.988.829A.5.5 0 0 1 5 20.5V8Zm3 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-7 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      />
    </IconBase>
  )
);
