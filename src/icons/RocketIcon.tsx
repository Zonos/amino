import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RocketIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M19.508 4.78a9.764 9.764 0 0 0-6.905 2.86l-4.525 4.525 4.101 4.102 4.526-4.526a9.764 9.764 0 0 0 2.86-6.904V4.78h-.058Zm-5.773 13.042 1.273 1.273 1.697-1.698-.159-2.386-2.811 2.811Zm4.877-4.892a11.964 11.964 0 0 0 3.152-8.093v-.548a1.71 1.71 0 0 0-1.709-1.709h-.547c-3.004 0-5.89 1.13-8.093 3.152l-4.367-.29a2.1 2.1 0 0 0-1.624.61l-1.8 1.8a2.1 2.1 0 0 0 0 2.97l9.899 9.9a2.1 2.1 0 0 0 2.97 0l1.8-1.801a2.1 2.1 0 0 0 .61-1.625l-.29-4.366ZM9.334 7.798 6.947 7.64 5.25 9.337l1.273 1.273 2.812-2.812Zm-4.155 5.71a1.1 1.1 0 0 1 0 1.557l-1.061 1.06a1.1 1.1 0 0 1-1.556-1.556l1.061-1.06a1.1 1.1 0 0 1 1.556 0ZM7.3 17.045a1.1 1.1 0 0 1 0 1.556l-1.414 1.414A1.1 1.1 0 1 1 4.33 18.46l1.414-1.415a1.1 1.1 0 0 1 1.556 0Zm3.536 2.122a1.1 1.1 0 0 1 0 1.555l-1.061 1.061a1.1 1.1 0 1 1-1.556-1.556l1.06-1.06a1.1 1.1 0 0 1 1.557 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
