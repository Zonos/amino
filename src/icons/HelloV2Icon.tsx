import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HelloV2Icon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4.932 8.323a8.1 8.1 0 0 1 3.54-3.54 1.1 1.1 0 0 1 .999 1.96 5.9 5.9 0 0 0-2.578 2.578 1.1 1.1 0 1 1-1.96-.998Zm6.117-5.015c0-1.426 1.724-2.14 2.732-1.132l7.985 7.986a1.6 1.6 0 0 1 0 2.262l-9.192 9.193a1.6 1.6 0 0 1-2.263 0L2.326 13.63c-1.008-1.007-.294-2.73 1.131-2.73H8.2a4.086 4.086 0 0 1 1.05-1.8 4.086 4.086 0 0 1 1.8-1.05V3.308Zm2.2 1.448V8.5c0 .92-.726 1.51-1.416 1.626a1.887 1.887 0 0 0-1.027.53 1.886 1.886 0 0 0-.53 1.028c-.116.69-.706 1.416-1.627 1.416H4.906l6.536 6.537 8.344-8.344-6.537-6.537Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
