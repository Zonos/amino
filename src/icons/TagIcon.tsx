import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const TagIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, secondaryColor, size }, ref) => {
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
          d="M18.93 3.09a2.1 2.1 0 0 1 1.966 1.965l.387 6.204a3.1 3.1 0 0 1-.902 2.386l-6.931 6.932a3.1 3.1 0 0 1-4.385 0L3.41 14.92a3.1 3.1 0 0 1 0-4.384l6.932-6.932a3.1 3.1 0 0 1 2.385-.902l6.205.388Zm-.225 2.19-6.116-.382a.9.9 0 0 0-.693.262l-6.932 6.932a.9.9 0 0 0 0 1.272l5.657 5.657a.9.9 0 0 0 1.273 0l6.932-6.932a.9.9 0 0 0 .262-.692l-.383-6.117ZM14.5 7.9a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path
            d="M0 0h24v24H0z"
            data-is-secondary-color="true"
            fill={secondaryColor ? `${theme[secondaryColor]}` : '#fff'}
          />
        </clipPath>
      </defs>
    </IconBase>
  );
});
