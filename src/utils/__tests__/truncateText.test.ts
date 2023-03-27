import { truncateText, TruncateTextParams } from '../truncateText';

type TestCaseType = {
  expected: ReturnType<typeof truncateText>;
} & TruncateTextParams;

const testCases: TestCaseType[] = [
  {
    length: 30,
    addEllipsis: true,
    text: 'Tooltips should stay under 128 characters and be limited to two lines.',
    expected: 'Tooltips should stay under 128...',
  },
  {
    length: 25,
    addEllipsis: true,
    text: 'https://articulo.mercadolibre.com.mx/MLM-770177066-caminadora-electrica-3-hp-bluetooth-inclinacion-uso-rudo-app-_JM',
    expected: 'https://articulo.mercadol...',
  },
  {
    length: 30,
    addEllipsis: false,
    text: ' This example shows a tooltip with the max amount of characters.',
    expected: ' This example shows a tooltip ',
  },
  {
    length: 30,
    addEllipsis: false,
    text: 'https://articulo.mercadolibre.com.mx/MLM-770177066-caminadora-electrica-3-hp-bluetooth-inclinacion-uso-rudo-app-_JM',
    expected: 'https://articulo.mercadolibre.',
  },
  {
    length: 9,
    addEllipsis: true,
    text: '(435) 555-4327',
    expected: '(435) 555...',
  },
  {
    length: 9,
    addEllipsis: true,
    fromFront: true,
    text: '(435) 555-4327',
    expected: '... 555-4327',
  },
  {
    length: 6,
    addEllipsis: true,
    fromFront: true,
    text: '1234',
    expected: '1234',
  },
  {
    length: 9,
    addEllipsis: true,
    fromFront: true,
    includeEllipsisLength: true,
    text: '(435) 555-4327',
    expected: '...5-4327',
  },
  {
    length: 9,
    addEllipsis: true,
    includeEllipsisLength: true,
    text: '(435) 555-4327',
    expected: '(435) ...',
  },
];

test.each(testCases)(
  'returns truncated text correctly',
  ({ expected, ...params }) => {
    expect(truncateText(params)).toBe(expected);
  }
);
