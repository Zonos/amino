import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type ReactNode,
  useId,
  useMemo,
} from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import {
  HelpText,
  type HelpTextProps,
} from 'src/components/help-text/HelpText';
import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { theme } from 'src/styles/constants/theme';

import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';
import { getTestId } from 'src/utils/getTestId';

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

/**
 * Checkbox component that allows users to select one or more options.
 * Features include custom styling, animations, and support for various states.
 *
 * @example Basic checkbox
 * <Checkbox
 *   label="Accept terms and conditions"
 *   checked={isChecked}
 *   onChange={setIsChecked}
 * />
 *
 * @example With help text
 * <Checkbox
 *   label="Subscribe to newsletter"
 *   checked={subscribed}
 *   onChange={setSubscribed}
 *   helpText="You'll receive updates about our products"
 * />
 *
 * @example With error state
 * <Checkbox
 *   label="I agree to terms and conditions"
 *   checked={agreed}
 *   onChange={setAgreed}
 *   error={true}
 *   helpText="You must agree to the terms to continue"
 * />
 *
 * @example Disabled state
 * <Checkbox
 *   label="Premium features"
 *   checked={hasPremium}
 *   onChange={setHasPremium}
 *   disabled={true}
 * />
 *
 * @example With icon
 * <Checkbox
 *   label="Enable notifications"
 *   checked={notificationsEnabled}
 *   onChange={setNotificationsEnabled}
 *   icon={<BellIcon size={16} />}
 * />
 *
 * @example With subtitle
 * <Checkbox
 *   label="Enable dark mode"
 *   checked={darkMode}
 *   onChange={setDarkMode}
 *   subtitle="Changes the appearance of the application"
 * />
 *
 * @example With label description
 * <Checkbox
 *   label="Remember me"
 *   labelDescription="(Optional)"
 *   checked={rememberMe}
 *   onChange={setRememberMe}
 * />
 *
 * @example With custom label component
 * <Checkbox
 *   labelComponent={
 *     <div style={{ display: 'flex', alignItems: 'center' }}>
 *       <Text>Custom label</Text>
 *       <Text color="red500" style={{ marginLeft: '8px' }}>*</Text>
 *     </div>
 *   }
 *   checked={customLabel}
 *   onChange={setCustomLabel}
 * />
 */
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
      className={cn(
        'cursor-pointer',
        'focus-within:outline-none [&:has(input:focus-visible)]:shadow-(--amino-glow-blue)',
        className,
      )}
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
        className={cn('absolute w-0 h-0 opacity-0', disabled && 'disabled')}
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
        className={cn(
          'flex flex-row select-none [&,_*]:select-none [&,_*]:pointer-events-none',
          'amino-input-wrapper',
          disabled && ['cursor-not-allowed', 'disabled'],
        )}
      >
        <div
          className={cn(
            'w-4 h-4 min-w-4 min-h-4 leading-4 rounded flex items-center justify-center select-none transition-all duration-150 ease-in-out',
            'bg-[var(--amino-checkbox-background)] border-[var(--amino-checkbox-border)] shadow-[var(--amino-checkbox-box-shadow)]',
            disabled &&
              'bg-[var(--amino-checkbox-disabled-background)] border-[var(--amino-checkbox-disabled-border)] shadow-none',
          )}
        >
          <AnimatePresence>
            {checked && (
              <AnimatedCheckIcon
                key="checkbox"
                animate={{ opacity: 1, scale: 1 }}
                className={cn(
                  'w-4 h-4 text-gray-0 dark:text-gray-1000',
                  'shadow-[0px_2px_4px_rgba(0,0,0,0.06),0px_1px_2px_rgba(0,0,0,0.04)]',
                )}
                exit={{ opacity: 0, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              />
            )}
          </AnimatePresence>
        </div>

        {labelComponent ||
          (label && (
            <div className="ml-2">
              <div className="flex items-center leading-4">
                {icon && (
                  <div className={cn('mr-1', disabled && 'opacity-40')}>
                    {icon}
                  </div>
                )}
                <Text
                  className={cn('mb-0', disabled && 'text-gray-600')}
                  type="input-label"
                >
                  {label}
                  {labelDescription && (
                    <span className="ml-1 text-gray-600">
                      {labelDescription}
                    </span>
                  )}
                </Text>
              </div>
            </div>
          ))}
      </div>

      {subtitle && (
        <div className={cn('ml-6 mt-1', disabled && 'text-gray-400')}>
          <Text type="subtitle">{subtitle}</Text>
        </div>
      )}

      <HelpText error={error} helpText={helpText} />
    </label>
  );
};
