import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { describe, expect, it } from 'vitest';

import { Switch } from 'src/components/switch/Switch';

/**
 * Written in `.ts` with `createElement` rather than `.tsx` because vitest only
 * collects `**\/*.test.ts`.
 */
const render = (props: Parameters<typeof Switch>[0]) =>
  renderToStaticMarkup(createElement(Switch, props));

/** The two icons sit in absolutely-positioned wrappers pinned to opposite edges. */
const edgeOf = (markup: string, marker: string) => {
  const wrappers = [
    ...markup.matchAll(
      /<div class="absolute top-1 (right-auto left-1|right-1 left-auto)">(.*?)<\/div>/g,
    ),
  ];
  const hit = wrappers.find(match => match[2]?.includes(marker));
  if (!hit) {
    return 'absent';
  }
  return hit[1] === 'right-auto left-1' ? 'left' : 'right';
};

describe('Switch', () => {
  it('renders each switch icon on the edge its prop name promises', () => {
    const markup = render({
      checked: false,
      onChange: () => {},
      switchIconLeft: createElement('span', { 'data-testid': 'iconLeft' }),
      switchIconRight: createElement('span', { 'data-testid': 'iconRight' }),
    });

    expect(edgeOf(markup, 'iconLeft')).toBe('left');
    expect(edgeOf(markup, 'iconRight')).toBe('right');
  });

  it.each([
    ['with icons', { switchIconLeft: createElement('span') }],
    ['without icons', {}],
  ])('gives the id to the input alone, %s', (_label, extra) => {
    const markup = render({ checked: false, onChange: () => {}, ...extra });

    // The knob used to reuse the input's id, putting the same id on two nodes.
    expect([...markup.matchAll(/ id="/g)]).toHaveLength(1);
    expect(markup).toMatch(/<input[^>]* id="/);
  });
});
