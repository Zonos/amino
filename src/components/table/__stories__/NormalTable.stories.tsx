import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Currency } from 'src/components/currency/Currency';
import { Text } from 'src/components/text/Text';
import { Tooltip } from 'src/components/tooltip/Tooltip';
import { truncateText } from 'src/utils/truncateText';

import { type TableProps, Table } from '../Table';
import { TableBody } from '../TableBody';
import { TableCell } from '../TableCell';
import { TableHead } from '../TableHead';
import { TableRow } from '../TableRow';

const NormalTableMeta: Meta = {
  component: Table,
};

export default NormalTableMeta;

type ProductProps = {
  cursor: string;
  node: {
    id: string;
    imageUrl: string | null;
    catalogItemUrl: string | null;
    name: string;
    description: string;
    amount: number | null;
    material: string;
    currencyCode: string | null;
    countryOfOrigin: string | null;
    brand: string | null;
    countryOfOriginSource: string | null;
    sku: string;
    provinceOfOrigin: string | null;
    productId: string;
    categories: string[];
    nonShippable: boolean;
    measurements: {
      source: string;
      type: string;
      unitOfMeasure: string;
      value: number;
    }[];
    classifications: unknown[];
  };
};

const Template: StoryFn<
  TableProps & {
    products: ProductProps[];
  }
