import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ShoppingTagWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => {
    const ids = useStableUniqueId(1);
    return (
      <IconBase
        ref={ref}
        className={className}
        color={color}
        size={size}
        viewBox="0 0 24 24"
      >
        <g clipPath={`url(#${ids[0]})`}>
          <path
            clipRule="evenodd"
            d="M18.924 3.19a2 2 0 0 1 1.872 1.871l.388 6.205a3 3 0 0 1-.873 2.308l-6.932 6.932a3 3 0 0 1-4.243 0L3.48 14.85a3 3 0 0 1 0-4.242l6.932-6.932a3 3 0 0 1 2.309-.873l6.204.388ZM18.8 5.186l-6.205-.388a1 1 0 0 0-.77.29L6.915 10l7.07 7.071 4.912-4.911a1 1 0 0 0 .29-.77L18.8 5.186Zm-6.229 13.3-7.07-7.072-.608.607a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414 0l.607-.607ZM14.501 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id={`${ids[0]}`}>
            <path d="M0 0h24v24H0z" fill="currentColor" />
          </clipPath>
        </defs>
      </IconBase>
    );
  }
);
