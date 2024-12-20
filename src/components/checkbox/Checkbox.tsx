import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type ReactNode,
  useId,
  useMemo,
} from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import {
  HelpText,
  type HelpTextProps,
} from 'src/components/help-text/HelpText';
import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { theme } from 'src/styles/constants/theme';
import globalStyles from 'src/styles/global.module.scss';
import type { BaseProps } from 'src/types/BaseProps';
import { getTestId } from 'src/utils/getTestId';

import styles from './Checkbox.module.scss';

const AnimatedCheckIcon = motion(CheckmarkIcon);

const getBackgroundColor = (checked: boolean, error: boolean) => {
  if (checked) {
    if (error) {
      return theme.danger;
    }
    return theme.primary;
  }

  return theme.inputBackground;
};

const getBorder = (checked: boolean, error: boolean) => {
  if (checked) {
    return 'none';
  }

  if (error) {
    return `1.5px solid ${theme.danger}`;
  }
  return `1.5px solid ${theme.gray400}`;
};

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<'label'>,
  'onClick' | 'onChange'
> &
  BaseProps &
  HelpTextProps & {
    checked: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    label?: string;
    labelComponent?: ReactNode;
    labelDescription?: string;
    onChange: (
      checked: boolean,
      event: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>,
    ) => void;
    subtitle?: ReactNode;
  };

export const Checkbox = ({
  checked = false,
  className,
  disabled,
  error = false,
  helpText,
  icon,
  label,
  labelComponent,
  labelDescription,
  onChange,
  style,
  subtitle,
  ...props
}: CheckboxProps) => {
  const id = useId();

  const testId = useMemo(
    () => getTestId({ componentName: 'checkbox', name: label }),
    [label],
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>,
  ) => {
    if (!disabled) {
      onChange(!checked, e);
    }
  };

  return (
    <label
      className={clsx(globalStyles.focusableLabel, styles.wrapper, className)}
      htmlFor={id}
      style={{
        ...style,
        '--amino-checkbox-background': getBackgroundColor(checked, error),
        '--amino-checkbox-border': getBorder(checked, error),
        '--amino-checkbox-box-shadow': checked
          ? theme.shadowButtonPrimary
          : 'none',
        '--amino-checkbox-disabled-background': checked ? theme.blue200 : '',
        '--amino-checkbox-disabled-border': checked
          ? `none`
          : `1.5px solid ${theme.gray300}`,
      }}
      {...props}
    >
      <input
        checked={checked}
        className={clsx(globalStyles.inputHidden, disabled && 'disabled')}
        data-testid={testId}
        id={id}
        onChange={handleChange}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === 'Space') {
            handleChange(e);
          }
        }}
        tabIndex={0}
        type="checkbox"
      />
      <div
        className={clsx(
          styles.checkboxContainer,
          'amino-input-wrapper',
          disabled && styles.disabled,
          disabled && 'disabled',
        )}
      >
        <div className={styles.aminoCheckbox}>
          <AnimatePresence>
            {checked && (
              <AnimatedCheckIcon
                key="checkbox"
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              />
            )}
          </AnimatePresence>
        </div>

        {labelComponent ||
          (label && (
            <div className={styles.infoWrapper}>
              <div className={styles.labelWrapper}>
                {icon}
                <Text className={styles.styledLabel} type="input-label">
                  {label}
                  {labelDescription && (
                    <span className={styles.styledLabelDescription}>
                      {labelDescription}
                    </span>
                  )}
                </Text>
              </div>
            </div>
          ))}
      </div>

      {subtitle && (
        <div className={styles.styledSubtitle}>
          <Text type="subtitle">{subtitle}</Text>
        </div>
      )}

      <HelpText error={error} helpText={helpText} />
    </label>
  );
};
