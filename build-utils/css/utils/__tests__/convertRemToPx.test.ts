import { convertRemToPx } from 'build-utils/css/utils/convertRemToPx';

type UnitTest = {
  expected: string;
  fontBase?: number;
  rem: number;
};
const testCases: UnitTest[] = [
  {
    expected: '0',
    fontBase: 16,
    rem: 0,
  },
  {
    expected: '12px',
    fontBase: 16,
    rem: 0.75,
  },
  {
    expected: '14px',
    fontBase: 16,
    rem: 0.875,
  },
  {
    expected: '16px',
    fontBase: 16,
    rem: 1,
  },
  {
    expected: '22px',
    fontBase: 16,
    rem: 1.375,
  },
  {
    expected: '24px',
    fontBase: 16,
    rem: 1.5,
  },
  {
    expected: '12px',
    fontBase: 14,
    rem: 0.857,
  },
  {
    expected: '14px',
    fontBase: 14,
    rem: 1,
  },
  {
    expected: '16px',
    fontBase: 14,
    rem: 1.143,
  },
  {
    expected: '22px',
    fontBase: 14,
    rem: 1.571,
  },
  {
    expected: '24px',
    fontBase: 14,
    rem: 1.714,
  },
  {
    expected: '26px',
    fontBase: 14,
    rem: 1.857,
  },
];

describe('Make sure convertRemToPx work properly', () => {
  test.each(testCases)(
    'fontBase: $fontBase - rem: $rem',
    ({ expected, fontBase, rem }) => {
      expect(convertRemToPx(rem, fontBase)).toBe(expected);
    },
  );
});
