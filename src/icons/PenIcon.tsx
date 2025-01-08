import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PenIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11.215 4.384a1 1 0 0 1 1.57 0l4.692 5.943a1.75 1.75 0 0 1 .246 1.747L16.117 16h.942c.944 0 1.941.666 1.941 1.75v.5c0 1.084-.997 1.75-1.94 1.75H6.94C5.997 20 5 19.334 5 18.25v-.5C5 16.666 5.997 16 6.94 16h.943l-1.606-3.926a1.75 1.75 0 0 1 .246-1.747zm3.8 13.116H6.94a.56.56 0 0 0-.359.117c-.072.06-.081.11-.081.133v.5c0 .022.009.072.081.133a.56.56 0 0 0 .36.117h10.118a.56.56 0 0 0 .36-.117c.072-.06.081-.11.081-.133v-.5c0-.022-.009-.072-.081-.133a.56.56 0 0 0-.36-.117zm1.32-5.994L14.496 16H9.504l-1.839-4.494a.25.25 0 0 1 .035-.25l3.55-4.496v5.49a.75.75 0 0 0 1.5 0V6.76l3.55 4.497a.25.25 0 0 1 .035.25Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
