import {
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useMemo,
} from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import { getTestId } from 'src/utils/getTestId';

import styles from './Checkbox.module.scss';

const AnimatedCheckIcon = motion(CheckmarkIcon);

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<'label'>,
  'onClick' | 'onChange'
> &
  BaseProps & {
    /**
     * Don't stop propagation of the click event
     * @default false
     */
    allowPropagation?: boolean;
    checked: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    label?: string;
    labelComponent?: ReactNode;
    labelDescription?: string;
    subtitle?: string;
    onChange: (
      checked: boolean,
      event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>,
    ) => void;
  };

export const Checkbox = ({
  allowPropagation = false,
  checked = false,
  className,
  disabled,
  icon,
  label,
  labelComponent,
  labelDescription,
  onChange,
  style,
  subtitle,
  ...props
}: CheckboxProps) => {
  const labelAsHtmlAttribute = label?.replace(/\s/g, '-').toLowerCase();

  const testId = useMemo(
    () => getTestId({ componentName: 'checkbox', name: label }),
    [label],
  );

  const handleChange = (
    e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>,
  ) => {
    if (!allowPropagation) {
      e.stopPropagation();
    }
    if (!disabled) {
      onChange(!checked, e);
    }
  };

  return (
    <label
      className={className}
      data-testid={testId}
      htmlFor={labelAsHtmlAttribute}
      style={{
        ...style,
        '--amino-checkbox-background': checked
          ? theme.primary
          : theme.inputBackground,
        '--amino-checkbox-border': !checked
          ? `1.5px solid ${theme.gray400}`
          : 'none',
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
      <div
        className={clsx(
          styles.checkboxContainer,
          'amino-input-wrapper',
          disabled ? styles.disabled : '',
        )}
        onClick={e => {
          handleChange(e);
        }}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === 'Space') {
            handleChange(e);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <div className={styles.aminoCheckbox} id={labelAsHtmlAttribute}>
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
              {subtitle && (
                <Text className={styles.styledSubtitle} type="subtitle">
                  {subtitle}
                </Text>
              )}
            </div>
          ))}
      </div>
    </label>
  );
};
