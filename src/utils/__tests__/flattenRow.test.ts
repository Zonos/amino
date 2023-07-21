import { flattenRow } from 'src/utils/flattenRow';

test('flatten table row data', () => {
  const tableDataArr = [
    {
      aggregate: {
        count: 2,
        max: {
          created_at: '2010-04-20T23:06:44',
          duties: 0,
          fees: 0,
        },
      },
      nodes: [
        {
          created_at: '2010-04-20T23:06:44',
          duties: 0,
          fees: 0,
          items: 15.54,
          nodes: [
            {
              created_at: '2010-04-20T23:06:44',
              duties: 0,
              fees: {
                created_at: '2010-04-20T23:06:44',
                duties: 0,
                fees: 0,
                items: 15.54,
                shipping: 35,
                taxes: 0,
              },
              items: 15.54,
              shipping: 35,
              taxes: 0,
            },
            {
              created_at: '2010-04-20T23:06:44',
              duties: 0,
              fees: {
                created_at: '2010-04-20T23:06:44',
                duties: 0,
                fees: 0,
                items: 15.54,
                shipping: 35,
                taxes: 0,
              },
              items: 15.54,
              shipping: 84,
              taxes: 0,
            },
          ],
          shipping: 35,
          taxes: 0,
        },
        {
          created_at: '2010-04-20T23:06:44',
          duties: 0,
          fees: 0,
          items: 15.54,
          nodes: [
            {
              created_at: '2010-04-20T23:06:44',
              duties: 0,
              fees: 0,
              items: 15.54,
              shipping: 35,
              taxes: 0,
            },
            {
              created_at: '2010-04-20T23:06:44',
              duties: 0,
              fees: 0,
              items: 15.54,
              shipping: 84,
              taxes: 0,
            },
          ],
          shipping: 84,
          taxes: 0,
        },
      ],
    },
  ];
  const flattenData = tableDataArr.map((item): Record<string, string> => {
    const row = Object.entries(item).reduce(
      (prev, currentVal) =>
        flattenRow({
          currentVal,
          prev,
        }),
      {},
    );
    return row;
  });

  expect(flattenData).toMatchInlineSnapshot(`
    [
      {
        "aggregate.count": 2,
        "aggregate.created_at.created_at": "2010-04-20T23:06:44",
        "aggregate.duties.duties": 0,
        "aggregate.fees.fees": 0,
        "nodes": [
          {
            "created_at": "2010-04-20T23:06:44",
            "duties": 0,
            "fees": 0,
            "items": 15.54,
            "nodes": [
              {
                "created_at": "2010-04-20T23:06:44",
                "duties": 0,
                "fees.created_at": "2010-04-20T23:06:44",
                "fees.duties": 0,
                "fees.fees": 0,
                "fees.items": 15.54,
                "fees.shipping": 35,
                "fees.taxes": 0,
                "items": 15.54,
                "shipping": 35,
                "taxes": 0,
              },
              {
                "created_at": "2010-04-20T23:06:44",
                "duties": 0,
                "fees.created_at": "2010-04-20T23:06:44",
                "fees.duties": 0,
                "fees.fees": 0,
                "fees.items": 15.54,
                "fees.shipping": 35,
                "fees.taxes": 0,
                "items": 15.54,
                "shipping": 84,
                "taxes": 0,
              },
            ],
            "shipping": 35,
            "taxes": 0,
          },
          {
            "created_at": "2010-04-20T23:06:44",
            "duties": 0,
            "fees": 0,
            "items": 15.54,
            "nodes": [
              {
                "created_at": "2010-04-20T23:06:44",
                "duties": 0,
                "fees": 0,
                "items": 15.54,
                "shipping": 35,
                "taxes": 0,
              },
              {
                "created_at": "2010-04-20T23:06:44",
                "duties": 0,
                "fees": 0,
                "items": 15.54,
                "shipping": 84,
                "taxes": 0,
              },
            ],
            "shipping": 84,
            "taxes": 0,
          },
        ],
      },
    ]
  `);
});

