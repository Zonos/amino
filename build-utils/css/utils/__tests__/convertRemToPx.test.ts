import { convertRemToPx } from '../convertRemToPx';

type UnitTest = {
  rem: number;
  fontBase?: number;
  expected: string;
};
const testCases: UnitTest[] = [
  {
    rem: 0,
    fontBase: 16,
    expected: '0',
  },
  {
    rem: 0.75,
    fontBase: 16,
    expected: '12px',
  },
  {
    rem: 0.875,
    fontBase: 16,
    expected: '14px',
  },
  {
    rem: 1,
    fontBase: 16,
    expected: '16px',
  },
  {
    rem: 1.375,
    fontBase: 16,
    expected: '22px',
  },
  {
    rem: 1.5,
    fontBase: 16,
    expected: '24px',
  },
  {
    rem: 0.857,
    fontBase: 14,
    expected: '12px',
  },
  {
    rem: 1,
    fontBase: 14,
    expected: '14px',
  },
  {
    rem: 1.143,
    fontBase: 14,
    expected: '16px',
  },
  {
    rem: 1.571,
    fontBase: 14,
    expected: '22px',
  },
  {
    rem: 1.714,
    fontBase: 14,
    expected: '24px',
  },
  {
    rem: 1.857,
    fontBase: 14,
    expected: '26px',
  },
];

describe('Make sure convertRemToPx work properly', () => {
  test.each(testCases)(
    'fontBase: $fontBase - rem: $rem',
    ({ rem, fontBase, expected }) => {
      expect(convertRemToPx(rem, fontBase)).toBe(expected);
    }
  );
});
