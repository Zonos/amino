import { convertPxToRem } from '../convertPxToRem';

type UnitTest = {
  pixel: number;
  fontBase?: number;
  expected: string;
};
const testCases: UnitTest[] = [
  {
    pixel: 0,
    fontBase: 16,
    expected: '0',
  },
  {
    pixel: 12,
    fontBase: 16,
    expected: '0.75rem',
  },
  {
    pixel: 14,
    fontBase: 16,
    expected: '0.875rem',
  },
  {
    pixel: 16,
    fontBase: 16,
    expected: '1rem',
  },
  {
    pixel: 22,
    fontBase: 16,
    expected: '1.375rem',
  },
  {
    pixel: 24,
    fontBase: 16,
    expected: '1.5rem',
  },
  {
    pixel: 12,
    fontBase: 14,
    expected: '0.857rem',
  },
  {
    pixel: 14,
    fontBase: 14,
    expected: '1rem',
  },
  {
    pixel: 16,
    fontBase: 14,
    expected: '1.143rem',
  },
  {
    pixel: 22,
    fontBase: 14,
    expected: '1.571rem',
  },
  {
    pixel: 24,
    fontBase: 14,
    expected: '1.714rem',
  },
];

describe('Make sure convertPxToRem work properly', () => {
  test.each(testCases)(
    'fontBase: $fontBase - pixel: $pixel',
    ({ pixel, fontBase, expected }) => {
      expect(convertPxToRem(pixel, fontBase)).toBe(expected);
    }
  );
});
