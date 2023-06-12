import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DashboardWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="m13.881 10.119-1.637.49a.85.85 0 0 1-.488 0l-1.637-.49.49 1.637a.85.85 0 0 1 0 .488l-.49 1.637 1.637-.49a.85.85 0 0 1 .488 0l1.637.49-.49-1.637a.85.85 0 0 1 0-.488l.49-1.637Zm.726-1.784a.85.85 0 0 1 1.058 1.058L14.883 12l.782 2.607a.85.85 0 0 1-1.058 1.058L12 14.883l-2.607.782a.85.85 0 0 1-1.058-1.058L9.117 12l-.782-2.607a.85.85 0 0 1 1.058-1.058L12 9.117l2.607-.782Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M2.309 4.177c-.343-1.144.724-2.211 1.868-1.868L12 4.656l7.823-2.347c1.144-.343 2.211.724 1.868 1.868L19.344 12l2.347 7.823c.343 1.144-.724 2.211-1.868 1.868L12 19.344l-7.823 2.347c-1.144.343-2.211-.724-1.868-1.868L4.656 12 2.309 4.177Zm2.182.314 2.08 6.934a2 2 0 0 1 0 1.15l-2.08 6.934 6.934-2.08a2.001 2.001 0 0 1 1.15 0l6.934 2.08-2.08-6.934a2.001 2.001 0 0 1 0-1.15l2.08-6.934-6.934 2.08a2 2 0 0 1-1.15 0l-6.934-2.08Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
