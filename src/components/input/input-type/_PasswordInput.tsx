import { useState } from 'react';

import clsx from 'clsx';

import {
  type FloatLabelInputProps,
  FloatLabelInput,
} from 'src/components/input/input-type/_FloatLabelInput';
import { EyeIcon } from 'src/icons/EyeIcon';
import { EyeOffIcon } from 'src/icons/EyeOffIcon';

import styles from './_Password.module.scss';

export const PasswordInput = ({
  autoFocus,
  className,
  disabled,
  error,
  inputMode,
  label,
  onChange,
  onKeyDown,
  pattern,
  placeholder,
  prefix,
  readOnly,
  required,
  style,
  suffix,
  tabIndex,
  value,
  ...props
}: FloatLabelInputProps) => {
  const [inputType, setInputType] = useState('password');
  return (
    <div className={clsx(styles.styledWrapper, className)} style={style}>
      <FloatLabelInput
        aria-label={label}
        autoFocus={autoFocus}
        className={styles.aminoInput}
        disabled={disabled}
        error={error}
        inputMode={inputMode}
        label={label}
        onChange={onChange}
        onKeyDown={onKeyDown}
        pattern={pattern}
        placeholder={placeholder}
        prefix={prefix}
        readOnly={readOnly}
        required={required}
        suffix={
          suffix || (
            <button
              className={styles.styledButtonAction}
              onClick={() =>
                setInputType(inputType === 'password' ? 'text' : 'password')
              }
              type="button"
            >
              {inputType === 'password' ? (
                <EyeIcon size={24} />
              ) : (
                <EyeOffIcon size={24} />
              )}
            </button>
          )
        }
        tabIndex={tabIndex}
        type={inputType}
        value={value}
        {...props}
      />
    </div>
  );
};
