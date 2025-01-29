import { forwardRef, useRef } from 'react';

import { useMergeRefs } from '@floating-ui/react';
import clsx from 'clsx';

import {
  InputBase,
  type InputBaseProps,
} from 'src/components/input/input-type/_InputBase';
import { CalendarIcon } from 'src/icons/CalendarIcon';

import styles from './_DateInput.module.scss';

export const DateInput = forwardRef<HTMLInputElement, InputBaseProps>(
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
      <div className={clsx(styles.styledWrapper, className)}>
        <InputBase
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
              <div className={styles.styledActionWrapper}>
                <button
                  className={styles.styledButtonAction}
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
