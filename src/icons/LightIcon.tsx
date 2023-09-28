import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LightIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4c-4.005 0-6 3.183-6 6 0 2.235.856 3.533 1.699 4.446.193.21.385.398.553.563l.023.023c.18.176.323.319.443.455.241.275.282.413.282.513v2.25c0 .968.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 15 18.25V16c0-.1.04-.238.282-.513.12-.136.264-.279.443-.455l.024-.023c.167-.165.36-.354.552-.563C17.144 13.533 18 12.235 18 10c0-2.817-1.995-6-6-6Zm-4.5 6c0-2.183 1.505-4.5 4.5-4.5s4.5 2.317 4.5 4.5c0 1.765-.644 2.717-1.301 3.429-.168.181-.337.348-.51.517l-.016.016c-.172.17-.356.351-.518.535-.32.366-.655.853-.655 1.503h-3c0-.65-.334-1.137-.655-1.503a10.365 10.365 0 0 0-.518-.535l-.017-.016c-.172-.17-.341-.335-.509-.517C8.144 12.717 7.5 11.765 7.5 10Zm3 7.5v.75c0 .138.111.25.25.25h2.5a.25.25 0 0 0 .25-.25v-.75h-3Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
