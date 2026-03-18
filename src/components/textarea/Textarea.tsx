import {
  forwardRef,
  type ReactNode,
  type TextareaHTMLAttributes,
  useId,
  useRef,
  useState,
} from 'react';

import { Flex } from 'src/components/flex/Flex';
import { HelpText } from 'src/components/help-text/HelpText';
import { theme } from 'src/styles/constants/theme';
import { cn } from 'src/utils/cn';
import { useHeightAdjustTextarea } from 'src/utils/hooks/useHeightAdjustTextarea';

type TextareaAdjustableHeightType = {
  /**
   * If set to true, the textarea will not expand to fit the content
   * @default false
   */
  disableExpand?: boolean;
  /**
   * Max rows that the textarea can expand to when disableExpand is not set
   * @default 20
   */
  maxRows?: number;
};

type TextareaType = {
  /**
   * Actions to be displayed in a footer within the textarea
   */
  actions?: ReactNode;
  /**
   * Sets the error state styling with red border
   * @default false
   */
  error?: boolean;
  /**
   * Help text to be displayed below the textarea
   */
  helpText?: ReactNode;
  /**
   * Label text to be displayed above the textarea
   */
  label?: string;
  /**
   * A value (in px) that will determine how wide the input is
   * @default 100%
   */
  width?: number;
} & TextareaAdjustableHeightType;

export type TextareaProps = TextareaType &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'>;

/**
 * Textarea component provides a multi-line text input field with support for labels,
 * help text, error states, and auto-expanding height.
 *
 * @example Basic usage
 * ```tsx
 * const [value, setValue] = useState('');
 *
 * <Textarea
 *   label="Description"
 *   placeholder="Enter description..."
 *   value={value}
 *   onChange={e => setValue(e.target.value)}
 * />
 * ```
 *
 * @example With error state and help text
 * ```tsx
 * <Textarea
 *   label="Description"
 *   placeholder="Enter description..."
 *   value={value}
 *   onChange={handleChange}
 *   error={!value.trim() && isSubmitted}
 *   helpText="This field is required"
 * />
 * ```
 *
 * @example With custom width and actions
 * ```tsx
 * <Textarea
 *   label="Comments"
 *   width={500}
 *   value={comments}
 *   onChange={handleCommentsChange}
 *   actions={
 *     <Flex>
 *       <Button onClick={handleClear}>Clear</Button>
 *       <Button variant="primary" onClick={handleSave}>Save</Button>
 *     </Flex>
 *   }
 * />
 * ```
 *
 * @example With disabled expand and maximum rows
 * ```tsx
 * <Textarea
 *   label="Limited Input"
 *   value={value}
 *   onChange={handleChange}
 *   disableExpand={false}
 *   maxRows={5}
 * />
 * ```
 *
 * @example Disabled state
 * ```tsx
 * <Textarea
 *   label="Read-only Content"
 *   value="This content cannot be edited"
 *   disabled={true}
 * />
 * ```
 *
 * @example With form integration
 * ```tsx
 * <form onSubmit={handleSubmit}>
 *   <Textarea
 *     label="Cover Letter"
 *     name="coverLetter"
 *     value={formData.coverLetter}
 *     onChange={e => setFormData({...formData, coverLetter: e.target.value})}
 *     required
 *   />
 *   <Button type="submit">Submit</Button>
 * </form>
 * ```
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      actions,
      className,
      disabled,
      disableExpand,
      error,
      helpText,
      label,
      maxRows,
      rows,
      style,
      value,
      width,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const hasValue = !!value;
    const [isFocused, setIsFocused] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const actionsRef = useRef<HTMLDivElement | null>(null);

    useHeightAdjustTextarea({
      maxRows,
      ref: textareaRef,
      shouldExpand: !disableExpand,
      textareaValue: value?.toString() || '',
    });

    return (
      <Flex
        className="w-[var(--amino-textarea-width)]"
        flexDirection="column"
        gap={4}
        justifyContent="space-between"
        style={{ ...style, '--amino-textarea-width': width || '100%' }}
      >
        <div
          className={cn(
            `amino-input-wrapper relative w-full overflow-hidden rounded-[12px]
            border p-0`,
            error
              ? 'border-transparent shadow-[var(--amino-glow-error)]'
              : 'border-amino',
            !error && isFocused && 'shadow-[var(--amino-focus-shadow)]',
            disabled && [
              '*:cursor-not-allowed',
              '[&_.fields]:opacity-disabled',
              '[&_.styledTextarea]:select-none',
            ],
            className,
          )}
          style={{
            '--amino-focus-shadow': theme.glowBlue,
          }}
        >
          <label
            className="relative flex w-full flex-col"
            htmlFor={props.id || id}
            onClick={e => {
              if (e.target === textareaRef.current) {
                // Clicking the textarea itself — prevent label re-focus so cursor stays at click position
                e.preventDefault();
              } else {
                // Clicking the floating label — move cursor to end after focus
                setTimeout(() => {
                  const textarea = textareaRef.current;
                  if (textarea) {
                    const length = textarea.value.length;
                    textarea.setSelectionRange(length, length);
                  }
                }, 0);
              }
            }}
          >
            <textarea
              ref={node => {
                if (ref && typeof ref === 'function') {
                  ref(node);
                } else if (ref) {
                  ref.current = node;
                }
                textareaRef.current = node;
              }}
              className={cn(
                `text-amino-base bg-amino-input box-border min-h-[100px] w-full
                flex-grow resize-none border-0 px-4 py-3 font-medium
                outline-none`,
                `placeholder:font-normal placeholder:text-gray-400
                placeholder:opacity-60 placeholder:transition-all
                placeholder:duration-300 placeholder:ease-in-out`,
                'focus:outline-none',
                label && [
                  'mt-6 pt-0',
                  'placeholder:opacity-0',
                  hasValue && 'placeholder:opacity-60',
                  'focus:placeholder:opacity-60',
                ],
                !!actions && !rows && 'min-h-[5em]',
              )}
              {...props}
              disabled={disabled}
              id={id}
              onBlur={e => {
                setIsFocused(false);
                props.onBlur?.(e);
              }}
              onFocus={e => {
                setIsFocused(true);
                props.onFocus?.(e);
              }}
              rows={rows}
              value={value}
            />
            {label && (
              <span
                className={cn(
                  `text-amino-base pointer-events-none absolute top-6 left-4
                  origin-top-left leading-none transition-all duration-300
                  ease-in-out`,
                  (hasValue || isFocused) && 'top-[11px] scale-[0.8]',
                )}
                style={{ color: 'var(--amino-gray-800)' }}
              >
                {label}
              </span>
            )}
            <div
              className="after:absolute after:inset-0 after:rounded-[12px]
                after:content-['']"
            />
          </label>

          {actions && (
            <div
              ref={actionsRef}
              className="bg-page flex items-center justify-end px-4 py-4"
            >
              <Flex alignItems="center" fullHeight justifyContent="flex-end">
                {actions}
              </Flex>
            </div>
          )}
        </div>

        <HelpText error={error} helpText={helpText} withoutMargin />
      </Flex>
    );
  },
);
