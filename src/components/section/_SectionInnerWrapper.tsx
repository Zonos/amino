import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './_SectionInnerWrapper.module.scss';

type Props = BaseProps & { children: ReactNode };

export const SectionInnerWrapper = ({ children, className, style }: Props) => (
  <header
    className={clsx(className, styles.styledSectionInnerWrapper)}
    style={style}
  >
    {children}
  </header>
);