> = ({ products }) => {
  const [allSelected, setAllSelected] = useState(false);
  const [selectedProductIds, setSelectedProductIds] = useState<
    Record<string, boolean>
  >({});

  const selectAllProducts = (checked: boolean) => {
    if (checked) {
      const selectedProducts: Record<string, boolean> = products.reduce(
        (prev, current) => ({ ...prev, [current.node.id]: checked }),
        {}
      );
      setSelectedProductIds(selectedProducts);
      setAllSelected(true);
    } else {
      setSelectedProductIds({});
      setAllSelected(false);
    }
  };
  return (
    <Table>
      <colgroup>
        <col width="20px" />
        <col width="250px" />
        <col />
        <col />
        <col />
        <col width="200px" />
      </colgroup>
      <TableHead>
        <TableRow>
          <TableCell tag="th" padding="0 8px">
            <Checkbox
              checked={allSelected}
              onChange={selectAllProducts}
              label=""
            />
          </TableCell>
          <TableCell tag="th" padding="0 8px">
            Product
          </TableCell>
          <TableCell tag="th" padding="0 8px">
            Sku
          </TableCell>
          <TableCell tag="th" padding="0 8px">
            Weight
          </TableCell>
          <TableCell tag="th" padding="0 8px">
            Dimensions
          </TableCell>
          <TableCell tag="th" padding="0 8px">
            Counry of Origin
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map(({ node }) => {
          const weight = node.measurements.find(
            measurement => measurement?.type === 'WEIGHT'
          )?.value;
          const height = node.measurements.find(
            measurement => measurement?.type === 'HEIGHT'
          )?.value;
          const length = node.measurements.find(
            measurement => measurement?.type === 'LENGTH'
          )?.value;
          const width = node.measurements.find(
            measurement => measurement?.type === 'WIDTH'
          )?.value;
          return (
            <TableRow key={node.id} active={!!selectedProductIds[node.id]}>
              <TableCell padding="0 8px">
                <Checkbox
                  checked={!!selectedProductIds[node.id]}
                  onChange={() =>
                    setSelectedProductIds({
                      ...selectedProductIds,
                      [node.id]: !selectedProductIds[node.id],
                    })
                  }
                  label=""
                />
              </TableCell>
              <TableCell padding="0 8px">
                <Tooltip
                  showTooltip={!!node.name && node.name.length > 25}
                  subtitle={node.name}
                >
                  {truncateText({
                    length: 20,
                    text: node.name || '',
                  })}
                </Tooltip>
                <div>
                  <Text fontSize="s">
                    <Currency
                      amount={Number(node.amount?.toFixed(2)) || 0}
                      code={node.currencyCode || 'USD'}
                    />
                  </Text>
                </div>
              </TableCell>
              <TableCell padding="0 8px">
                <Tooltip
                  showTooltip={!!node.sku && node.sku.length > 15}
                  subtitle={node.sku}
                >
                  {truncateText({
                    length: 20,
                    text: node.sku || '',
                  })}
                </Tooltip>
              </TableCell>
              <TableCell padding="0 8px">{weight}</TableCell>
              <TableCell padding="0 8px">
                {!!height &&
                  !!length &&
                  !!width &&
                  `${length}x${width}x${height}`}
              </TableCell>
              <TableCell padding="0 8px">{node.countryOfOrigin}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export const Default = Template.bind({});
Default.args = {
  products: [
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3Iw',
      node: {
        id: 'catalog_item_4c825ef9-4081-4058-b035-fb14e1394327',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Cool',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: null,
        brand: '',
        countryOfOriginSource: null,
        sku: '123',
        provinceOfOrigin: null,
        productId: '',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3Ix',
      node: {
        id: 'catalog_item_cadc1b92-d21a-4865-9ef9-da42e8f1b598',
        imageUrl:
          'https://www.news10.com/wp-content/uploads/sites/64/2022/07/Cat.jpg?w=876&h=493&crop=1',
        catalogItemUrl: null,
        name: 'name - TEST 123 LONG NAME  LONG NAME  LONG NAME',
        description: 'Test',
        amount: 28,
        material: 'Cotton',
        currencyCode: 'USD',
        countryOfOrigin: 'US',
        brand: 'Test Brand',
        countryOfOriginSource: 'API_REQUEST',
        sku: '123215465465468765414658798451',
        provinceOfOrigin: null,
        productId: '',
        categories: [],
        nonShippable: true,
        measurements: [
          {
            source: 'API_REQUEST',
            type: 'HEIGHT',
            unitOfMeasure: 'INCH',
            value: 32.8,
          },
          {
            source: 'API_REQUEST',
            type: 'LENGTH',
            unitOfMeasure: 'INCH',
            value: 28.25,
          },
          {
            source: 'API_REQUEST',
            type: 'WIDTH',
            unitOfMeasure: 'INCH',
            value: 27,
          },
          {
            source: 'API_REQUEST',
            type: 'WEIGHT',
            unitOfMeasure: 'POUND',
            value: 7.23,
          },
        ],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3Iy',
      node: {
        id: 'catalog_item_d04617c2-1b3c-4860-a9ac-d12a13217277',
        imageUrl: null,
        catalogItemUrl: null,
        name: '',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: null,
        brand: '',
        countryOfOriginSource: null,
        sku: '12325435154',
        provinceOfOrigin: null,
        productId: '',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3Iz',
      node: {
        id: 'catalog_item_fc7e1c38-4543-4ad7-b1d0-4723ace98b66',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Cool Product',
        description: "Can't complain",
        amount: 99.99,
        material: '',
        currencyCode: 'USD',
        countryOfOrigin: 'BH',
        brand: '',
        countryOfOriginSource: null,
        sku: 'Sku',
        provinceOfOrigin: null,
        productId: '',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3I0',
      node: {
        id: 'catalog_item_9abd38f9-0020-4b73-a9a6-600610c52e7f',
        imageUrl: null,
        catalogItemUrl: null,
        name: '',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'AO',
        brand: '',
        countryOfOriginSource: null,
        sku: 'TEST',
        provinceOfOrigin: null,
        productId: '',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3I1',
      node: {
        id: 'catalog_item_c5fba4c2-6aa7-4255-a02a-9eff474d7059',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 11',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 11',
        provinceOfOrigin: null,
        productId: 'PRODUCT 11',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3I2',
      node: {
        id: 'catalog_item_9e10d77d-aefb-4f90-87d5-7902e05286de',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 12',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 12',
        provinceOfOrigin: null,
        productId: 'PRODUCT 12',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3I3',
      node: {
        id: 'catalog_item_6481c585-53c9-4bea-8569-90a2d4e1cf11',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 13',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 13',
        provinceOfOrigin: null,
        productId: 'PRODUCT 13',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3I4',
      node: {
        id: 'catalog_item_21bae11e-9b20-42e2-ac2f-348f41e653b1',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 14',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 14',
        provinceOfOrigin: null,
        productId: 'PRODUCT 14',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3I5',
      node: {
        id: 'catalog_item_ecc1a16d-1be3-4a38-97b5-109c27ada9ad',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 15',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 15',
        provinceOfOrigin: null,
        productId: 'PRODUCT 15',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxMA==',
      node: {
        id: 'catalog_item_b74902ea-68d4-4a2d-97ea-5d295c228b2f',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 16',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 16',
        provinceOfOrigin: null,
        productId: 'PRODUCT 16',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxMQ==',
      node: {
        id: 'catalog_item_3d94469c-b2c9-4811-93a9-2c7910c0e6c0',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 17',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 17',
        provinceOfOrigin: null,
        productId: 'PRODUCT 17',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxMg==',
      node: {
        id: 'catalog_item_ae6f6419-a9de-4d48-86a0-bebd34b8bab1',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 18',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 18',
        provinceOfOrigin: null,
        productId: 'PRODUCT 18',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxMw==',
      node: {
        id: 'catalog_item_ed594217-b214-4378-a6fa-844d56e11a94',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 19',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 19',
        provinceOfOrigin: null,
        productId: 'PRODUCT 19',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxNA==',
      node: {
        id: 'catalog_item_74271acb-be84-40a9-87cf-c2ce157e287a',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Something new 2',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'DZ',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: '',
        provinceOfOrigin: null,
        productId: 'Product 2',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxNQ==',
      node: {
        id: 'catalog_item_c285c94d-86be-4db8-be6a-203fe7709ed8',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 2',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 2',
        provinceOfOrigin: null,
        productId: 'PRODUCT 2',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxNg==',
      node: {
        id: 'catalog_item_b632a585-3af5-440e-973d-ddad3c9c673f',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 20',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 20',
        provinceOfOrigin: null,
        productId: 'PRODUCT 20',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxNw==',
      node: {
        id: 'catalog_item_258cab88-ee4c-4928-a559-6dd3e78c632b',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 21',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 21',
        provinceOfOrigin: null,
        productId: 'PRODUCT 21',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxOA==',
      node: {
        id: 'catalog_item_bcf2e427-ed7c-4d68-b6d7-59681337f9ec',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 22',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 22',
        provinceOfOrigin: null,
        productId: 'PRODUCT 22',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxOQ==',
      node: {
        id: 'catalog_item_3b4d00bd-130c-41f3-9174-e4405193acc3',
        imageUrl: null,
        catalogItemUrl: null,
        name: 'Product 23',
        description: '',
        amount: null,
        material: '',
        currencyCode: null,
        countryOfOrigin: 'VG',
        brand: '',
        countryOfOriginSource: 'API_REQUEST',
        sku: 'SKU 23',
        provinceOfOrigin: null,
        productId: 'PRODUCT 23',
        categories: [],
        nonShippable: false,
        measurements: [],
        classifications: [],
      },
    },
  ],
};
