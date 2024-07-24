import type { ReactNode } from 'react';

import { Flex } from 'src/components/flex/Flex';

import styles from './ButtonGroup.module.scss';

type ButtonGroupProps = {
  /**
   * @note The children of the ButtonGroup component must be Amino Button components
   */
  children: ReactNode;
};

export const ButtonGroup = ({ children }: ButtonGroupProps) => (
  <Flex className={styles.buttonGroup} gap={0}>
    {children}
  </Flex>
);
