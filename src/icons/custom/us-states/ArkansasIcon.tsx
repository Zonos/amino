import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArkansasIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M5.948 30.21 5.39 16.296 4 8.226v-.278L32.104 6l.835.835v.556L31.548 9.34l-.278.279v.556l3.895-.556.557.278.278.278h-.835v.557l.279.278-1.392.835.278 1.113v.557h-.556l-.278 1.113-.279.834.557 1.114h-.835l-.556 1.113v.835l-.835.556v.835h-.835v2.505l-.835.556v.557l-1.113 1.113.557.556-.278.279-1.114.556.279 1.392-.835 1.113.556.556-.556.557.556.556v1.392l.557.835-.557.556v.835L9.01 34.941v-4.174l-.279-.278H7.34l-.28.278-.556-.278-.556-.279Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".872"
      />
    </StateIconBase>
  ),
);
