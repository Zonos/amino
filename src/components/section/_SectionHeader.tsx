import type { ReactNode } from 'react';

import { type FontType, Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

type Props = BaseProps & { children: ReactNode; type: FontType };

export const SectionHeader = ({ children, className, style, type }: Props) => (
  <Text
    className={cn('flex flex-auto flex-col', className)}
    style={style}
    type={type}
  >
    {children}
  </Text>
);
