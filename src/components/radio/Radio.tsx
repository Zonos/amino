import { type ReactNode, useId } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import globalStyles from 'src/styles/global.module.scss';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './Radio.module.scss';

export type RadioProps = BaseProps & {
  checked: boolean;
  disabled?: boolean;
  label?: ReactNode;
  onChange: (checked: boolean) => void;
  value: string;
};

export const Radio = ({
  checked,
  className,
  disabled,
  label,
  onChange,
  style,
  value,
}: RadioProps) => {
  const id = useId();

  return (
    <label
      className={clsx(
        className,
        styles.radioContainer,
        globalStyles.focusableLabel,
        disabled && 'disabled',
      )}
      htmlFor={id}
      style={{
        ...style,
        '--amino-radio-background': checked
          ? theme.primary
          : theme.inputBackground,
        '--amino-radio-border': !checked
          ? `1.5px solid ${theme.gray400}`
          : 'none',
        '--amino-radio-box-shadow': checked
          ? theme.shadowButtonPrimary
          : 'none',
        '--amino-radio-container-background': checked ? theme.blue300 : '',
      }}
    >
      <input
        checked={checked}
        id={id}
        onChange={() => !disabled && onChange(!checked)}
        onKeyDown={e => e.key === 'Enter' && !disabled && onChange(!checked)}
        style={{ width: '0px' }}
        tabIndex={0}
        type="radio"
        value={value}
      />
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
    </label>
  );
};
