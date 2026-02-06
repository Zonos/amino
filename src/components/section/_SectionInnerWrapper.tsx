import type { ReactNode } from 'react';

import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

type Props = BaseProps & { children: ReactNode };

export const SectionInnerWrapper = ({ children, className, style }: Props) => (
  <header
    className={cn('flex justify-between mb-6 items-start', className)}
    style={style}
  >
    {children}
  </header>
);
