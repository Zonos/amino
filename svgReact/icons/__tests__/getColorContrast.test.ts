import { getHspFromColor } from '../getColorContrast';

const colors = [
  { label: '--amino-green-l80', value: '#e5f9e5' },
  { label: '--amino-green-l60', value: '#99e799' },
  { label: '--amino-green-l40', value: '#66db66' },
  { label: '--amino-green-l20', value: '#33cf33' },
  { label: '--amino-green-base', value: '#00c300' },
  { label: '--amino-green-d20', value: '#009c00' },
  { label: '--amino-green-d40', value: '#007500' },
  { label: '--amino-green-d60', value: '#004e00' },
  { label: '--amino-green-d80', value: '#17311a' },
  { label: '--amino-gray-l80', value: '#f5f5f6' },
  { label: '--amino-gray-l60', value: '#d8d8db' },
  { label: '--amino-gray-l40', value: '#c4c4c9' },
  { label: '--amino-gray-l20', value: '#b1b1b7' },
  { label: '--amino-gray-base', value: '#9d9da5' },
  { label: '--amino-gray-d20', value: '#76767c' },
  { label: '--amino-gray-d40', value: '#4f4f52' },
  { label: '--amino-gray-d60', value: '#2f2f31' },
  { label: '--amino-gray-d80', value: '#232326' },
  { label: 'light-gray', value: '#C9C9CD' },
  { label: 'dark-gray', value: '#3E3E42' },
  { label: 'light-gray', value: '#3D3D42' },
  { label: 'dark-gray', value: '#CACACE' },
];

test.each(colors)('getHspFromColor $label: $value', ({ label, value }) => {
  const result = getHspFromColor(value);

  if (/(l80|l60|l40|l20)/.test(label)) {
    expect(result.contrast).toBe('light');
  } else if (/(d80|d60|d40|d20)/.test(label)) {
    expect(result.contrast).toBe('dark');
  } else {
    expect(getHspFromColor(value)).toMatchSnapshot();
  }
});

test('sort colors', () => {
  const sortedHsps = colors
    .map(x => ({ ...x, ...getHspFromColor(x.value) }))
    .sort((a, b) => (a.hsp > b.hsp ? -1 : 1));
  expect(sortedHsps).toMatchInlineSnapshot(`
    [
      {
        "contrast": "light",
        "hsp": 245.1142060346564,
        "label": "--amino-gray-l80",
        "value": "#f5f5f6",
      },
      {
        "contrast": "light",
        "hsp": 240.94132065712597,
        "label": "--amino-green-l80",
        "value": "#e5f9e5",
      },
      {
        "contrast": "light",
        "hsp": 216.3441009133367,
        "label": "--amino-gray-l60",
        "value": "#d8d8db",
      },
      {
        "contrast": "light",
        "hsp": 202.46190752830518,
        "label": "--amino-green-l60",
        "value": "#99e799",
      },
      {
        "contrast": "light",
        "hsp": 202.45999110935472,
        "label": "dark-gray",
        "value": "#CACACE",
      },
      {
        "contrast": "light",
        "hsp": 201.46001092028163,
        "label": "light-gray",
        "value": "#C9C9CD",
      },
      {
        "contrast": "light",
        "hsp": 196.57642279785233,
        "label": "--amino-gray-l40",
        "value": "#c4c4c9",
      },
      {
        "contrast": "light",
        "hsp": 180.13872154536904,
        "label": "--amino-green-l40",
        "value": "#66db66",
      },
      {
        "contrast": "light",
        "hsp": 177.6942317578148,
        "label": "--amino-gray-l20",
        "value": "#b1b1b7",
      },
      {
        "contrast": "light",
        "hsp": 161.94621329317954,
        "label": "--amino-green-l20",
        "value": "#33cf33",
      },
      {
        "contrast": "light",
        "hsp": 157.93246657986444,
        "label": "--amino-gray-base",
        "value": "#9d9da5",
      },
      {
        "contrast": "light",
        "hsp": 149.40105421314803,
        "label": "--amino-green-base",
        "value": "#00c300",
      },
      {
        "contrast": "dark",
        "hsp": 119.52084337051843,
        "label": "--amino-green-d20",
        "value": "#009c00",
      },
      {
        "contrast": "dark",
        "hsp": 118.69931760545214,
        "label": "--amino-gray-d20",
        "value": "#76767c",
      },
      {
        "contrast": "dark",
        "hsp": 89.64063252788883,
        "label": "--amino-green-d40",
        "value": "#007500",
      },
      {
        "contrast": "dark",
        "hsp": 79.34772838588387,
        "label": "--amino-gray-d40",
        "value": "#4f4f52",
      },
      {
        "contrast": "dark",
        "hsp": 62.46893628036258,
        "label": "dark-gray",
        "value": "#3E3E42",
      },
      {
        "contrast": "dark",
        "hsp": 61.590502514592295,
        "label": "light-gray",
        "value": "#3D3D42",
      },
      {
        "contrast": "dark",
        "hsp": 59.76042168525922,
        "label": "--amino-green-d60",
        "value": "#004e00",
      },
      {
        "contrast": "dark",
        "hsp": 47.23227709945816,
        "label": "--amino-gray-d60",
        "value": "#2f2f31",
      },
      {
        "contrast": "dark",
        "hsp": 40.55393938941074,
        "label": "--amino-green-d80",
        "value": "#17311a",
      },
      {
        "contrast": "dark",
        "hsp": 35.35485822344646,
        "label": "--amino-gray-d80",
        "value": "#232326",
      },
    ]
  `);
});
