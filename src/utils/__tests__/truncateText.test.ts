import { truncateText } from '../truncateText';

type TestCaseType = {
  length: number;
  ellipses: boolean;
  text: string;
  expected: string;
};

const testCases: TestCaseType[] = [
  {
    length: 30,
    ellipses: true,
    text: 'Tooltips should stay under 128 characters and be limited to two lines.',
    expected: 'Tooltips should stay under 128 ...',
  },
  {
    length: 25,
    ellipses: true,
    text: 'https://articulo.mercadolibre.com.mx/MLM-770177066-caminadora-electrica-3-hp-bluetooth-inclinacion-uso-rudo-app-_JM',
    expected: 'https://articulo.mercadol...',
  },
  {
    length: 30,
    ellipses: false,
    text: ' This example shows a tooltip with the max amount of characters.',
    expected: ' This example shows a tooltip ',
  },
  {
    length: 30,
    ellipses: false,
    text: 'https://articulo.mercadolibre.com.mx/MLM-770177066-caminadora-electrica-3-hp-bluetooth-inclinacion-uso-rudo-app-_JM',
    expected: 'https://articulo.mercadolibre.',
  },
  {
    length: 9,
    ellipses: true,
    text: '(435) 555-4327',
    expected: '(435) ...',
  },
];

test.each(testCases)(
  'returns truncated text correctly',
  ({ text, length, ellipses, expected }) => {
    expect(truncateText({ length, text, addEllipses: ellipses })).toBe(
      expected
    );
  }
);
