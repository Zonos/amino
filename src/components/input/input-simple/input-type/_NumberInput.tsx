import { forwardRef, useRef } from 'react';

import { useMergeRefs } from '@floating-ui/react';
import clsx from 'clsx';

import {
  InputBase,
  type InputBaseProps,
} from 'src/components/input/input-simple/input-type/_InputBase';
import { CaretDownIcon } from 'src/icons/CaretDownIcon';
import { CaretUpIcon } from 'src/icons/CaretUpIcon';
import type { Size } from 'src/types/Size';

import styles from './_NumberInput.module.scss';

const getIconSize = (size: Size) => {
  switch (size) {
    case 'sm':
      return 14;
    case 'md':
      return 16;
    case 'lg':
      return 18;
    case 'xl':
    default:
      return 20;
  }
};

export const NumberInput = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, label, size = 'xl', suffix, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs([ref, inputRef]);

    return (
      <div
        className={clsx(styles.styledWrapper, className)}
        style={{
          '--amino-number-input-height': `calc(var(--amino-size-${size}) - 2px)`,
        }}
      >
        <InputBase
          {...props}
          ref={mergedRef}
          aria-label={label}
          className={styles.aminoInput}
          label={label}
          size={size}
          suffix={
            suffix === null
              ? null
              : suffix || (
                  <div className={styles.styledActionWrapper}>
                    <button
                      className={styles.styledButtonAction}
                      onClick={() => {
                        inputRef.current?.stepUp();
                        inputRef.current?.dispatchEvent(
                          new Event('input', { bubbles: true }),
                        );
                      }}
                      type="button"
                    >
                      <CaretUpIcon size={getIconSize(size)} />
                    </button>
                    <button
                      className={styles.styledButtonAction}
                      onClick={() => {
                        inputRef.current?.stepDown();
                        inputRef.current?.dispatchEvent(
                          new Event('input', { bubbles: true }),
                        );
                      }}
                      type="button"
                    >
                      <CaretDownIcon size={getIconSize(size)} />
                    </button>
                  </div>
                )
          }
          type="number"
        />
      </div>
    );
  },
);