test('flatten table row with complex data', () => {
  const continents = [
    {
      code: 'AF',
      countries: [
        {
          awsRegion: 'af-south-1',
          capital: 'Saint-Denis',
          continent: {
            code: 'AF',
            name: 'Africa',
          },
          languages: [
            {
              name: 'French',
              native: 'Français',
            },
          ],
        },
        {
          awsRegion: 'af-south-1',
          capital: 'Kigali',
          continent: {
            code: 'AF',
            name: 'Africa',
          },
          languages: [
            {
              name: 'Rwandi',
              native: 'Kinyarwandi',
            },
            {
              name: 'English',
              native: 'English',
            },
            {
              name: 'French',
              native: 'Français',
            },
          ],
        },
        {
          awsRegion: 'ap-south-1',
          capital: 'Victoria',
          continent: {
            code: 'AF',
            name: 'Africa',
          },
          languages: [
            {
              name: 'French',
              native: 'Français',
            },
            {
              name: 'English',
              native: 'English',
            },
          ],
        },
        {
          awsRegion: 'af-south-1',
          capital: 'Pretoria',
          continent: {
            code: 'AF',
            name: 'Africa',
          },
          languages: [
            {
              name: 'Afrikaans',
              native: 'Afrikaans',
            },
            {
              name: 'English',
              native: 'English',
            },
            {
              name: 'South Ndebele',
              native: 'isiNdebele',
            },
            {
              name: 'Southern Sotho',
              native: 'Sesotho',
            },
            {
              name: 'Swati',
              native: 'SiSwati',
            },
            {
              name: 'Tswana',
              native: 'Setswana',
            },
            {
              name: 'Tsonga',
              native: 'Xitsonga',
            },
            {
              name: 'Venda',
              native: 'Tshivenḓa',
            },
            {
              name: 'Xhosa',
              native: 'isiXhosa',
            },
            {
              name: 'Zulu',
              native: 'isiZulu',
            },
          ],
        },
      ],
    },
    {
      code: 'AN',
      countries: [
        {
          awsRegion: 'af-south-1',
          capital: null,
          continent: {
            code: 'AN',
            name: 'Antarctica',
          },
          languages: [],
        },
        {
          awsRegion: 'af-south-1',
          capital: null,
          continent: {
            code: 'AN',
            name: 'Antarctica',
          },
          languages: [
            {
              name: 'Norwegian',
              native: 'Norsk',
            },
            {
              name: 'Norwegian Bokmål',
              native: 'Norsk bokmål',
            },
            {
              name: 'Norwegian Nynorsk',
              native: 'Norsk nynorsk',
            },
          ],
        },
        {
          awsRegion: 'af-south-1',
          capital: null,
          continent: {
            code: 'AN',
            name: 'Antarctica',
          },
          languages: [
            {
              name: 'English',
              native: 'English',
            },
          ],
        },
        {
          awsRegion: 'af-south-1',
          capital: 'Port-aux-Français',
          continent: {
            code: 'AN',
            name: 'Antarctica',
          },
          languages: [
            {
              name: 'French',
              native: 'Français',
            },
          ],
        },
      ],
    },
  ];
  const flattenData = continents.map((item): Record<string, string> => {
    const row = Object.entries(item).reduce(
      (prev, currentVal) =>
        flattenRow({
          currentVal,
          prev,
        }),
      {},
    );
    return row;
  });
  expect(flattenData).toMatchInlineSnapshot(`
    [
      {
        "code": "AF",
        "countries": [
          {
            "awsRegion": "af-south-1",
            "capital": "Saint-Denis",
            "continent.code": "AF",
            "continent.name": "Africa",
            "languages": [
              {
                "name": "French",
                "native": "Français",
              },
            ],
          },
          {
            "awsRegion": "af-south-1",
            "capital": "Kigali",
            "continent.code": "AF",
            "continent.name": "Africa",
            "languages": [
              {
                "name": "Rwandi",
                "native": "Kinyarwandi",
              },
              {
                "name": "English",
                "native": "English",
              },
              {
                "name": "French",
                "native": "Français",
              },
            ],
          },
          {
            "awsRegion": "ap-south-1",
            "capital": "Victoria",
            "continent.code": "AF",
            "continent.name": "Africa",
            "languages": [
              {
                "name": "French",
                "native": "Français",
              },
              {
                "name": "English",
                "native": "English",
              },
            ],
          },
          {
            "awsRegion": "af-south-1",
            "capital": "Pretoria",
            "continent.code": "AF",
            "continent.name": "Africa",
            "languages": [
              {
                "name": "Afrikaans",
                "native": "Afrikaans",
              },
              {
                "name": "English",
                "native": "English",
              },
              {
                "name": "South Ndebele",
                "native": "isiNdebele",
              },
              {
                "name": "Southern Sotho",
                "native": "Sesotho",
              },
              {
                "name": "Swati",
                "native": "SiSwati",
              },
              {
                "name": "Tswana",
                "native": "Setswana",
              },
              {
                "name": "Tsonga",
                "native": "Xitsonga",
              },
              {
                "name": "Venda",
                "native": "Tshivenḓa",
              },
              {
                "name": "Xhosa",
                "native": "isiXhosa",
              },
              {
                "name": "Zulu",
                "native": "isiZulu",
              },
            ],
          },
        ],
      },
      {
        "code": "AN",
        "countries": [
          {
            "awsRegion": "af-south-1",
            "capital": "",
            "continent.code": "AN",
            "continent.name": "Antarctica",
            "languages": [],
          },
          {
            "awsRegion": "af-south-1",
            "capital": "",
            "continent.code": "AN",
            "continent.name": "Antarctica",
            "languages": [
              {
                "name": "Norwegian",
                "native": "Norsk",
              },
              {
                "name": "Norwegian Bokmål",
                "native": "Norsk bokmål",
              },
              {
                "name": "Norwegian Nynorsk",
                "native": "Norsk nynorsk",
              },
            ],
          },
          {
            "awsRegion": "af-south-1",
            "capital": "",
            "continent.code": "AN",
            "continent.name": "Antarctica",
            "languages": [
              {
                "name": "English",
                "native": "English",
              },
            ],
          },
          {
            "awsRegion": "af-south-1",
            "capital": "Port-aux-Français",
            "continent.code": "AN",
            "continent.name": "Antarctica",
            "languages": [
              {
                "name": "French",
                "native": "Français",
              },
            ],
          },
        ],
      },
    ]
  `);
});
