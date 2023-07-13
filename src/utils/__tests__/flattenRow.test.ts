import { flattenRow } from '../flattenRow';

test.only('flatten table row data', () => {
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
    Array [
      Object {
        "code": "AF",
        "countries": Array [
          Object {
            "awsRegion": "af-south-1",
            "capital": "Saint-Denis",
            "continent.code": "AF",
            "continent.name": "Africa",
            "languages": Array [
              Object {
                "name": "French",
                "native": "Français",
              },
            ],
          },
          Object {
            "awsRegion": "af-south-1",
            "capital": "Kigali",
            "continent.code": "AF",
            "continent.name": "Africa",
            "languages": Array [
              Object {
                "name": "Rwandi",
                "native": "Kinyarwandi",
              },
              Object {
                "name": "English",
                "native": "English",
              },
              Object {
                "name": "French",
                "native": "Français",
              },
            ],
          },
          Object {
            "awsRegion": "ap-south-1",
            "capital": "Victoria",
            "continent.code": "AF",
            "continent.name": "Africa",
            "languages": Array [
              Object {
                "name": "French",
                "native": "Français",
              },
              Object {
                "name": "English",
                "native": "English",
              },
            ],
          },
          Object {
            "awsRegion": "af-south-1",
            "capital": "Pretoria",
            "continent.code": "AF",
            "continent.name": "Africa",
            "languages": Array [
              Object {
                "name": "Afrikaans",
                "native": "Afrikaans",
              },
              Object {
                "name": "English",
                "native": "English",
              },
              Object {
                "name": "South Ndebele",
                "native": "isiNdebele",
              },
              Object {
                "name": "Southern Sotho",
                "native": "Sesotho",
              },
              Object {
                "name": "Swati",
                "native": "SiSwati",
              },
              Object {
                "name": "Tswana",
                "native": "Setswana",
              },
              Object {
                "name": "Tsonga",
                "native": "Xitsonga",
              },
              Object {
                "name": "Venda",
                "native": "Tshivenḓa",
              },
              Object {
                "name": "Xhosa",
                "native": "isiXhosa",
              },
              Object {
                "name": "Zulu",
                "native": "isiZulu",
              },
            ],
          },
        ],
      },
      Object {
        "code": "AN",
        "countries": Array [
          Object {
            "awsRegion": "af-south-1",
            "capital": "",
            "continent.code": "AN",
            "continent.name": "Antarctica",
            "languages": Array [],
          },
          Object {
            "awsRegion": "af-south-1",
            "capital": "",
            "continent.code": "AN",
            "continent.name": "Antarctica",
            "languages": Array [
              Object {
                "name": "Norwegian",
                "native": "Norsk",
              },
              Object {
                "name": "Norwegian Bokmål",
                "native": "Norsk bokmål",
              },
              Object {
                "name": "Norwegian Nynorsk",
                "native": "Norsk nynorsk",
              },
            ],
          },
          Object {
            "awsRegion": "af-south-1",
            "capital": "",
            "continent.code": "AN",
            "continent.name": "Antarctica",
            "languages": Array [
              Object {
                "name": "English",
                "native": "English",
              },
            ],
          },
          Object {
            "awsRegion": "af-south-1",
            "capital": "Port-aux-Français",
            "continent.code": "AN",
            "continent.name": "Antarctica",
            "languages": Array [
              Object {
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
