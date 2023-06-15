import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const NightIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11.22 4.038A8.001 8.001 0 0 0 12 20h.997a7.896 7.896 0 0 0 6.409-3.284l-1.263-.238a8.958 8.958 0 0 1-7.058-6.752l-.067-.285a10.093 10.093 0 0 1 .067-4.894l.135-.51ZM2 12C2 6.477 6.477 2 12 2h.23a1.23 1.23 0 0 1 1.19 1.546l-.401 1.513a8.093 8.093 0 0 0-.055 3.924l.068.285a6.96 6.96 0 0 0 5.482 5.245l2.375.448a1.222 1.222 0 0 1 .854 1.774A9.896 9.896 0 0 1 12.997 22H12C6.477 22 2 17.523 2 12Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
