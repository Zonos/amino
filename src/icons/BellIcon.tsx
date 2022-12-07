import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BellIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11 3a1 1 0 1 1 2 0v1c0 .028-.001.055-.003.082A6.002 6.002 0 0 1 18 10v1.957c0 .431.156.847.439 1.172l.644.74C21.17 16.261 19.47 20 16.294 20H14a2 2 0 1 1-4 0H7.706c-3.176 0-4.876-3.738-2.79-6.132l.645-.74A1.78 1.78 0 0 0 6 11.958V10a6.002 6.002 0 0 1 5.003-5.918A1.021 1.021 0 0 1 11 4V3Zm1 3a4 4 0 0 0-4 4v1.957a3.78 3.78 0 0 1-.931 2.486l-.645.74C5.465 16.282 6.247 18 7.706 18h8.588c1.46 0 2.24-1.718 1.282-2.818l-.645-.739A3.783 3.783 0 0 1 16 11.957V10a4 4 0 0 0-4-4Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
