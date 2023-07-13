import { type MutableRefObject, useEffect, useState } from 'react';

/** @desc Get the computed style of a component */
const getComputedStyle = (
  element: HTMLTextAreaElement,
  property: keyof CSSStyleDeclaration,
) => window.getComputedStyle(element)[property] as string;

type TextareaParams = {
  initialRows?: number;
  // when expanding textarea, it will expand up to maxRows
  maxRows?: number;
  ref: MutableRefObject<HTMLTextAreaElement | null>;
  shouldExpand: boolean;
  textareaValue: string;
};

/**
 * This hook is used to adjust the height of textarea to the defined `maxRows`. It will
 * expand the height of textarea up to `maxRows` and then it will add scroll bar.
 */
export const useHeightAdjustTextarea = ({
  initialRows = 2,
  maxRows = 5,
  ref,
  shouldExpand,
  textareaValue,
}: TextareaParams) => {
  const [originalHeight, setOriginalHeight] = useState(0);

  useEffect(() => {
    const textarea = ref.current;
    if (!textarea || !shouldExpand) {
      return;
    }

    const height = parseFloat(getComputedStyle(textarea, 'height'));
    const lineHeight = parseFloat(getComputedStyle(textarea, 'lineHeight'));
    const paddingTop =
      parseFloat(getComputedStyle(textarea, 'paddingTop')) || 0;
    const paddingBottom =
      parseFloat(getComputedStyle(textarea, 'paddingBottom')) || 0;

    if (!originalHeight) {
      setOriginalHeight(height);
    }

    // max rows converted to px
    const maxHeightToScroll = lineHeight * maxRows + paddingTop + paddingBottom;

    // shrink it to zero in case the content shrink
    textarea.style.height = '0';

    // raise the textarea height when it's less max number of rows height
    if (textarea.scrollHeight <= maxHeightToScroll) {
      const adjustedHeight = Math.max(originalHeight, textarea.scrollHeight);

      textarea.style.height = `${adjustedHeight}px`;
      textarea.style.overflow = 'hidden';
    } else {
      textarea.style.height = `${maxHeightToScroll}px`;
      textarea.style.overflow = 'auto';
    }
  }, [ref, maxRows, textareaValue, shouldExpand, originalHeight, initialRows]);
};
