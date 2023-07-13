import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RateIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M20.56 9.219a9 9 0 0 1 0 5.562 1 1 0 0 1-1.903-.618 7 7 0 0 0 0-4.326 1 1 0 1 1 1.902-.618ZM17.585 5H6.143v14h11.443l-3.515-3.515c-.607-.607-.529-1.49-.122-2.036.302-.405.48-.905.48-1.449s-.178-1.044-.48-1.449c-.407-.546-.485-1.429.122-2.036L17.586 5Zm1.207-2c1.336 0 2.006 1.616 1.06 2.56l-4.095 4.096c.425.68.67 1.484.67 2.344a4.41 4.41 0 0 1-.67 2.344l4.096 4.095c.945.945.275 2.561-1.061 2.561H5.643a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h13.15Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
