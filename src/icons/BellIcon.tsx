import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BellIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 5.5a5.25 5.25 0 0 0-5.25 5.25v.933c0 .361-.112.714-.32 1.009l-.591.837a1.25 1.25 0 0 0 1.02 1.971H17.14a1.25 1.25 0 0 0 1.021-1.97l-.59-.838a1.75 1.75 0 0 1-.321-1.01v-.932c0-2.9-2.35-5.25-5.25-5.25m-6.75 5.25a6.75 6.75 0 0 1 13.5 0v.933a.25.25 0 0 0 .046.144l.59.837C20.674 14.486 19.37 17 17.14 17h-1.39v.25A2.75 2.75 0 0 1 13 20h-2a2.75 2.75 0 0 1-2.75-2.75V17H6.86c-2.23 0-3.533-2.514-2.247-4.336l.591-.837a.25.25 0 0 0 .046-.144zM9.75 17v.25c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25V17z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
