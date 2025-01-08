import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BankIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.57 3.903a1.75 1.75 0 0 0-1.14 0L5.18 6.06A1.75 1.75 0 0 0 4 7.713V9.5c0 .966.784 1.75 1.75 1.75V15A1.75 1.75 0 0 0 4 16.75v1.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 18.25v-1.5A1.75 1.75 0 0 0 18.25 15v-3.75A1.75 1.75 0 0 0 20 9.5V7.713a1.75 1.75 0 0 0-1.18-1.654zm-.652 1.418a.25.25 0 0 1 .164 0l6.25 2.156c.1.034.168.13.168.236V9.5a.25.25 0 0 1-.25.25H5.75a.25.25 0 0 1-.25-.25V7.713a.25.25 0 0 1 .168-.236zm4.832 5.929h-2V15h2zm-3.5 0h-2V15h2zm-3.5 0h-2.5V15h2.5zm-4.25 5.5a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25H5.75a.25.25 0 0 1-.25-.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
