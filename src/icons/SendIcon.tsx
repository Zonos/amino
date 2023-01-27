import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const SendIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M1.9 7A3.1 3.1 0 0 1 5 3.9h14A3.1 3.1 0 0 1 22.1 7v6a1.1 1.1 0 0 1-2.2 0V7a.9.9 0 0 0-.9-.9H5a.9.9 0 0 0-.9.9v10a.9.9 0 0 0 .9.9h6a1.1 1.1 0 0 1 0 2.2H5A3.1 3.1 0 0 1 1.9 17V7Zm4.282 1.264a1.1 1.1 0 0 1 1.554-.082L12 12.02l4.264-3.838a1.1 1.1 0 0 1 1.472 1.636l-4.666 4.199a1.6 1.6 0 0 1-2.14 0l-4.666-4.2a1.1 1.1 0 0 1-.082-1.553ZM18.344 17.9l-.122-.122a1.1 1.1 0 1 1 1.556-1.556l1.646 1.646a1.6 1.6 0 0 1 0 2.263l-1.646 1.647a1.1 1.1 0 1 1-1.556-1.556l.122-.122H15a1.1 1.1 0 0 1 0-2.2h3.344Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
