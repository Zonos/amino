import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const GlobeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8.53-6.194c.299-.269.484-.306.53-.306s.231.037.53.306c.282.256.599.663.897 1.23.524.996.957 2.425 1.053 4.214H9.52c.096-1.789.53-3.218 1.053-4.213.298-.568.615-.975.898-1.23ZM8.019 11.25c.098-2.02.585-3.69 1.227-4.912q.082-.155.168-.303a6.5 6.5 0 0 0-3.87 5.215zm-2.475 1.5h2.475c.098 2.02.585 3.69 1.227 4.912q.082.156.168.303a6.5 6.5 0 0 1-3.87-5.215m3.977 0h4.96c-.096 1.789-.53 3.218-1.053 4.213-.298.568-.615.975-.898 1.23-.298.27-.483.307-.529.307s-.231-.037-.53-.306c-.282-.256-.599-.663-.897-1.23-.524-.996-.957-2.425-1.053-4.214m6.462 0c-.098 2.02-.585 3.69-1.227 4.912q-.082.156-.168.303a6.5 6.5 0 0 0 3.87-5.215zm2.475-1.5a6.5 6.5 0 0 0-3.87-5.215q.085.148.168.303c.642 1.222 1.13 2.892 1.227 4.912z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
