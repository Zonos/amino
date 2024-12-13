import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Currency } from 'src/components/currency/Currency';
import { Table, type TableProps } from 'src/components/table/Table';
import { TableBody } from 'src/components/table/TableBody';
import { TableCell } from 'src/components/table/TableCell';
import { TableHead } from 'src/components/table/TableHead';
import { TableRow } from 'src/components/table/TableRow';
import { Text } from 'src/components/text/Text';
import { Tooltip } from 'src/components/tooltip/Tooltip';
import { truncateText } from 'src/utils/truncateText';

const NormalTableMeta: Meta = {
  component: Table,
};

export default NormalTableMeta;

type ProductProps = {
  cursor: string;
  node: {
    amount: number | null;
    brand: string | null;
    catalogItemUrl: string | null;
    categories: string[];
    classifications: unknown[];
    countryOfOrigin: string | null;
    countryOfOriginSource: string | null;
    currencyCode: string | null;
    description: string;
    id: string;
    imageUrl: string | null;
    material: string;
    measurements: {
      source: string;
      type: string;
      unitOfMeasure: string;
      value: number;
    }[];
    name: string;
    nonShippable: boolean;
    productId: string;
    provinceOfOrigin: string | null;
    sku: string;
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
        {},
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
          <TableCell padding="0 8px" tag="th">
            <Checkbox
              checked={allSelected}
              label=""
              onChange={selectAllProducts}
            />
          </TableCell>
          <TableCell padding="0 8px" tag="th">
            Product
          </TableCell>
          <TableCell padding="0 8px" tag="th">
            Sku
          </TableCell>
          <TableCell padding="0 8px" tag="th">
            Weight
          </TableCell>
          <TableCell padding="0 8px" tag="th">
            Dimensions
          </TableCell>
          <TableCell padding="0 8px" tag="th">
            Counry of Origin
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map(({ node }) => {
          const weight = node.measurements.find(
            measurement => measurement?.type === 'WEIGHT',
          )?.value;
          const height = node.measurements.find(
            measurement => measurement?.type === 'HEIGHT',
          )?.value;
          const length = node.measurements.find(
            measurement => measurement?.type === 'LENGTH',
          )?.value;
          const width = node.measurements.find(
            measurement => measurement?.type === 'WIDTH',
          )?.value;
          return (
            <TableRow key={node.id} active={!!selectedProductIds[node.id]}>
              <TableCell padding="0 8px">
                <Checkbox
                  checked={!!selectedProductIds[node.id]}
                  label=""
                  onChange={() =>
                    setSelectedProductIds({
                      ...selectedProductIds,
                      [node.id]: !selectedProductIds[node.id],
                    })
                  }
                />
              </TableCell>
              <TableCell padding="0 8px">
                <Tooltip disabled={node.name.length <= 25} title={node.name}>
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
                <Tooltip disabled={node?.sku.length <= 15} title={node.sku}>
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
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: null,
        countryOfOriginSource: null,
        currencyCode: null,
        description: '',
        id: 'catalog_item_4c825ef9-4081-4058-b035-fb14e1394327',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Cool',
        nonShippable: false,
        productId: '',
        provinceOfOrigin: null,
        sku: '123',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3Ix',
      node: {
        amount: 28,
        brand: 'Test Brand',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'US',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: 'USD',
        description: 'Test',
        id: 'catalog_item_cadc1b92-d21a-4865-9ef9-da42e8f1b598',
        imageUrl:
          'https://www.news10.com/wp-content/uploads/sites/64/2022/07/Cat.jpg?w=876&h=493&crop=1',
        material: 'Cotton',
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
        name: 'name - TEST 123 LONG NAME  LONG NAME  LONG NAME',
        nonShippable: true,
        productId: '',
        provinceOfOrigin: null,
        sku: '123215465465468765414658798451',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3Iy',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: null,
        countryOfOriginSource: null,
        currencyCode: null,
        description: '',
        id: 'catalog_item_d04617c2-1b3c-4860-a9ac-d12a13217277',
        imageUrl: null,
        material: '',
        measurements: [],
        name: '',
        nonShippable: false,
        productId: '',
        provinceOfOrigin: null,
        sku: '12325435154',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3Iz',
      node: {
        amount: 99.99,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'BH',
        countryOfOriginSource: null,
        currencyCode: 'USD',
        description: "Can't complain",
        id: 'catalog_item_fc7e1c38-4543-4ad7-b1d0-4723ace98b66',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Cool Product',
        nonShippable: false,
        productId: '',
        provinceOfOrigin: null,
        sku: 'Sku',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3I0',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'AO',
        countryOfOriginSource: null,
        currencyCode: null,
        description: '',
        id: 'catalog_item_9abd38f9-0020-4b73-a9a6-600610c52e7f',
        imageUrl: null,
        material: '',
        measurements: [],
        name: '',
        nonShippable: false,
        productId: '',
        provinceOfOrigin: null,
        sku: 'TEST',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3I1',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_c5fba4c2-6aa7-4255-a02a-9eff474d7059',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 11',
        nonShippable: false,
        productId: 'PRODUCT 11',
        provinceOfOrigin: null,
        sku: 'SKU 11',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3I2',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_9e10d77d-aefb-4f90-87d5-7902e05286de',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 12',
        nonShippable: false,
        productId: 'PRODUCT 12',
        provinceOfOrigin: null,
        sku: 'SKU 12',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3I3',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_6481c585-53c9-4bea-8569-90a2d4e1cf11',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 13',
        nonShippable: false,
        productId: 'PRODUCT 13',
        provinceOfOrigin: null,
        sku: 'SKU 13',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3I4',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_21bae11e-9b20-42e2-ac2f-348f41e653b1',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 14',
        nonShippable: false,
        productId: 'PRODUCT 14',
        provinceOfOrigin: null,
        sku: 'SKU 14',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3I5',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_ecc1a16d-1be3-4a38-97b5-109c27ada9ad',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 15',
        nonShippable: false,
        productId: 'PRODUCT 15',
        provinceOfOrigin: null,
        sku: 'SKU 15',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxMA==',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_b74902ea-68d4-4a2d-97ea-5d295c228b2f',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 16',
        nonShippable: false,
        productId: 'PRODUCT 16',
        provinceOfOrigin: null,
        sku: 'SKU 16',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxMQ==',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_3d94469c-b2c9-4811-93a9-2c7910c0e6c0',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 17',
        nonShippable: false,
        productId: 'PRODUCT 17',
        provinceOfOrigin: null,
        sku: 'SKU 17',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxMg==',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_ae6f6419-a9de-4d48-86a0-bebd34b8bab1',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 18',
        nonShippable: false,
        productId: 'PRODUCT 18',
        provinceOfOrigin: null,
        sku: 'SKU 18',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxMw==',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_ed594217-b214-4378-a6fa-844d56e11a94',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 19',
        nonShippable: false,
        productId: 'PRODUCT 19',
        provinceOfOrigin: null,
        sku: 'SKU 19',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxNA==',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'DZ',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_74271acb-be84-40a9-87cf-c2ce157e287a',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Something new 2',
        nonShippable: false,
        productId: 'Product 2',
        provinceOfOrigin: null,
        sku: '',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxNQ==',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_c285c94d-86be-4db8-be6a-203fe7709ed8',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 2',
        nonShippable: false,
        productId: 'PRODUCT 2',
        provinceOfOrigin: null,
        sku: 'SKU 2',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxNg==',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_b632a585-3af5-440e-973d-ddad3c9c673f',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 20',
        nonShippable: false,
        productId: 'PRODUCT 20',
        provinceOfOrigin: null,
        sku: 'SKU 20',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxNw==',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_258cab88-ee4c-4928-a559-6dd3e78c632b',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 21',
        nonShippable: false,
        productId: 'PRODUCT 21',
        provinceOfOrigin: null,
        sku: 'SKU 21',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxOA==',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_bcf2e427-ed7c-4d68-b6d7-59681337f9ec',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 22',
        nonShippable: false,
        productId: 'PRODUCT 22',
        provinceOfOrigin: null,
        sku: 'SKU 22',
      },
    },
    {
      cursor: 'c2ltcGxlLW9mZnNldC1jdXJzb3IxOQ==',
      node: {
        amount: null,
        brand: '',
        catalogItemUrl: null,
        categories: [],
        classifications: [],
        countryOfOrigin: 'VG',
        countryOfOriginSource: 'API_REQUEST',
        currencyCode: null,
        description: '',
        id: 'catalog_item_3b4d00bd-130c-41f3-9174-e4405193acc3',
        imageUrl: null,
        material: '',
        measurements: [],
        name: 'Product 23',
        nonShippable: false,
        productId: 'PRODUCT 23',
        provinceOfOrigin: null,
        sku: 'SKU 23',
      },
    },
  ],
};
