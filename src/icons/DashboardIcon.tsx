import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DashboardIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="m13.732 10.268-1.459.438a.949.949 0 0 1-.546 0l-1.46-.438.439 1.459a.949.949 0 0 1 0 .546l-.438 1.46 1.459-.439a.95.95 0 0 1 .546 0l1.46.438-.439-1.459a.95.95 0 0 1 0-.546l.438-1.46Zm.846-2.029a.95.95 0 0 1 1.183 1.183L14.987 12l.774 2.578a.95.95 0 0 1-1.183 1.183L12 14.987l-2.578.774a.95.95 0 0 1-1.183-1.183L9.013 12l-.774-2.578A.95.95 0 0 1 9.422 8.24L12 9.013l2.578-.774Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.213 4.205c-.366-1.22.772-2.358 1.992-1.992L12 4.552l7.794-2.339c1.221-.366 2.359.772 1.993 1.992L19.448 12l2.339 7.794c.366 1.221-.772 2.359-1.992 1.993L12 19.448l-7.795 2.339c-1.22.366-2.358-.772-1.992-1.992L4.552 12 2.213 4.205Zm2.428.436 2.026 6.756a2.1 2.1 0 0 1 0 1.206L4.641 19.36l6.756-2.026a2.1 2.1 0 0 1 1.206 0l6.756 2.026-2.026-6.756a2.1 2.1 0 0 1 0-1.206l2.026-6.756-6.756 2.026a2.1 2.1 0 0 1-1.206 0L4.64 4.641Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);