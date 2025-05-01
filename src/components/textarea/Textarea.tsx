import {
  forwardRef,
  type ReactNode,
  type TextareaHTMLAttributes,
  useId,
  useRef,
} from 'react';

import clsx from 'clsx';

import { Flex } from 'src/components/flex/Flex';
import { HelpText } from 'src/components/help-text/HelpText';
import { useHeightAdjustTextarea } from 'src/utils/hooks/useHeightAdjustTextarea';

import styles from './Textarea.module.scss';

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
        className={styles.textareaWrapper}
        flexDirection="column"
        gap={4}
        justifyContent="space-between"
        style={{ ...style, '--amino-textarea-width': width || '100%' }}
      >
        <div
          className={clsx(
            className,
            styles.aminoInputWrapper,
            'amino-input-wrapper',
            disabled && styles.disabled,
          )}
        >
          <button
            className={styles.fields}
            onClick={() => textareaRef?.current?.focus()}
            type="button"
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
              className={clsx(
                styles.styledTextarea,
                error && styles.hasError,
                label && styles.hasLabel,
                hasValue && styles.hasContent,
                !!actions && styles.hasActions,
              )}
              disabled={disabled}
              id={id}
              rows={rows}
              value={value}
              {...props}
            />
            {label && (
              <label
                className={styles.styledLabelInput}
                data-label={label}
                htmlFor={props.id || id}
              >
                {label}
              </label>
            )}
          </button>

          {actions && (
            <div ref={actionsRef} className={styles.actions}>
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
