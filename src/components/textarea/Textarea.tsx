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
   * @param disableExpand
   * @desc if set to true, the textarea will not expand to fit the content.
   */
  disableExpand?: boolean;
  /**
   * @param maxRows
   * @desc max rows that the textarea can expand to when disableExpand is not set. If nothing is passed, it defaults to 5
   * @default 20 (large)
   */
  maxRows?: number;
};

type TextareaType = {
  /**
   * @param actions
   * @desc actions to be displayed in a footer within the textarea
   */
  actions?: ReactNode;
  error?: boolean;
  helpText?: ReactNode;
  label?: string;
  /** @desc A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;
} & TextareaAdjustableHeightType;

export type TextareaProps = TextareaType &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'>;

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
