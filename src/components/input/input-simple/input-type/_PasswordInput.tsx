import { forwardRef, useState } from 'react';

import { Button } from 'src/components/button/Button';
import {
  InputBase,
  type InputBaseProps,
} from 'src/components/input/input-simple/input-type/_InputBase';
import { EyeIcon } from 'src/icons/EyeIcon';
import { EyeOffIcon } from 'src/icons/EyeOffIcon';
import { cn } from 'src/utils/cn';

export const PasswordInput = forwardRef<HTMLInputElement, InputBaseProps>(
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
      <div className={cn('relative w-full', className)}>
        <InputBase
          ref={ref}
          aria-label={label}
          autoFocus={autoFocus}
          className="[&_input]:pr-10"
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
                className="p-1.5 rounded-full transition-all duration-300 ease-in-out hover:bg-hover"
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
