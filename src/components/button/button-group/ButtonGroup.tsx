import type { ReactNode } from 'react';

import { Flex } from 'src/components/flex/Flex';

import styles from './ButtonGroup.module.scss';

type ButtonGroupProps = {
  children: ReactNode;
};

export const ButtonGroup = ({ children }: ButtonGroupProps) => (
  <Flex className={styles.buttonGroup} gap={0}>
    {children}
  </Flex>
);
