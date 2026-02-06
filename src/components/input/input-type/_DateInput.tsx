import { forwardRef, useRef } from 'react';

import { useMergeRefs } from '@floating-ui/react';

import {
  FloatLabelInput,
  type FloatLabelInputProps,
} from 'src/components/input/input-type/_FloatLabelInput';
import { CalendarIcon } from 'src/icons/CalendarIcon';
import { cn } from 'src/utils/cn';

export const DateInput = forwardRef<HTMLInputElement, FloatLabelInputProps>(
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
    const inputRef = useRef<HTMLInputElement & { showPicker: () => void }>(
      null,
    );
    const mergedRef = useMergeRefs([ref, inputRef]);

    return (
      <div
        className={cn(
          'relative w-full',
          '[&_input[type=datetime-local]::-webkit-calendar-picker-indicator]:hidden',
          '[&_input[type=date]::-webkit-calendar-picker-indicator]:hidden',
          '[&:not(:focus-within):not(.has-content)_input::-webkit-datetime-edit-fields-wrapper]:opacity-0',
          className,
        )}
      >
        <FloatLabelInput
          ref={mergedRef}
          aria-label={label}
          autoFocus={autoFocus}
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
              <div className="flex flex-col justify-center">
                <button
                  className="p-1.5 rounded-full transition-all duration-300 ease-in-out hover:bg-black/[0.04] active:bg-black/10 focus:outline-none"
                  onClick={() => {
                    inputRef.current?.showPicker();
                    inputRef.current?.dispatchEvent(
                      new Event('input', { bubbles: true }),
                    );
                  }}
                  type="button"
                >
                  <CalendarIcon size={24} />
                </button>
              </div>
            )
          }
          tabIndex={tabIndex}
          type="date"
          value={value}
          {...props}
        />
      </div>
    );
  },
);
