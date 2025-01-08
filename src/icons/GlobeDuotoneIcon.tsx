import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const GlobeDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inlineBlock, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    inlineBlock={inlineBlock}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M8.018 11.25H5.5a.75.75 0 0 0 0 1.5h2.518c.098 2.02.585 3.69 1.227 4.912.359.682.777 1.243 1.22 1.644.428.387.96.694 1.535.694s1.107-.306 1.535-.694c.444-.4.861-.962 1.22-1.645.642-1.22 1.13-2.891 1.227-4.911H18.5a.75.75 0 0 0 0-1.5h-2.518c-.098-2.02-.585-3.69-1.227-4.912-.359-.682-.777-1.243-1.22-1.644C13.107 4.307 12.575 4 12 4s-1.107.307-1.535.694c-.444.4-.861.962-1.22 1.644-.642 1.222-1.13 2.892-1.227 4.912m1.502 0c.096-1.789.53-3.218 1.053-4.213.298-.568.615-.975.898-1.23.298-.27.483-.307.529-.307s.231.037.53.306c.282.256.599.663.897 1.23.524.996.957 2.425 1.053 4.214zm4.96 1.5c-.096 1.789-.53 3.218-1.053 4.213-.298.568-.615.975-.898 1.23-.298.27-.483.307-.529.307s-.231-.037-.53-.306c-.282-.256-.599-.663-.897-1.23-.524-.996-.957-2.425-1.053-4.214z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
