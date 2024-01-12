import type { ReactNode } from 'react';

import styles from './BaseWrapper.module.scss';

export const BaseWrapper = ({ children }: { children: ReactNode }) => (
  <div className={styles.baseWrapper}>{children}</div>
);
