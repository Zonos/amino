import type { ReactNode } from 'react';

import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './_SectionSubheader.module.scss';

type Props = BaseProps & { children: ReactNode };
export const SectionSubheader = ({ children, className, style }: Props) => (
  <Text
    className={clsx(className, styles.styledSectionSubheader)}
    color="gray800"
    style={style}
    type="body"
  >
    {children}
  </Text>
);
