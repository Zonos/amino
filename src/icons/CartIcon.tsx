import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CartIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.9 3A1.1 1.1 0 0 1 4 1.9h1.047c.274 0 .546.052.8.154a3.21 3.21 0 0 1 1.956 2.351l.099.495h9.832a3.1 3.1 0 0 1 3.076 3.485l-.5 4a3.1 3.1 0 0 1-3.076 2.715H9.765a3.1 3.1 0 0 1-3.076-2.716l-.776-6.208-.268-1.34a1.01 1.01 0 0 0-.607-.736H4A1.1 1.1 0 0 1 2.9 3Zm5.346 4.1.626 5.012a.9.9 0 0 0 .893.788h7.47a.9.9 0 0 0 .892-.788l.5-4a.9.9 0 0 0-.893-1.012H8.246ZM6.9 19a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Zm8 0a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
