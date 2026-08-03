import { createElement, type ReactNode } from 'react';

import { getNodeText } from 'src/utils/getNodeText';

/** JSX is unavailable here — the suite only picks up `.test.ts` files. */
const element = ({ type, children }: { type: string; children: ReactNode[] }) =>
  createElement(type, null, ...children);

describe('getNodeText', () => {
  it('reads plain strings and numbers', () => {
    expect(getNodeText('Country of origin')).toBe('Country of origin');
    expect(getNodeText(0)).toBe('0');
  });

  it('treats nodes that render nothing as having no text', () => {
    // An empty string must not extract as '' — callers rely on undefined to
    // fall back to the component name.
    expect(getNodeText('')).toBeUndefined();
    expect(getNodeText(null)).toBeUndefined();
    expect(getNodeText(undefined)).toBeUndefined();
    expect(getNodeText(false)).toBeUndefined();
    expect(
      getNodeText(element({ type: 'span', children: [] })),
    ).toBeUndefined();
  });

  it('recurses into element children so wrapped labels keep their text', () => {
    expect(
      getNodeText(
        element({
          type: 'span',
          children: [
            'Genus ',
            element({ type: 'em', children: ['(required)'] }),
          ],
        }),
      ),
    ).toBe('Genus (required)');
  });

  it('skips non-rendering siblings instead of padding the text with gaps', () => {
    // A conditional label part (`{isRequired && '*'}`) leaves `false` in the
    // children array; naively joining would yield 'Genus  species'.
    expect(getNodeText(['Genus', false, null, 'species'])).toBe(
      'Genus species',
    );
  });

  it('distinguishes sibling controls whose labels differ deep in the tree', () => {
    // The property test ids depend on: two richly-labeled selects must not
    // collapse onto the same extracted string.
    const industry = element({
      type: 'div',
      children: [
        element({ type: 'strong', children: ['Industry'] }),
        element({ type: 'button', children: ['?'] }),
      ],
    });
    const productGroup = element({
      type: 'div',
      children: [
        element({ type: 'strong', children: ['Product group'] }),
        element({ type: 'button', children: ['?'] }),
      ],
    });
    expect(getNodeText(industry)).toBe('Industry ?');
    expect(getNodeText(productGroup)).toBe('Product group ?');
    expect(getNodeText(industry)).not.toBe(getNodeText(productGroup));
  });
});
