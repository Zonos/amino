import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RateIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M20.655 9.188a9.1 9.1 0 0 1 0 5.624 1.1 1.1 0 1 1-2.093-.68 6.9 6.9 0 0 0 0-4.264 1.1 1.1 0 0 1 2.093-.68ZM17.345 5.1H6.242v13.8h11.101L14 15.556c-.648-.649-.562-1.588-.13-2.167a2.32 2.32 0 0 0 .459-1.39c0-.521-.17-1-.46-1.388-.431-.58-.517-1.519.131-2.167L17.345 5.1Zm1.448-2.2c1.425 0 2.14 1.723 1.131 2.731l-4.04 4.04A4.5 4.5 0 0 1 16.529 12c0 .85-.236 1.648-.644 2.329l4.04 4.04c1.007 1.008.293 2.73-1.132 2.73H5.643a1.6 1.6 0 0 1-1.6-1.6v-15a1.6 1.6 0 0 1 1.6-1.6h13.15Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);