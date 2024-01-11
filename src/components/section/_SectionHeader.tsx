import type { ReactNode } from 'react';

import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './_SectionHeader.module.scss';

type Props = BaseProps & { children: ReactNode };

export const SectionHeader = ({ children, className, style }: Props) => (
  <Text
    className={clsx(className, styles.styledSectionHeader)}
    style={style}
    type="title"
  >
    {children}
  </Text>
);
