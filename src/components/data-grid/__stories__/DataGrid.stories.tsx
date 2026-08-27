import type { Meta, StoryFn } from '@storybook/react';

import {
  type Column,
  DataGrid as DataGridComponent,
  type DataGridProps,
} from 'src/components/data-grid/DataGrid';

const DataGridMeta: Meta = {
  component: DataGridComponent,
};

export default DataGridMeta;

type Shipment = {
  carrier: string;
  destination: string;
  duties: number;
  shipment: string;
};

const rows: Shipment[] = [
  { carrier: 'UPS', destination: 'Canada', duties: 24.5, shipment: 'SHP-1041' },
  {
    carrier: 'DHL',
    destination: 'Germany',
    duties: 118.2,
    shipment: 'SHP-1042',
  },
  {
    carrier: 'FedEx',
    destination: 'Japan',
    duties: 6.75,
    shipment: 'SHP-1043',
  },
  {
    carrier: 'UPS',
    destination: 'Australia',
    duties: 92.1,
    shipment: 'SHP-1044',
  },
  { carrier: 'DHL', destination: 'Brazil', duties: 47, shipment: 'SHP-1045' },
];

const columns: Column<Shipment>[] = [
  { frozen: true, key: 'shipment', name: 'Shipment', width: 150 },
  { key: 'destination', name: 'Destination', sortable: true },
  { key: 'carrier', name: 'Carrier', sortable: true },
  {
    key: 'duties',
    name: 'Duties',
    renderCell: ({ row }) => `$${row.duties.toFixed(2)}`,
    sortable: true,
  },
];

const Template: StoryFn<DataGridProps<Shipment>> = (
  props: DataGridProps<Shipment>,
) => <DataGridComponent {...props} style={{ height: 260 }} />;

export const Basic = Template.bind({});
Basic.args = {
  columns,
  rows,
};

/**
 * Every cell of a resizable column carries a drag handle on its trailing edge,
 * so the column can be resized from anywhere down the table.
 */
export const Resizable = Template.bind({});
Resizable.args = {
  columns,
  defaultColumnOptions: { resizable: true },
  rows,
};

/** `rowHeight` accepts a callback, and cells size to their content. */
export const VariableRowHeight = Template.bind({});
VariableRowHeight.args = {
  columns,
  rowHeight: row => (row.duties > 90 ? 90 : 45),
  rows,
};
