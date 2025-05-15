import { type ReactNode, useId } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import globalStyles from 'src/styles/global.module.scss';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './Radio.module.scss';

export type RadioProps = BaseProps & {
  /**
   * Determines if the radio button is selected
   */
  checked: boolean;
  /**
   * Sets the radio button to a disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * Label text or element to display next to the radio button
   */
  label?: ReactNode;
  /**
   * Function called when the radio button state changes
   */
  onChange: (checked: boolean) => void;
  /**
   * Value associated with this radio button, used for form submission
   */
  value: string;
};

/**
 * Radio component provides a single radio button for use in forms or as part of a RadioGroup.
 * It includes an animated selection indicator and optional label.
 *
 * @example Basic usage
 * ```tsx
 * const [checked, setChecked] = useState(false);
 *
 * <Radio
 *   checked={checked}
 *   onChange={setChecked}
 *   value="option1"
 *   label="Select this option"
 * />
 * ```
 *
 * @example With disabled state
 * ```tsx
 * <Radio
 *   checked={true}
 *   disabled={true}
 *   onChange={() => {}}
 *   value="disabled-option"
 *   label="This option cannot be changed"
 * />
 * ```
 *
 * @example With ReactNode label
 * ```tsx
 * <Radio
 *   checked={checked}
 *   onChange={setChecked}
 *   value="option-with-jsx"
 *   label={<>Custom <strong>formatted</strong> label</>}
 * />
 * ```
 *
 * @example In a form
 * ```tsx
 * <form onSubmit={handleSubmit}>
 *   <Radio
 *     checked={formData.agreeToTerms}
 *     onChange={(checked) => setFormData({...formData, agreeToTerms: checked})}
 *     value="agree"
 *     label="I agree to the terms and conditions"
 *   />
 *   <Button type="submit">Submit</Button>
 * </form>
 * ```
 */
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
