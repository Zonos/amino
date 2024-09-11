import {
  type ChangeEventHandler,
  type ComponentPropsWithRef,
  type KeyboardEventHandler,
  forwardRef,
  useId,
} from 'react';

import clsx from 'clsx';

import type { InputMode } from 'src/components/input/input-type/_FloatLabelInput';
import { SearchIcon } from 'src/icons/SearchIcon';

import styles from './SearchInput.module.scss';

export type InputProps = Omit<ComponentPropsWithRef<'input'>, 'onChange'> & {
  autoFocus?: boolean;

  className?: string;

  disabled?: boolean;

  inputMode?: InputMode;

  /** Input on changed. Required since all inputs must be fully controlled */
  onChange: ChangeEventHandler<HTMLInputElement>;

  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  pattern?: string;
  /** Placeholder text to be displayed in the input */
  placeholder?: string;
  /** Determines if the input is editable or not */
  readOnly?: boolean;
  /** Determines if the input is required for form validation */
  required?: boolean;
  tabIndex?: number;
  /** Input value. Required since all inputs must be fully controlled */
  value: string | null;
};

export const SearchInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autoFocus,
      className,
      disabled,
      inputMode,
      onChange,
      onKeyDown,
      pattern,
      placeholder,
      readOnly,
      required,
      tabIndex,
      value,
      ...props
    },
    ref,
  ) => {
    const id = useId();

    return (
      <div className={clsx(styles.styledWrapper, className)}>
        <label className={styles.styledLabel} htmlFor={id}>
          <div className={styles.icon}>
            <SearchIcon color="gray600" size={24} />
          </div>
          <input
            ref={ref}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            className={styles.aminoInput}
            disabled={disabled}
            id={id}
            inputMode={inputMode}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder || 'Search...'}
            readOnly={readOnly}
            required={required}
            tabIndex={tabIndex}
            type="search"
            value={value || ''}
            {...props}
          />
        </label>
      </div>
    );
  },
);
