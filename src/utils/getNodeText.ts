import { isValidElement, type ReactNode } from 'react';

const extractText = (node: unknown): string => {
  if (typeof node === 'string') {
    return node;
  }
  if (typeof node === 'number') {
    return String(node);
  }
  // Text living in other props (`<Translate text="…" />`) is unreachable
  // without rendering the component, so a component element with no children
  // reads as no text and callers fall back as if the label were absent.
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return extractText(node.props.children);
  }
  // Arrays and other iterables (React renders both).
  if (typeof node === 'object' && node !== null && Symbol.iterator in node) {
    return Array.from(node as Iterable<unknown>)
      .map(extractText)
      .filter(Boolean)
      .join(' ');
  }
  // Booleans, null and undefined render nothing, so they read as no text.
  return '';
};

/**
 * Best-effort plain-text reading of a `ReactNode`.
 *
 * Label props accept arbitrary markup (an icon beside the text, a tooltip
 * trigger, a translated fragment), but test ids and other string-only consumers
 * still need something readable. Recursing into children keeps those ids
 * meaningful — and distinct between sibling controls — instead of collapsing
 * every richly-labeled control onto the same component-name fallback.
 *
 * Only host content is readable: a component element that renders its text
 * from props (`<Translate text="…" />`) reads as no text here.
 *
 * Returns `undefined` when the node carries no readable text, which lets
 * callers fall back the same way they do for an absent label.
 */
export const getNodeText = (node: unknown): string | undefined => {
  const text = extractText(node).replace(/\s+/g, ' ').trim();
  return text || undefined;
};
