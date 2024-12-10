import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const AlabamaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="m11 5.612.226.46.453.23v19.799l1.358 9.208h.906l.453.46h.226v-1.38l.226-1.382.906.69-.226.922.452.46.906.921.68-.23-.227-.46h.453l.679-.922-.227-.46v-.92l-.679-.231-.679-.69.226-1.152 14.036-1.611-.226-.69-.68-.692.227-2.302-.905-1.15v-1.152l.452-.46v-1.151l.68-.691-.68-.23v-.921l-.679-.921-.905-2.072L24.357 4 11 5.612Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
