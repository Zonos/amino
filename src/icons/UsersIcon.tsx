import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const UsersIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M9.429 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0 3.75c-1.893 0-3.557 1.508-3.926 3.633v.027a.1.1 0 0 0 .02.03c.028.03.083.06.156.06h7.5c.073 0 .127-.03.155-.06a.1.1 0 0 0 .02-.03v-.027c-.368-2.125-2.033-3.633-3.925-3.633m-5.404 3.376c.473-2.722 2.665-4.876 5.404-4.876s4.93 2.154 5.403 4.876c.19 1.092-.73 1.874-1.653 1.874h-7.5c-.924 0-1.843-.782-1.654-1.874"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M13.679 14a.75.75 0 0 1 .75-.75c1.7 0 3.013.509 3.936 1.44.91.917 1.358 2.16 1.505 3.478.118 1.052-.753 1.832-1.69 1.832h-1.813a.75.75 0 0 1 0-1.5h1.813a.23.23 0 0 0 .164-.065.12.12 0 0 0 .037-.1c-.124-1.105-.482-1.987-1.08-2.59-.584-.589-1.483-.995-2.871-.995a.75.75 0 0 1-.75-.75m-.001-9.25a.75.75 0 0 1 .75-.75c1.049 0 1.983.322 2.66.956.683.64 1.04 1.534 1.04 2.544s-.357 1.905-1.04 2.544c-.677.634-1.611.956-2.66.956a.75.75 0 0 1 0-1.5c.745 0 1.287-.225 1.635-.551.344-.322.565-.802.565-1.449s-.221-1.127-.565-1.449c-.348-.326-.89-.551-1.635-.551a.75.75 0 0 1-.75-.75"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
