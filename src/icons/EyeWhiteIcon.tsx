import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const EyeWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4.562 10.582C4.138 11.278 4 11.774 4 12c0 .225.138.72.562 1.418.403.664 1 1.405 1.751 2.096C7.83 16.91 9.848 18 12 18s4.171-1.09 5.686-2.486c.752-.691 1.349-1.432 1.752-2.095.424-.698.562-1.194.562-1.419 0-.225-.138-.72-.562-1.418-.403-.664-1-1.405-1.752-2.096C16.171 7.09 14.152 6 12 6S7.829 7.09 6.313 8.486c-.75.691-1.348 1.432-1.751 2.095Zm.397-3.568C6.7 5.41 9.18 4 12 4s5.3 1.41 7.041 3.014c.878.809 1.599 1.693 2.107 2.53.487.802.852 1.68.852 2.456 0 .775-.365 1.654-.852 2.457-.508.836-1.229 1.72-2.107 2.529C17.3 18.59 14.82 20 12 20s-5.3-1.41-7.041-3.014c-.878-.809-1.599-1.693-2.106-2.53C2.365 13.655 2 12.777 2 12c0-.775.365-1.654.853-2.457.507-.836 1.228-1.72 2.106-2.529Zm4.334 2.279a3.828 3.828 0 1 1 5.414 5.414 3.828 3.828 0 0 1-5.414-5.414Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);