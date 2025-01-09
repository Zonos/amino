import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ZonosLogoIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 2.707c-5.547 0-10.043 4.496-10.043 10.043 0 .948.13 1.865.376 2.733a.1.1 0 0 0 .127.067l1.322-.436a.25.25 0 0 1 .314.155l.074.212a8.294 8.294 0 0 0 11.885 4.501 8.29 8.29 0 0 0 4.235-7.232 8.26 8.26 0 0 0-2.382-5.816.1.1 0 0 0-.145.005l-.916 1.038a.25.25 0 0 1-.353.022l-.17-.151a6.536 6.536 0 1 0-7.905 10.37.1.1 0 0 0 .14-.036l.654-1.215a.25.25 0 0 1 .337-.102l.201.107a4.783 4.783 0 1 0 2.837-8.969.1.1 0 0 0-.11.098v.603c0 .05.038.093.088.1a3.986 3.986 0 1 1-1.133 0 .1.1 0 0 0 .089-.1V7.261a.25.25 0 0 1 .25-.25H12a5.74 5.74 0 1 1-2.185 11.047.1.1 0 0 0-.128.046l-.679 1.262a.25.25 0 0 1-.338.102l-.2-.108a7.493 7.493 0 1 1 8.044-12.592.1.1 0 0 0 .136-.013l.942-1.069a.25.25 0 0 1 .353-.022l.171.151a9.23 9.23 0 0 1 3.13 6.935A9.24 9.24 0 0 1 17 20.53a.1.1 0 0 0-.035.13l.276.533a.1.1 0 0 0 .142.039 10.04 10.04 0 0 0 4.662-8.482c0-5.547-4.497-10.043-10.044-10.043Zm3.998 18.383a.1.1 0 0 1 .133.044l.65 1.251a.25.25 0 0 0 .344.104l.205-.114A11 11 0 0 0 23 12.75c0-6.075-4.925-11-11-11s-11 4.925-11 11a11 11 0 0 0 .6 3.595l.074.213a.25.25 0 0 0 .315.155l1.356-.448a.1.1 0 0 1 .124.058A9.25 9.25 0 0 0 12 21.996a9.2 9.2 0 0 0 3.998-.906M12 9.72a3.029 3.029 0 1 0 0 6.058 3.029 3.029 0 0 0 0-6.058"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
