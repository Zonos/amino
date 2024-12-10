import { truncateText, type TruncateTextParams } from 'src/utils/truncateText';

type TestCaseType = {
  expected: ReturnType<typeof truncateText>;
} & TruncateTextParams;

const testCases: TestCaseType[] = [
  {
    addEllipsis: true,
    expected: 'Tooltips should stay under 128...',
    length: 30,
    text: 'Tooltips should stay under 128 characters and be limited to two lines.',
  },
  {
    addEllipsis: true,
    expected: 'https://articulo.mercadol...',
    length: 25,
    text: 'https://articulo.mercadolibre.com.mx/MLM-770177066-caminadora-electrica-3-hp-bluetooth-inclinacion-uso-rudo-app-_JM',
  },
  {
    addEllipsis: false,
    expected: ' This example shows a tooltip ',
    length: 30,
    text: ' This example shows a tooltip with the max amount of characters.',
  },
  {
    addEllipsis: false,
    expected: 'https://articulo.mercadolibre.',
    length: 30,
    text: 'https://articulo.mercadolibre.com.mx/MLM-770177066-caminadora-electrica-3-hp-bluetooth-inclinacion-uso-rudo-app-_JM',
  },
  {
    addEllipsis: true,
    expected: '(435) 555...',
    length: 9,
    text: '(435) 555-4327',
  },
  {
    addEllipsis: true,
    expected: '... 555-4327',
    fromFront: true,
    length: 9,
    text: '(435) 555-4327',
  },
  {
    addEllipsis: true,
    expected: '1234',
    fromFront: true,
    length: 6,
    text: '1234',
  },
  {
    addEllipsis: true,
    expected: '...5-4327',
    fromFront: true,
    includeEllipsisLength: true,
    length: 9,
    text: '(435) 555-4327',
  },
  {
    addEllipsis: true,
    expected: '(435) ...',
    includeEllipsisLength: true,
    length: 9,
    text: '(435) 555-4327',
  },
];

test.each(testCases)(
  'returns truncated text correctly',
  ({ expected, ...params }) => {
    expect(truncateText(params)).toBe(expected);
  },
);
