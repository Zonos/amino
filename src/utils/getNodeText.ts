import { isValidElement, type ReactNode } from 'react';

/**
 * Best-effort plain-text reading of a `ReactNode`.
 *
 * Label props accept arbitrary markup (an icon beside the text, a tooltip
 * trigger, a translated fragment), but test ids and other string-only consumers
 * still need something readable. Recursing into children keeps those ids
 * meaningful — and distinct between sibling controls — instead of collapsing
 * every richly-labeled control onto the same component-name fallback.
 *
 * Returns `undefined` when the node carries no readable text, which lets callers
 * fall back the same way they do for an absent label.
 */
export const getNodeText = (node: unknown): string | undefined => {
  if (typeof node === 'string') {
    return node || undefined;
  }
  if (typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    const text = node
      .map(getNodeText)
      .filter(Boolean)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
    return text || undefined;
  }
  // Booleans, null and undefined render nothing, so they read as no text.
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getNodeText(node.props.children);
  }
  return undefined;
};
