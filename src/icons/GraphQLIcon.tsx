import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const GraphQLIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10 3a2 2 0 1 1 3.999.07l5.062 3.164A2 2 0 0 1 21 9.733v4.535A2 2 0 0 1 19.999 18c-.34 0-.66-.085-.94-.234L14 20.93V21a2 2 0 1 1-3.999-.07L4.94 17.766A2 2 0 0 1 3 14.267V9.733a2 2 0 0 1 1.94-3.498l5.062-3.164L10 3ZM8.913 6.109 5.999 7.93 6 8a2 2 0 0 1-1 1.732v2.735l3.913-6.358ZM7.487 17l3.574 2.234a1.992 1.992 0 0 1 1.878 0L16.513 17H7.487ZM19 12.467V9.732a2 2 0 0 1-.999-1.802l-2.914-1.821L19 12.467Zm-7.056-7.468a2.047 2.047 0 0 0 .112 0L18.21 15H5.79l6.154-10Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);