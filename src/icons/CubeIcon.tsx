import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CubeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.402 4.431a.9.9 0 0 0-.805 0L6.46 7 12 9.77 17.54 7l-5.138-2.569ZM18.9 8.78l-5.8 2.9v7.54l5.302-2.651a.9.9 0 0 0 .498-.805V8.78Zm-8 10.44v-7.54l-5.8-2.9v6.984a.9.9 0 0 0 .497.805L10.9 19.22Zm-.287-16.757a3.1 3.1 0 0 1 2.773 0l6 3A3.1 3.1 0 0 1 21.1 8.236v7.528a3.1 3.1 0 0 1-1.714 2.773l-6 3a3.1 3.1 0 0 1-2.772 0l-6-3A3.1 3.1 0 0 1 2.9 15.764V8.236a3.1 3.1 0 0 1 1.714-2.773l6-3Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
