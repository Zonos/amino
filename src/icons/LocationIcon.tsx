import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LocationIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="m11.578 19.87.422-.62.423.62a.75.75 0 0 1-.845 0M12 12.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="m11.578 19.87.422-.62.423.62v-.001l.005-.003.016-.011.04-.028.017-.012a24 24 0 0 0 .94-.702 25 25 0 0 0 2.214-1.958c.806-.805 1.631-1.759 2.259-2.788C18.538 13.343 19 12.19 19 11c0-3.929-3.287-7-7-7s-7 3.071-7 7c0 1.19.462 2.343 1.086 3.367.628 1.03 1.453 1.983 2.259 2.788a25.3 25.3 0 0 0 3.154 2.66l.037.026.02.014.016.01.004.004zM6.5 11c0-3.071 2.586-5.5 5.5-5.5s5.5 2.429 5.5 5.5c0 .81-.32 1.688-.867 2.586-.544.893-1.281 1.752-2.038 2.509A24 24 0 0 1 12 18.326a24 24 0 0 1-2.595-2.232c-.757-.756-1.494-1.616-2.038-2.508C6.819 12.688 6.5 11.81 6.5 11"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
