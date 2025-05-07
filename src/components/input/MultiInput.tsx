import {
  type ChangeEvent,
  type ClipboardEvent,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import clsx from 'clsx';

import { Flex } from 'src/components/flex/Flex';
import { Tag } from 'src/components/tag/Tag';
import { parseStringIntoTags } from 'src/utils/multiinput/parseStringIntoTags';

import styles from './MultiInput.module.scss';

const symbolDelimiters = ['|', ','];
export const defaultInputKeyPressDelimiters = [
  ...symbolDelimiters,
  ' ',
  'Enter',
];

export type MultiInputProps = {
  className?: string;
  inputValue: string;
  /**
   * Entering any of these characters will create a new tag.
   * Use `textWrapDelimiters` to create tags when any subtext is surrounded by a certain character.
   *
   * @default
   * ['|', ',', ' ']
   */
  keyPressDelimiters?: string[];
  placeholder?: string;
  /**
   * A function that sets the validation error state.
   * If the tag is invalid, the tag will be highlighted in red and the function will return true.
   *
   * @default
   * undefined
   */
  setHasValidationError?: (hasValidationError: boolean) => void;
  setInputValue: (input: string) => void;
  setTags: (tags: string[]) => void;
  style?: React.CSSProperties;
  /**
   * A function that validates a tag.
   * If the tag is invalid, the tag will be highlighted in red.
   *
   * @default
   * undefined
   * @example
   * tagValidation: (email: string): boolean => {
   *   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   *   return emailRegex.test(email);
   * },
   */
  tagValidation?: (tag: string) => boolean;
  tags: string[];
  /**
   * Entering any of these characters will create a new tag when any subtext is surrounded by them.
   * Use `keyPressDelimiters` to create tags upon single keypress.
   *
   * @default []
   * @example textWrapDelimiters: [':']
   *
   * Input: ":tag1:, :tag2:"
   * Output: ["tag1", "tag2"]
   */
  textWrapDelimiters?: string[];
};

export const MultiInput = ({
  className,
  inputValue,
  keyPressDelimiters = defaultInputKeyPressDelimiters,
  placeholder = '',
  setHasValidationError,
  setInputValue,
  setTags,
  style,
  tags,
  tagValidation,
  textWrapDelimiters,
}: MultiInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [highlightedTagIndex, setHighlightedTagIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    if (setHasValidationError && tagValidation) {
      const hasInvalidTags = tags.some(tag => !tagValidation(tag));
      setHasValidationError(hasInvalidTags);
    }
  }, [tags, tagValidation, setHasValidationError]);

  const addTag = (value: string): void => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      setTags([...tags, trimmedValue]);
      setInputValue('');
    }
  };

  const removeTag = (index: number): string[] => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    return newTags;
  };

  // Focus cursor after the tags in the input
  const handleFocus = (): void => {
    if (inputRef.current) {
      inputRef.current.selectionStart = inputRef.current.value.length;
      inputRef.current.selectionEnd = inputRef.current.value.length;
      setHighlightedTagIndex(null);
    }
  };

  // Handle key events to create a tag
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (keyPressDelimiters.includes(e.key) && inputValue) {
      e.preventDefault();
      addTag(inputValue);
    } else if (textWrapDelimiters?.includes(e.key) && inputValue) {
      e.preventDefault();

      // Check if this is the second entry of the delimiter
      const currentDelimiter = e.key;
      const lastDelimiterIndex = inputValue.lastIndexOf(currentDelimiter);

      if (
        lastDelimiterIndex !== -1 &&
        lastDelimiterIndex < inputValue.length - 1
      ) {
        // This is potentially the second delimiter
        const subsequentText = inputValue.substring(lastDelimiterIndex + 1);

        if (subsequentText.length > 0) {
          // Extract the text between delimiters (without the delimiters)
          const tagText = subsequentText;
          const beforeDelimiter = inputValue.substring(0, lastDelimiterIndex);

          // Add just the text between delimiters as a tag
          addTag(tagText);

          // Set the remainder as the input value
          setInputValue(beforeDelimiter);
        } else {
          // Just append the delimiter to the input
          setInputValue(inputValue + currentDelimiter);
        }
      } else {
        // This is the first delimiter or delimiter at the end
        setInputValue(inputValue + currentDelimiter);
      }
    } else if (e.key === 'Backspace') {
      if (tags.length > 0 && highlightedTagIndex !== null) {
        // Store current highlighted index
        const currentIndex = highlightedTagIndex;

        // Remove the tag
        const newTags = removeTag(highlightedTagIndex);

        // If there are still tags remaining
        if (newTags.length > 1) {
          // If we removed a tag that wasn't the last one, highlight the tag at the same index
          // (which will now be the next tag in line)
          if (currentIndex < newTags.length - 1) {
            setHighlightedTagIndex(currentIndex);
          } else {
            // If we removed the last tag, highlight the new last tag
            setHighlightedTagIndex(newTags.length - 1);
          }
        } else if (newTags.length === 1) {
          // If only one tag remains, highlight it
          setHighlightedTagIndex(0);
        } else {
          // No tags remain, clear highlight and focus on input
          setHighlightedTagIndex(null);
          if (inputRef.current) {
            inputRef.current.focus();
            handleFocus();
          }
        }
      } else if (!inputValue.length && tags.length > 0) {
        // If there are tags but no input value, highlight the last tag
        setHighlightedTagIndex(tags.length - 1);
      }
    } else if (e.key === 'ArrowLeft') {
      // If a tag is currently highlighted, move to previous tag
      if (highlightedTagIndex !== null) {
        if (highlightedTagIndex > 0) {
          // Not at first tag, move to previous tag
          setHighlightedTagIndex(highlightedTagIndex - 1);
        }
        // If at first tag, stay there - don't change state
      } else {
        // No tag is highlighted
        // Check if cursor is at the beginning of the input
        if (inputRef.current && inputRef.current.selectionStart === 0) {
          // At beginning of input and tags exist, highlight the last tag
          if (tags.length > 0) {
            setHighlightedTagIndex(tags.length - 1);
          }
        }
        // If not at beginning of input, normal cursor behavior (handled by browser)
      }
    } else if (e.key === 'ArrowRight') {
      // If a tag is currently highlighted
      if (highlightedTagIndex !== null) {
        if (highlightedTagIndex < tags.length - 1) {
          // Not at last tag, move to next tag
          setHighlightedTagIndex(highlightedTagIndex + 1);
        } else {
          // At last tag, move to input
          setHighlightedTagIndex(null);
          // Use setTimeout to ensure this runs after React's state update
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.focus();
              inputRef.current.selectionStart = 0;
              inputRef.current.selectionEnd = 0;
            }
          }, 0);
        }
      }
      // If no tag is highlighted, normal cursor behavior (handled by browser)
    } else {
      setHighlightedTagIndex(null);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text');
    const newTags = parseStringIntoTags(
      pasteData,
      keyPressDelimiters,
      textWrapDelimiters || [],
    );
    setTags([...tags, ...newTags]);
    setInputValue('');
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>): void => {
    if (
      !e ||
      e.type !== 'click' ||
      (e.type === 'click' && (e as React.MouseEvent).detail === 1)
    ) {
      handleFocus();
    }
  };

  const handleTagCloseClick = (index: number): void => {
    removeTag(index);
    if (inputRef.current) {
      inputRef.current.focus();
      handleFocus();
    }
  };

  return (
    <Flex
      alignItems="center"
      aria-label={placeholder || 'Tag input'}
      className={clsx([className, styles.tagInputWrapper])}
      flexWrap="wrap"
      gap={4}
      role="group"
      style={style}
    >
      {tags.map((tag, index) => {
        const invalid = !!(tagValidation && !tagValidation(tag));
        const highlighted = highlightedTagIndex === index;
        const intent = invalid ? 'error' : 'default';

        return (
          <Flex key={tag + index} alignItems="center" gap={0}>
            <Tag
              aria-invalid={invalid}
              aria-selected={highlighted}
              highlighted={highlighted}
              intent={intent}
              onClick={() => setHighlightedTagIndex(index)}
              onClose={() => handleTagCloseClick(index)}
              role="option"
              size="lg"
            >
              {tag}
            </Tag>
          </Flex>
        );
      })}
      <input
        ref={inputRef}
        aria-autocomplete="list"
        aria-label={placeholder || 'Add tags'}
        className={clsx([
          styles.tagInput,
          highlightedTagIndex !== null && styles.cursorHidden,
        ])}
        onChange={handleInputChange}
        onClick={handleInputClick}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        placeholder={!tags.length ? placeholder : ''}
        role="combobox"
        value={inputValue}
      />
    </Flex>
  );
};
