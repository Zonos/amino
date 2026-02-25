import { forwardRef, useRef } from 'react';

import { useMergeRefs } from '@floating-ui/react';

import {
  FloatLabelInput,
  type FloatLabelInputProps,
} from 'src/components/input/input-type/_FloatLabelInput';
import { CaretDownIcon } from 'src/icons/CaretDownIcon';
import { CaretUpIcon } from 'src/icons/CaretUpIcon';
import type { Size } from 'src/types/Size';
import { cn } from 'src/utils/cn';

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

export const NumberInput = forwardRef<HTMLInputElement, FloatLabelInputProps>(
  ({ className, label, size = 'xl', suffix, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs([ref, inputRef]);

    return (
      <div
        className={cn('relative w-full', className)}
        style={{
          '--amino-number-input-height': `calc(var(--amino-size-${size}) - 2px)`,
        }}
      >
        <FloatLabelInput
          {...props}
          ref={mergedRef}
          aria-label={label}
          className="[&_input]:pr-10 [&_input]:appearance-none [&_input::-webkit-inner-spin-button]:hidden [&_input::-webkit-calendar-picker-indicator]:hidden"
          label={label}
          size={size}
          suffix={
            suffix === null
              ? null
              : suffix || (
                  <div className="flex flex-col justify-center h-[var(--amino-number-input-height)]">
                    <button
                      className="p-0 px-1 rounded transition-all duration-300 ease-in-out hover:bg-black/[0.04] active:bg-black/10 focus:outline-none"
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
                      className="p-0 px-1 rounded transition-all duration-300 ease-in-out hover:bg-black/[0.04] active:bg-black/10 focus:outline-none"
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
