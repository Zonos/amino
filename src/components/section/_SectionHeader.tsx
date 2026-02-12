import type { ReactNode } from 'react';

import { type FontType, Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

type Props = BaseProps & { children: ReactNode; type: FontType };

export const SectionHeader = ({ children, className, style, type }: Props) => (
  <Text
    className={cn('flex-auto flex-col flex', className)}
    style={style}
    type={type}
  >
    {children}
  </Text>
);
