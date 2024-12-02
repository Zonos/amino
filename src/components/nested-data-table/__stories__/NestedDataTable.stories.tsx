import { type ComponentProps, useCallback } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Loading } from 'src/components/nested-data-table/__stories__/_LoadingIcon';
import {
  type ColumnCell,
  NestedDataTable as NestedDataTableComponent,
} from 'src/components/nested-data-table/NestedDataTable';

const NestedDataTableMeta: Meta = {
  component: NestedDataTableComponent,
};

export default NestedDataTableMeta;

type NestedDataTableProps = ComponentProps<typeof NestedDataTableComponent>;

const Template: StoryFn<NestedDataTableProps> = (
  props: NestedDataTableProps,
) => <NestedDataTableComponent {...props} />;

export const NestedDataTableNoPagination = Template.bind({});
NestedDataTableNoPagination.args = {
  tableData: [
    {
      age: 1,
      children: [
        {
          age: 1,
          children: [
            {
              age: 1,
              children: [
                {
                  age: 1,
                  name: 'Amino 4',
                },
              ],
              name: 'Amino 3',
            },
          ],
          name: 'Amino 2',
        },
      ],
      name: 'Amino 1',
    },
    {
      age: 2,
      children: [],
      name: 'Amino',
    },
  ],
};

export const NestedDataTableEmpty = Template.bind({});
NestedDataTableEmpty.args = {
  tableData: [],
};

export const NestedDataTableLoading = Template.bind({});
NestedDataTableLoading.args = {
  isFetching: true,
  loadingComponent: (
    <div>
      <Loading />
    </div>
  ),
  tableData: [],
};

export const NestedDataTableLongColumnContent = Template.bind({});
NestedDataTableLongColumnContent.args = {
  tableData: [
    {
      // long content field
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\n',
      name: 'Amino 1',
    },
  ],
};

export const NestedDataTableWithJsonColumn = Template.bind({});
NestedDataTableWithJsonColumn.args = {
  tableData: [
    {
      // long content field
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\n',
      json: JSON.stringify([
        {
          name: 'Nested amino 1',
          someKey: '2',
        },
        {
          name: 'Nested amino 2',
          someKey: '3',
        },
      ]),
      jsonObj: JSON.stringify({
        key: '2',
        name: 'Nested object',
      }),
      name: 'Amino 1',
    },
  ],
};

const tableData: {
  content: string;
  json: string;
  jsonObj: string;
  name: 'Amino 1' | 'Amino 2';
}[] = [
  {
    // long content field
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\n',
    json: JSON.stringify([
      {
        name: 'Nested amino 1',
        someKey: '2',
      },
      {
        name: 'Nested amino 2',
        someKey: '3',
      },
    ]),
    jsonObj: JSON.stringify({
      key: '2',
      name: 'Nested object',
    }),
    name: 'Amino 1',
  },
];
export const NestedDataTableWithCustomColumn = () => {
  const nameFormatter: ColumnCell<{
    content: string;
    json: string;
    jsonObj: string;
    name: 'Amino 1' | 'Amino 2';
  }> = useCallback(({ row }) => <div>{row.name}</div>, []);
  return (
    <NestedDataTableComponent
      customColumnCells={{
        name: nameFormatter,
      }}
      isFetching={false}
      tableData={tableData}
    />
  );
};
