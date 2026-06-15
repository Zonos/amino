import type { ReactNode } from 'react';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

type Props = BaseProps & { children: ReactNode };
export const SectionSubheader = ({ children, className, style }: Props) => (
  <Text
    className={cn('mt-2', className)}
    color="gray800"
    style={style}
    type="body"
  >
    {children}
  </Text>
);
