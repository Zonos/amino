import { forwardRef, useState } from 'react';

import clsx from 'clsx';

import { Button } from 'src/components/button/Button';
import {
  FloatLabelInput,
  type FloatLabelInputProps,
} from 'src/components/input/input-type/_FloatLabelInput';
import { EyeIcon } from 'src/icons/EyeIcon';
import { EyeOffIcon } from 'src/icons/EyeOffIcon';

import styles from './_PasswordInput.module.scss';

export const PasswordInput = forwardRef<HTMLInputElement, FloatLabelInputProps>(
  (
    {
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
      suffix,
      tabIndex,
      value,
      ...props
    },
    ref,
  ) => {
    const [inputType, setInputType] = useState('password');
    return (
      <div className={clsx(styles.styledWrapper, className)}>
        <FloatLabelInput
          ref={ref}
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
              <Button
                className={styles.styledButtonAction}
                icon={
                  inputType === 'password' ? (
                    <EyeIcon size={24} />
                  ) : (
                    <EyeOffIcon size={24} />
                  )
                }
                onClick={() =>
                  setInputType(inputType === 'password' ? 'text' : 'password')
                }
                variant="subtle"
              />
            )
          }
          tabIndex={tabIndex}
          type={inputType}
          value={value}
          {...props}
        />
      </div>
    );
  },
);
