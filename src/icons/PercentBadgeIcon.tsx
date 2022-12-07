import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PercentBadgeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="m13.586 5.401-.79-1.04a1 1 0 0 0-1.593 0l-.788 1.04a2.1 2.1 0 0 1-1.96.812l-1.293-.178a1 1 0 0 0-1.127 1.127l.178 1.293a2.1 2.1 0 0 1-.812 1.96l-1.04.788a1 1 0 0 0 0 1.594l1.04.789a2.1 2.1 0 0 1 .812 1.959l-.178 1.293a1 1 0 0 0 1.127 1.127l1.293-.178a2.1 2.1 0 0 1 1.96.812l.788 1.04a1 1 0 0 0 1.594 0l.789-1.04a2.1 2.1 0 0 1 1.959-.812l1.293.178a1 1 0 0 0 1.127-1.127l-.178-1.293a2.1 2.1 0 0 1 .812-1.96l1.04-.788a1 1 0 0 0 0-1.594l-1.04-.788a2.1 2.1 0 0 1-.812-1.96l.178-1.293a1 1 0 0 0-1.127-1.127l-1.293.178a2.1 2.1 0 0 1-1.96-.812Zm.805-2.248a3 3 0 0 0-4.781 0l-.79 1.04a.1.1 0 0 1-.092.038l-1.294-.177a3 3 0 0 0-3.38 3.38l.178 1.294a.1.1 0 0 1-.04.093l-1.04.789a3 3 0 0 0 0 4.78l1.04.79a.1.1 0 0 1 .04.093l-.178 1.293a3 3 0 0 0 3.38 3.38l1.294-.177a.1.1 0 0 1 .093.038l.789 1.04a3 3 0 0 0 4.78 0l.79-1.04a.1.1 0 0 1 .093-.038l1.293.177a3 3 0 0 0 3.38-3.38l-.177-1.293a.1.1 0 0 1 .038-.094l1.04-.789a3 3 0 0 0 0-4.78l-1.04-.79a.1.1 0 0 1-.038-.092l.178-1.294a3 3 0 0 0-3.381-3.38l-1.293.177a.1.1 0 0 1-.094-.038l-.788-1.04Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4.707-.293-4 4a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414ZM13 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
