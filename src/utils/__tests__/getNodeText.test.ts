import { createElement, type ReactNode } from 'react';

import { getNodeText } from 'src/utils/getNodeText';

/** JSX is unavailable here — the suite only picks up `.test.ts` files. */
const element = ({ children, type }: { children: ReactNode[]; type: string }) =>
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
      getNodeText(element({ children: [], type: 'span' })),
    ).toBeUndefined();
    // Whitespace-only strings read as no text, not as '   '.
    expect(getNodeText('   ')).toBeUndefined();
  });

  it('normalizes whitespace regardless of nesting', () => {
    expect(getNodeText('  HS  code  ')).toBe('HS code');
    expect(
      getNodeText(element({ children: ['  HS  code  '], type: 'span' })),
    ).toBe('HS code');
  });

  it('reads non-array iterables the same way React renders them', () => {
    expect(getNodeText(new Set(['Genus', 'species']))).toBe('Genus species');
  });

  it('cannot read text a component renders from props', () => {
    // `<Translate text="HS code" />` keeps its text in a prop, which is
    // unreachable without rendering. Callers must not rely on extraction for
    // component labels: test ids fall back to the component name, and
    // accessible names come from the <label> association rather than an
    // extracted aria-label.
    const TranslateLike = ({ text }: { text: string }) => text;
    expect(
      getNodeText(createElement(TranslateLike, { text: 'HS code' })),
    ).toBeUndefined();
    // A component nested in markup contributes nothing — only the host text
    // around it survives.
    expect(
      getNodeText(
        element({
          children: [
            'HS code ',
            createElement(TranslateLike, { text: '(optional)' }),
          ],
          type: 'span',
        }),
      ),
    ).toBe('HS code');
  });

  it('recurses into element children so wrapped labels keep their text', () => {
    expect(
      getNodeText(
        element({
          children: [
            'Genus ',
            element({ children: ['(required)'], type: 'em' }),
          ],
          type: 'span',
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
      children: [
        element({ children: ['Industry'], type: 'strong' }),
        element({ children: ['?'], type: 'button' }),
      ],
      type: 'div',
    });
    const productGroup = element({
      children: [
        element({ children: ['Product group'], type: 'strong' }),
        element({ children: ['?'], type: 'button' }),
      ],
      type: 'div',
    });
    expect(getNodeText(industry)).toBe('Industry ?');
    expect(getNodeText(productGroup)).toBe('Product group ?');
    expect(getNodeText(industry)).not.toBe(getNodeText(productGroup));
  });
});
