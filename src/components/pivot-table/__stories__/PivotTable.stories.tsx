import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import type { SortColumn } from 'src/components/data-grid/DataGrid';
import {
  PivotTable as PivotTableComponent,
  type RowWithIndex,
} from 'src/components/pivot-table/PivotTable';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';

const PivotTableMeta: Meta = {
  component: PivotTableComponent,
};

export default PivotTableMeta;

type Shipment = RowWithIndex<{
  carrier: string;
  destination: string;
  duties: number;
  shipment: string;
}>;

const makeRow = (
  shipment: string,
  destination: string,
  carrier: string,
  duties: number,
): Shipment => ({
  _expandedData: [],
  _expandedKey: '',
  carrier,
  destination,
  duties,
  shipment,
});

const rows: Shipment[] = [
  makeRow('SHP-1041', 'Canada', 'UPS', 24.5),
  makeRow('SHP-1042', 'Germany', 'DHL', 118.2),
  makeRow('SHP-1043', 'Japan', 'FedEx', 6.75),
  makeRow('SHP-1044', 'Australia', 'UPS', 92.1),
  makeRow('SHP-1045', 'Brazil', 'DHL', 47),
];

const columns = [
  { key: 'shipment', name: 'Shipment', sortable: true, width: 160 },
  { key: 'destination', name: 'Destination', sortable: true },
  { key: 'carrier', name: 'Carrier', sortable: true },
  {
    key: 'duties',
    name: 'Duties',
    renderCell: ({ row }: { row: Shipment }) => `$${row.duties.toFixed(2)}`,
    sortable: true,
  },
];

type StoryProps = Parameters<typeof PivotTableComponent<Shipment>>[0];

const Template: StoryFn<StoryProps> = (props: StoryProps) => (
  <PivotTableComponent {...props} />
);

/**
 * Click a column header to cycle it through ascending, descending and
 * unsorted. Drag a column's trailing edge — anywhere down the table, not just
 * in the header — to resize it. The leading index column is frozen.
 */
export const Basic = Template.bind({});
Basic.args = {
  columns,
  defaultColumnOptions: { resizable: true },
  rows,
  tableHeight: '320px',
};

/**
 * Supplying `onSortColumnsChange` hands sort state to the caller; the table
 * then renders whatever `sortColumns` it is given.
 */
export const ControlledSort = () => {
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([
    { columnKey: 'duties', direction: 'DESC' },
  ]);
  return (
    <VStack>
      <Text>sortColumns: {JSON.stringify(sortColumns)}</Text>
      <PivotTableComponent
        columns={columns}
        defaultColumnOptions={{ resizable: true }}
        onSortColumnsChange={setSortColumns}
        rows={rows}
        sortColumns={sortColumns}
        tableHeight="320px"
      />
    </VStack>
  );
};
