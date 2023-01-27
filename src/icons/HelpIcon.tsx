import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HelpIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4.1a7.9 7.9 0 1 0 0 15.8 7.9 7.9 0 0 0 0-15.8ZM1.9 12C1.9 6.422 6.422 1.9 12 1.9c5.578 0 10.1 4.522 10.1 10.1 0 5.578-4.522 10.1-10.1 10.1-5.578 0-10.1-4.522-10.1-10.1Zm10.35-2.9a.634.634 0 0 0-.602.434l-.104.314a1.1 1.1 0 0 1-2.088-.696l.105-.314a2.834 2.834 0 0 1 5.378 0l.023.07c.091.274.138.561.138.85v.211a2.42 2.42 0 0 1-1.833 2.348.22.22 0 0 0-.167.214V13a1.1 1.1 0 0 1-2.2 0v-.47a2.42 2.42 0 0 1 1.833-2.347.22.22 0 0 0 .167-.214v-.21a.49.49 0 0 0-.025-.156l-.023-.07a.634.634 0 0 0-.602-.433ZM12 14.9a1.1 1.1 0 0 1 1.1 1.1v.01a1.1 1.1 0 0 1-2.2 0V16a1.1 1.1 0 0 1 1.1-1.1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
