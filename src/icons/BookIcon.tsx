import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4.962a17.63 17.63 0 0 1 7.25-.397l1.206.186A3 3 0 0 1 23 7.716v9.124a3 3 0 0 1-3.23 2.991l-2.158-.166a19.005 19.005 0 0 0-4.144.135L12 20.01l-1.468-.21a19.005 19.005 0 0 0-4.144-.135l-2.158.166A3 3 0 0 1 1 16.841V7.715A3 3 0 0 1 3.544 4.75l1.206-.186a17.63 17.63 0 0 1 7.25.397Zm-1 1.811a15.631 15.631 0 0 0-5.946-.231l-1.206.185A1 1 0 0 0 3 7.716v9.124a1 1 0 0 0 1.077.997l2.157-.166a21 21 0 0 1 4.58.15l.186.026V6.773Zm2 11.074.185-.027a21 21 0 0 1 4.58-.149l2.158.166A1 1 0 0 0 21 16.84V7.716a1 1 0 0 0-.848-.989l-1.206-.185c-1.981-.305-4-.226-5.946.231v11.074Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
