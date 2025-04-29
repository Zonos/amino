import { convertPxToRem } from 'build-utils/css/utils/convertPxToRem';

type UnitTest = {
  expected: string;
  fontBase?: number;
  pixel: number;
};
const testCases: UnitTest[] = [
  {
    expected: '0',
    fontBase: 16,
    pixel: 0,
  },
  {
    expected: '0.75rem',
    fontBase: 16,
    pixel: 12,
  },
  {
    expected: '0.875rem',
    fontBase: 16,
    pixel: 14,
  },
  {
    expected: '1rem',
    fontBase: 16,
    pixel: 16,
  },
  {
    expected: '1.375rem',
    fontBase: 16,
    pixel: 22,
  },
  {
    expected: '1.5rem',
    fontBase: 16,
    pixel: 24,
  },
  {
    expected: '0.857rem',
    fontBase: 14,
    pixel: 12,
  },
  {
    expected: '1rem',
    fontBase: 14,
    pixel: 14,
  },
  {
    expected: '1.143rem',
    fontBase: 14,
    pixel: 16,
  },
  {
    expected: '1.571rem',
    fontBase: 14,
    pixel: 22,
  },
  {
    expected: '1.714rem',
    fontBase: 14,
    pixel: 24,
  },
];

describe('Make sure convertPxToRem work properly', () => {
  test.each(testCases)(
    'fontBase: $fontBase - pixel: $pixel',
    ({ expected, fontBase, pixel }) => {
      expect(convertPxToRem(pixel, fontBase)).toBe(expected);
    },
  );
});
