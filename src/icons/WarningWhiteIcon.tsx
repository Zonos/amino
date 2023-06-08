import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const WarningWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.377 4.661c1.143-2.057 4.102-2.057 5.245 0l6.601 11.882c1.111 2-.335 4.457-2.622 4.457H5.399c-2.288 0-3.734-2.457-2.623-4.457L9.377 4.661Zm3.497.972a1 1 0 0 0-1.748 0L4.525 17.514A1 1 0 0 0 5.399 19H18.6a1 1 0 0 0 .874-1.486l-6.6-11.881ZM12 8a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1Zm0 6.99a1 1 0 0 1 1 1V16a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
