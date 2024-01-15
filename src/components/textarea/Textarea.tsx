import {
  type ReactNode,
  type TextareaHTMLAttributes,
  forwardRef,
  useRef,
} from 'react';

import clsx from 'clsx';

import { HelpText } from 'src/components/help-text/HelpText';
import { useHeightAdjustTextarea } from 'src/utils/hooks/useHeightAdjustTextarea';

import styles from './Textarea.module.scss';

type TextareaAdjustableHeightType = {
  /**
   * @param expandable
   * @desc if set to true, the textarea will expand to fit the content
   */
  expandable?: boolean;
  /**
   * @param maxRows
   * @desc max rows that the textarea can expand to when expandable is set. If nothing is passed, it defaults to 5
   * @default 5
   */
  maxRows?: number;
};

type TextareaType = {
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
      className,
      disabled,
      error,
      expandable,
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
    const hasValue = !!value;
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useHeightAdjustTextarea({
      maxRows,
      ref: textareaRef,
      shouldExpand: !!expandable,
      textareaValue: value?.toString() || '',
    });

    return (
      <div
        className={clsx(
          className,
          styles.aminoInputWrapper,
          'amino-input-wrapper',
          disabled && styles.disabled,
        )}
        style={{ ...style, '--amino-textarea-width': width || '100%' }}
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          className={styles.fields}
          onClick={() => textareaRef?.current?.focus()}
          role="button"
          tabIndex={0}
        >
          <textarea
            ref={node => {
              if (ref && typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                // eslint-disable-next-line no-param-reassign
                ref.current = node;
              }
              textareaRef.current = node;
            }}
            className={clsx(
              styles.styledTextarea,
              error && styles.hasError,
              label && styles.hasLabel,
              hasValue && styles.hasContent,
            )}
            disabled={disabled}
            rows={rows}
            value={value}
            {...props}
          />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <label
            className={styles.styledLabelInput}
            data-label={label}
            htmlFor={textareaRef?.current?.id}
            onClick={() => textareaRef?.current?.focus()}
          >
            {label}
          </label>
          <div className={styles.styledBorder} />
        </div>
        <HelpText error={error} helpText={helpText} />
      </div>
    );
  },
);
