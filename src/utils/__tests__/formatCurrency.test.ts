import { formatCurrency, getDualCurrency } from 'src/utils/formatCurrency';

const { language: defaultLanguage } = navigator;

describe('formatCurrency', () => {
  type Test = {
    expected: string;
    input: Parameters<typeof formatCurrency>[0];
  };

  const tests: Test[] = [
    {
      expected: '1,234.56',
      input: {
        code: 'USD',
        value: 1_234.56,
      },
    },
    {
      expected: '-40.23',
      input: {
        code: 'AUD',
        value: -40.23,
      },
    },
    {
      expected: '1,000.23',
      input: {
        code: 'CAD',
        value: 1_000.23,
      },
    },
    {
      expected: '2,349,000',
      input: {
        code: 'VND',
        value: 2_349_000,
      },
    },
  ];

  tests.forEach(({ expected, input }) => {
    it(`should format ${input.value} to ${expected}`, () => {
      expect(formatCurrency(input)).toBe(expected);
    });
  });
});

describe('formatCurrency (langauge code: it)', () => {
  beforeAll(() => {
    // Mock navigator.language
    const mockNavigatorLanguage = 'it';
    Object.defineProperty(navigator, 'language', {
      configurable: true,
      value: mockNavigatorLanguage,
    });
  });

  afterAll(() => {
    Object.defineProperty(navigator, 'language', {
      configurable: true,
      value: defaultLanguage,
    });
  });

  type Test = {
    expected: string;
    input: Parameters<typeof formatCurrency>[0];
  };

  const tests: Test[] = [
    {
      expected: '1.234,56',
      input: {
        code: 'USD',
        value: 1_234.56,
      },
    },
    {
      expected: '-40,23',
      input: {
        code: 'AUD',
        value: -40.23,
      },
    },
    {
      expected: '1.000,23',
      input: {
        code: 'CAD',
        value: 1_000.23,
      },
    },
    {
      expected: '2.349.000',
      input: {
        code: 'VND',
        value: 2_349_000,
      },
    },
  ];

  tests.forEach(({ expected, input }) => {
    it(`should format ${input.value} to ${expected}`, () => {
      expect(formatCurrency(input)).toBe(expected);
    });
  });
});

describe('getDualCurrency', () => {
  type Test = {
    expected: ReturnType<typeof getDualCurrency>;
    input: Parameters<typeof getDualCurrency>[0];
  };

  const tests: Test[] = [
    {
      expected: {
        foreign: {
          code: 'CAD',
          value: '-49.48',
        },
        local: {
          code: 'USD',
          value: '-40.23',
        },
      },
      input: {
        conversionRate: 1.23,
        foreignCode: 'CAD',
        localCode: 'USD',
        value: -40.23,
      },
    },
    {
      expected: {
        foreign: {
          code: 'CAD',
          value: '5.20',
        },
        local: {
          code: 'USD',
          value: '4.23',
        },
      },
      input: {
        conversionRate: 1.23,
        foreignCode: 'CAD',
        localCode: 'USD',
        value: 4.23,
      },
    },
    {
      expected: {
        foreign: {
          code: 'VND',
          value: '2,603,069',
        },
        local: {
          code: 'CAD',
          value: '128.23',
        },
      },
      input: {
        conversionRate: 20_300,
        foreignCode: 'VND',
        localCode: 'CAD',
        value: 128.23,
      },
    },
    {
      expected: {
        foreign: {
          code: 'VND',
          value: '-2,603,069',
        },
        local: {
          code: 'CAD',
          value: '-128.23',
        },
      },
      input: {
        conversionRate: 20_300,
        foreignCode: 'VND',
        localCode: 'CAD',
        value: -128.23,
      },
    },
  ];

  tests.forEach(({ expected, input }) => {
    it(`should format ${input.value}`, () => {
      expect(getDualCurrency(input)).toEqual(expected);
    });
  });
});
