import type { ReactNode } from 'react';

import clsx from 'clsx';

import { type FontType, Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './_SectionHeader.module.scss';

type Props = BaseProps & { children: ReactNode; type: FontType };

export const SectionHeader = ({ children, className, style, type }: Props) => (
  <Text
    className={clsx(className, styles.styledSectionHeader)}
    style={style}
    type={type}
  >
    {children}
  </Text>
);
