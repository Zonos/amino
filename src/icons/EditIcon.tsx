import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const EditIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.515 3.93a2.1 2.1 0 0 1 2.97 0l1.586 1.585a2.1 2.1 0 0 1 0 2.97L9.169 19.386a3.1 3.1 0 0 1-1.44.816l-3.3.825a1.2 1.2 0 0 1-1.456-1.456l.825-3.3a3.1 3.1 0 0 1 .816-1.44L15.515 3.929ZM17 5.555 15.556 7 17 8.444 18.444 7 17 5.556ZM15.444 10 14 8.556 8.556 14 10 15.444 15.444 10Zm-7 7L7 15.556l-.83.83a.9.9 0 0 0-.237.418l-.421 1.684 1.684-.42a.9.9 0 0 0 .418-.238l.83-.83Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
