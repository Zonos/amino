import type { ReactNode } from 'react';

import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

type Props = BaseProps & { children: ReactNode };

export const SectionInnerWrapper = ({ children, className, style }: Props) => (
  <header
    className={cn('mb-6 flex items-start justify-between', className)}
    style={style}
  >
    {children}
  </header>
);
