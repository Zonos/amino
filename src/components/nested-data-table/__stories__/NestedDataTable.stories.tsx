import type { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Loading } from 'src/components/graph-matrix/_LoadingIcon';

import { NestedDataTable as NestedDataTableComponent } from '../NestedDataTable';

const NestedDataTableMeta: Meta = {
  component: NestedDataTableComponent,
};

export default NestedDataTableMeta;

type NestedDataTableProps = ComponentProps<typeof NestedDataTableComponent>;

const Template: StoryFn<NestedDataTableProps> = (
  props: NestedDataTableProps
) => <NestedDataTableComponent {...props} />;

export const NestedDataTableNoPagination = Template.bind({});
NestedDataTableNoPagination.args = {
  tableData: [
    {
      name: 'Amino 1',
      age: 1,
      children: [
        {
          name: 'Amino 2',
          age: 1,
          children: [
            {
              name: 'Amino 3',
              age: 1,
              children: [
                {
                  name: 'Amino 4',
                  age: 1,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Amino',
      age: 2,
      children: [],
    },
  ],
};

export const NestedDataTableEmpty = Template.bind({});
NestedDataTableEmpty.args = {
  tableData: [],
};

export const NestedDataTableLoading = Template.bind({});
NestedDataTableLoading.args = {
  tableData: [],
  isFetching: true,
  loadingComponent: (
    <div>
      <Loading />
    </div>
  ),
};

export const NestedDataTableLongColumnContent = Template.bind({});
NestedDataTableLongColumnContent.args = {
  tableData: [
    {
      name: 'Amino 1',
      // long content field
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sapiente vel delectus odio unde iusto minus, consequatur fugiat esse corporis quaerat facilis consequuntur sit, rerum quae modi illo ratione sunt.\n',
    },
  ],
};

export const NestedDataTableWithJsonColumn = Template.bind({});
NestedDataTableWithJsonColumn.args = {
  tableData: [
    {
      name: 'Amino 1',
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
        name: 'Nested object',
        key: '2',
      }),
    },
  ],
};

const tableData: {
  name: string;
  content: string;
  json: string;
  jsonObj: string;
}[] = [
  {
    name: 'Amino 1',
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
      name: 'Nested object',
      key: '2',
    }),
  },
];
export const NestedDataTableWithCustomColumn = Template.bind({});
NestedDataTableWithCustomColumn.args = {
  customColumnFormatters: {
    name: ({ column }) => <span style={{ color: 'red' }}>{column.key}</span>,
  },
  tableData,
};
