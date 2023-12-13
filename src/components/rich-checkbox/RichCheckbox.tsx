import type { ReactNode } from 'react';

import clsx from 'clsx';

import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';

import styles from './RichCheckbox.module.scss';

type RichCheckboxItemType = {
  checked: boolean;
  icon?: ReactNode;
  label: ReactNode;
  subtitle?: string;
  value: string;
};

export type RichCheckboxProps = {
  items: RichCheckboxItemType[];
  onClick: (newVal: string) => void;
};

export const RichCheckbox = ({ items, onClick }: RichCheckboxProps) => (
  <VStack className={styles.styledVStack} spacing={16}>
    {items.map(item => {
      const { checked, icon, label, subtitle, value } = item;
      return (
        <button
          key={value}
          className={styles.styledRichCheckbox}
          data-state={checked ? 'checked' : ''}
          onClick={e => onClick(e.currentTarget.value)}
          type="button"
          value={value}
        >
          <div
            className={clsx(
              styles.styledItemContentDiv,
              !!icon && styles.hasIcon,
            )}
          >
            {icon && icon}
            <VStack spacing={0}>
              <Text className={styles.label} color="gray1200" type="label">
                {label}
              </Text>
              {subtitle && (
                <Text className={styles.subtitle} color="gray700">
                  {subtitle}
                </Text>
              )}
            </VStack>
          </div>
          {checked && (
            <div className={styles.styledIcon}>
              <CheckmarkIcon />
            </div>
          )}
        </button>
      );
    })}
  </VStack>
);
