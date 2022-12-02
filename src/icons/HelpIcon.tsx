import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HelpIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.133 9.5a1 1 0 1 1-1.731-1A3 3 0 0 1 15 10c0 1.098-.673 1.994-1.5 2.5-.664.406-.25 1.5-1.503 1.5a1 1 0 0 1-.994-1.104c.027-.529.263-.96.52-1.272.271-.33.628-.6.9-.762 1.517-.902-.333-2.747-1.29-1.361Zm.864 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
