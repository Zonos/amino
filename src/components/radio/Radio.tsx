import type { ReactNode } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './Radio.module.scss';

export type RadioProps = BaseProps & {
  checked: boolean;
  disabled?: boolean;
  label?: ReactNode;
  onChange: (checked: boolean) => void;
};

export const Radio = ({
  checked,
  className,
  disabled,
  label,
  onChange,
  style,
}: RadioProps) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div
    className={clsx(className, styles.radioContainer, disabled && 'disabled')}
    onClick={() => !disabled && onChange(!checked)}
    style={{
      ...style,
      '--amino-radio-background': checked
        ? theme.primary
        : theme.inputBackground,
      '--amino-radio-border': !checked
        ? `1.5px solid ${theme.gray400}`
        : 'none',
      '--amino-radio-box-shadow': checked ? theme.shadowButtonPrimary : 'none',
      '--amino-radio-container-background': checked ? theme.blue300 : '',
    }}
  >
    <div className={styles.styledRadio}>
      <AnimatePresence>
        {checked && (
          <motion.svg
            key="radio"
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            fill="currentColor"
            initial={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            viewBox="0 0 10 10"
          >
            <circle cx="5" cy="5" r="5" />
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
    {label && (
      <Text className={styles.styledText} type="input-label">
        {label}
      </Text>
    )}
  </div>
);
