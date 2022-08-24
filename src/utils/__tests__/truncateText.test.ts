import { truncateText, TruncateTextParams } from '../truncateText';

type TestCaseType = {
  expected: ReturnType<typeof truncateText>;
} & TruncateTextParams;

const testCases: TestCaseType[] = [
  {
    length: 30,
    addEllipses: true,
    text: 'Tooltips should stay under 128 characters and be limited to two lines.',
    expected: 'Tooltips should stay under 128 ...',
  },
  {
    length: 25,
    addEllipses: true,
    text: 'https://articulo.mercadolibre.com.mx/MLM-770177066-caminadora-electrica-3-hp-bluetooth-inclinacion-uso-rudo-app-_JM',
    expected: 'https://articulo.mercadol...',
  },
  {
    length: 30,
    addEllipses: false,
    text: ' This example shows a tooltip with the max amount of characters.',
    expected: ' This example shows a tooltip ',
  },
  {
    length: 30,
    addEllipses: false,
    text: 'https://articulo.mercadolibre.com.mx/MLM-770177066-caminadora-electrica-3-hp-bluetooth-inclinacion-uso-rudo-app-_JM',
    expected: 'https://articulo.mercadolibre.',
  },
  {
    length: 9,
    addEllipses: true,
    text: '(435) 555-4327',
    expected: '(435) ...',
  },
  {
    length: 9,
    text: null,
    expected: null,
  },
];

test.each(testCases)(
  'returns truncated text correctly',
  ({ text, length, addEllipses, expected }) => {
    expect(truncateText({ length, text, addEllipses })).toBe(expected);
  }
);
