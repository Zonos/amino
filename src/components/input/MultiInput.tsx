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
import {
  parseStringIntoTags,
  symbolDelimiters,
} from 'src/utils/multiinput/parseStringIntoTags';

import styles from './MultiInput.module.scss';

const inputKeyPressDelimiters = [...symbolDelimiters, ' ', 'Enter'];

export type MultiInputProps = {
  className?: string;
  inputValue: string;
  placeholder?: string;
  setHasValidationError?: (hasValidationError: boolean) => void;
  setInputValue: (input: string) => void;
  setTags: (tags: string[]) => void;
  style?: React.CSSProperties;
  tagValidation?: (tag: string) => boolean;
  tags: string[];
};

/**
 * MultiInput component allows users to input multiple values (tags) in a single field.
 * It supports keyboard navigation, tag validation, and clipboard paste operations.
 *
 * @example Basic usage
 * const [tags, setTags] = useState<string[]>([]);
 * const [inputValue, setInputValue] = useState('');
 *
 * <MultiInput
 *   inputValue={inputValue}
 *   setInputValue={setInputValue}
 *   tags={tags}
 *   setTags={setTags}
 *   placeholder="Add tags..."
 * />
 *
 * @example With tag validation
 * const [tags, setTags] = useState<string[]>([]);
 * const [inputValue, setInputValue] = useState('');
 * const [hasError, setHasError] = useState(false);
 *
 * const validateTag = (tag: string) => {
 *   return tag.length >= 3 && tag.length <= 20;
 * };
 *
 * <MultiInput
 *   inputValue={inputValue}
 *   setInputValue={setInputValue}
 *   tags={tags}
 *   setTags={setTags}
 *   tagValidation={validateTag}
 *   setHasValidationError={setHasError}
 *   placeholder="Enter tags (3-20 characters)"
 * />
 * {hasError && <Text color="danger">One or more tags are invalid</Text>}
 *
 * @example With initial tags
 * const [tags, setTags] = useState<string[]>(["react", "typescript", "amino"]);
 * const [inputValue, setInputValue] = useState('');
 *
 * <MultiInput
 *   inputValue={inputValue}
 *   setInputValue={setInputValue}
 *   tags={tags}
 *   setTags={setTags}
 *   placeholder="Add more tags..."
 * />
 *
 * @example With email validation
 * const [emails, setEmails] = useState<string[]>([]);
 * const [inputValue, setInputValue] = useState('');
 * const [hasError, setHasError] = useState(false);
 *
 * const validateEmail = (email: string) => {
 *   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 *   return regex.test(email);
 * };
 *
 * <MultiInput
 *   inputValue={inputValue}
 *   setInputValue={setInputValue}
 *   tags={emails}
 *   setTags={setEmails}
 *   tagValidation={validateEmail}
 *   setHasValidationError={setHasError}
 *   placeholder="Add email addresses..."
 * />
 *
 * @example With custom styling
 * const [tags, setTags] = useState<string[]>([]);
 * const [inputValue, setInputValue] = useState('');
 *
 * <MultiInput
 *   inputValue={inputValue}
 *   setInputValue={setInputValue}
 *   tags={tags}
 *   setTags={setTags}
 *   className="custom-multi-input"
 *   style={{ maxWidth: '500px' }}
 *   placeholder="Add tags..."
 * />
 */
export const MultiInput = ({
  className,
  inputValue,
  placeholder = '',
  setHasValidationError,
  setInputValue,
  setTags,
  style,
  tags,
  tagValidation,
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

  const addTag = (): void => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      setTags([...tags, trimmedValue]);
      setInputValue('');
    }
  };

  const removeTag = (index: number): void => {
    setTags(tags.filter((_, i) => i !== index));
  };

  // Handle key events (Enter, Space, Comma) to create a tag
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (inputKeyPressDelimiters.includes(e.key) && inputValue) {
      e.preventDefault();
      addTag();
    } else if (e.key === 'Backspace') {
      if (inputValue === '' && tags.length > 0) {
        // If no highlighted tag, highlight the last tag
        if (highlightedTagIndex === null) {
          setHighlightedTagIndex(tags.length - 1);
        } else {
          removeTag(highlightedTagIndex);
          setHighlightedTagIndex(null);
        }
      }
    } else if (e.key === 'ArrowLeft') {
      if (highlightedTagIndex === null && tags.length > 0) {
        setHighlightedTagIndex(tags.length - 1);
      } else if (highlightedTagIndex !== null && highlightedTagIndex > 0) {
        setHighlightedTagIndex(highlightedTagIndex - 1);
      }
    } else if (e.key === 'ArrowRight') {
      if (
        highlightedTagIndex !== null &&
        highlightedTagIndex < tags.length - 1
      ) {
        setHighlightedTagIndex(highlightedTagIndex + 1);
      } else {
        setHighlightedTagIndex(null);
      }
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
    const newTags = parseStringIntoTags(pasteData);
    setTags([...tags, ...newTags]);
    setInputValue('');
  };

  // Focus cursor after the tags in the input
  const handleFocus = (): void => {
    if (inputRef.current) {
      inputRef.current.selectionStart = inputRef.current.value.length;
      inputRef.current.selectionEnd = inputRef.current.value.length;
    }
  };

  return (
    <Flex
      alignItems="center"
      className={clsx([className, styles.tagInputWrapper])}
      flexWrap="wrap"
      gap={4}
      style={style}
    >
      {tags.map((tag, index) => {
        const invalid = !!(tagValidation && !tagValidation(tag));
        const highlighted = highlightedTagIndex === index;

        const intent = invalid ? 'error' : 'default';

        return (
          // User could add duplicate tags, so we need to use index as key

          <Flex key={tag + index} alignItems="center" gap={0}>
            <Tag
              highlighted={highlighted}
              intent={intent}
              onClick={() => setHighlightedTagIndex(index)}
              onClose={() => removeTag(index)}
              size="lg"
            >
              {tag}
            </Tag>
          </Flex>
        );
      })}
      <input
        ref={inputRef}
        className={styles.tagInput}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        placeholder={!tags.length ? placeholder : ''}
        value={inputValue}
      />
    </Flex>
  );
};
