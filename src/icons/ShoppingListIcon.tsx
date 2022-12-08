import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ShoppingListIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M14.241 4c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564C20 8.29 20 8.954 20 9.758v6.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H9.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C4 17.71 4 17.046 4 16.242V9.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C8.29 4 8.954 4 9.758 4H10v2h-.2c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C6 8.361 6 8.943 6 9.8v6.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C8.361 20 8.943 20 9.8 20h4.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V9.8c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C15.639 6 15.057 6 14.2 6H14V4h.241Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm0 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 5a3 3 0 0 1 3-3h2a3 3 0 1 1 0 6h-2a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
