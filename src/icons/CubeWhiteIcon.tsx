import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CubeWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.447 4.342a1 1 0 0 0-.894 0L6.236 7 12 9.882 17.764 7l-5.317-2.658ZM19 8.618l-6 3v7.764l5.447-2.724a1 1 0 0 0 .553-.894V8.618Zm-8 10.764v-7.764l-6-3v7.146a1 1 0 0 0 .553.894L11 19.382Zm-.342-16.83a3 3 0 0 1 2.684 0l6 3A3 3 0 0 1 21 8.237v7.528a3 3 0 0 1-1.658 2.683l-6 3a3 3 0 0 1-2.684 0l-6-3A3 3 0 0 1 3 15.764V8.236a3 3 0 0 1 1.658-2.683l6-3Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
