import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const GridSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.568 3c-.252 0-.498 0-.706.017a2.022 2.022 0 0 0-.77.201 2 2 0 0 0-.874.874 2.02 2.02 0 0 0-.201.77C13 5.07 13 5.316 13 5.568v2.864c0 .252 0 .498.017.706.019.229.063.499.201.77a2 2 0 0 0 .874.874c.271.138.541.182.77.201.208.017.454.017.706.017h2.864c.252 0 .498 0 .706-.017a2.03 2.03 0 0 0 .77-.201 2 2 0 0 0 .874-.874 2.03 2.03 0 0 0 .201-.77C21 8.93 21 8.684 21 8.432V5.568c0-.252 0-.498-.017-.706a2.022 2.022 0 0 0-.201-.77 2 2 0 0 0-.874-.874 2.022 2.022 0 0 0-.77-.201C18.93 3 18.684 3 18.432 3h-2.864Zm-10 10c-.252 0-.498 0-.706.017a2.02 2.02 0 0 0-.77.201 2 2 0 0 0-.874.874 2.022 2.022 0 0 0-.201.77C3 15.07 3 15.316 3 15.568v2.864c0 .252 0 .498.017.706.019.229.063.499.201.77a2 2 0 0 0 .874.874c.271.138.541.182.77.201.208.017.454.017.706.017h2.864c.252 0 .498 0 .706-.017a2.03 2.03 0 0 0 .77-.201 2 2 0 0 0 .874-.874 2.03 2.03 0 0 0 .201-.77c.017-.208.017-.454.017-.706v-2.864c0-.252 0-.498-.017-.706a2.022 2.022 0 0 0-.201-.77 2 2 0 0 0-.874-.874 2.02 2.02 0 0 0-.77-.201C8.93 13 8.684 13 8.432 13H5.568Zm10 0c-.252 0-.498 0-.706.017a2.02 2.02 0 0 0-.77.201 2 2 0 0 0-.874.874 2.02 2.02 0 0 0-.201.77c-.017.208-.017.454-.017.706v2.864c0 .252 0 .498.017.706.019.229.063.499.201.77a2 2 0 0 0 .874.874c.271.138.541.182.77.201.208.017.454.017.706.017h2.864c.252 0 .498 0 .706-.017a2.03 2.03 0 0 0 .77-.201 2 2 0 0 0 .874-.874 2.03 2.03 0 0 0 .201-.77c.017-.208.017-.454.017-.706v-2.864c0-.252 0-.498-.017-.706a2.022 2.022 0 0 0-.201-.77 2 2 0 0 0-.874-.874 2.02 2.02 0 0 0-.77-.201C18.93 13 18.684 13 18.432 13h-2.864Zm-10-10c-.252 0-.498 0-.706.017a2.022 2.022 0 0 0-.77.201 2 2 0 0 0-.874.874 2.022 2.022 0 0 0-.201.77C3 5.07 3 5.316 3 5.568v2.864c0 .252 0 .498.017.706.019.229.063.499.201.77a2 2 0 0 0 .874.874c.271.138.541.182.77.201.208.017.454.017.706.017h2.864c.252 0 .498 0 .706-.017a2.03 2.03 0 0 0 .77-.201 2 2 0 0 0 .874-.874 2.03 2.03 0 0 0 .201-.77C11 8.93 11 8.684 11 8.432V5.568c0-.252 0-.498-.017-.706a2.022 2.022 0 0 0-.201-.77 2 2 0 0 0-.874-.874 2.022 2.022 0 0 0-.77-.201C8.93 3 8.684 3 8.432 3H5.568Z"
      />
    </IconBase>
  )
);
