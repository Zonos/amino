/* eslint-disable no-alert */
/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { MenuButton } from 'src/components/button/MenuButton';
import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Divider } from 'src/components/divider/Divider';
import { Menu } from 'src/components/menu/Menu';
import { MenuItem } from 'src/components/menu/MenuItem';
import {
  type SimpleTableHeader,
  type SimpleTableProps,
  SimpleTable,
} from 'src/components/simple-table/SimpleTable';
import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { EditDuotoneIcon } from 'src/icons/EditDuotoneIcon';
import { type Flag, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { ThreeDotIcon } from 'src/icons/ThreeDotIcon';
import { TrashCanDuotoneIcon } from 'src/icons/TrashCanDuotoneIcon';

const meta: Meta = {
  component: SimpleTable,
};

export default meta;

type DummyData = {
  age: number;
  disabledText: string;
  id: number;
  name: string;
  optionalField?: string;
  truncateText?: string;
  truncateText2?: string;
  vegan: boolean;
};

const truncateText = 'This is a long string that should be truncated. '.repeat(
  5,
);

const items: DummyData[] = [
  {
    age: 24,
    disabledText: 'Disabled link',
    id: 1,
    name: 'John',
    optionalField: 'optional',
    truncateText: 'Not long enough',
    vegan: false,
  },
  {
    age: 25,
    disabledText: 'Disabled link',
    id: 2,
    name: 'Jane',
    truncateText,
    vegan: true,
  },
  {
    age: 26,
    disabledText: 'Disabled link',
    id: 3,
    name: 'Joe',
    truncateText,
    vegan: false,
  },
  {
    age: 27,
    disabledText: 'Disabled link',
    id: 4,
    name: 'Joan',
    optionalField: 'idk',
    truncateText,
    vegan: true,
  },
  {
    age: 28,
    disabledText: 'Disabled link',
    id: 5,
    name: 'Jim',
    truncateText,
    vegan: false,
  },
  {
    age: 26,
    disabledText: 'Disabled link',
    id: 29,
    name: 'Cade',
    optionalField: 'optional',
    truncateText,
    vegan: false,
  },
];

const tableHeaders: SimpleTableHeader<DummyData>[] = [
  {
    key: 'name',
    name: 'Name',
    width: 1,
  },
  {
    align: 'end',
    key: 'age',
    name: 'Age',
  },
  {
    align: 'center',
    key: 'vegan',
    name: 'Vegan',
    renderCustom: vegan => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {vegan ? (
          <CheckmarkIcon color="green600" />
        ) : (
          <RemoveIcon color="red600" />
        )}
      </div>
    ),
  },
  {
    key: 'truncateText',
    minWidth: 150,
    name: 'Truncate Text (min 150px)',
    textWrapMethod: 'truncate',
  },
  {
    key: 'truncateText2',
    name: 'Truncate Text 2',
    renderCustom: (_, item) => item.truncateText,
    textWrapMethod: 'truncate',
  },
  {
    disabledLink: true,
    key: 'disabledText',
    name: 'Disabled Text',
  },
  {
    key: 'optionalField',
    name: 'Optional Field',
    renderCustom: value => value || <Text color="gray400">N/A</Text>,
  },
];

export const Basic = () => (
  <>
    <Text type="header">With hover</Text>
    <SimpleTable
      className="with-hover"
      headers={tableHeaders}
      items={items}
      keyExtractor={item => String(item.id)}
    />
    <Divider />
    <Text type="header">Without hover</Text>
    <SimpleTable
      className="no-hover"
      headers={tableHeaders}
      items={items}
      keyExtractor={item => String(item.id)}
      noHoverBackground
    />
  </>
);

export const Long = () => (
  <SimpleTable
    headers={tableHeaders}
    items={items.flatMap(item => [
      item,
      {
        ...item,
        id: item.id + 100,
        name: `${item.name} 2`,
      },
      {
        ...item,
        id: item.id + 200,
        name: `${item.name} 3`,
      },
      {
        ...item,
        id: item.id + 300,
        name: `${item.name} 4`,
      },
      {
        ...item,
        id: item.id + 400,
        name: `${item.name} 5`,
      },
      {
        ...item,
        id: item.id + 500,
        name: `${item.name} 6`,
      },
    ])}
    keyExtractor={item => String(item.id)}
  />
);

export const Selectable: StoryFn<SimpleTableProps<object>> = ({ loading }) => {
  const [selectedRowIndexes, setSelectedRowIndexes] = useState<number[]>([]);

  const checkboxAllValue = selectedRowIndexes.length === items.length;

  const handleCheckboxAllChange = () => {
    if (selectedRowIndexes.length === items.length) {
      setSelectedRowIndexes([]);
    } else {
      setSelectedRowIndexes(items.map((_, index) => index));
    }
  };

  const handleCheckboxRowChange = (
    value: boolean,
    item: DummyData,
    index: number,
  ) => {
    if (value) {
      setSelectedRowIndexes([...selectedRowIndexes, index]);
    } else {
      setSelectedRowIndexes(
        selectedRowIndexes.filter(selectedIndex => selectedIndex !== index),
      );
    }
  };

  return (
    <SimpleTable
      headers={tableHeaders}
      items={items}
      keyExtractor={item => String(item.id)}
      loading={loading}
      selectable={{
        anySelected: selectedRowIndexes.length > 0,
        enabled: true,
        headerCheckboxValue: checkboxAllValue,
        isRowChecked: (_, index) => selectedRowIndexes.includes(index),
        onHeaderCheckboxChange: handleCheckboxAllChange,
        onRowCheckboxChange: handleCheckboxRowChange,
      }}
    />
  );
};

const link = 'https://letmegooglethat.com';

export const WithLink = () => {
  const [selectedRowIndexes, setSelectedRowIndexes] = useState<number[]>([]);

  const checkboxAllValue = selectedRowIndexes.length === items.length;

  const handleCheckboxAllChange = () => {
    if (selectedRowIndexes.length === items.length) {
      setSelectedRowIndexes([]);
    } else {
      setSelectedRowIndexes(items.map((_, index) => index));
    }
  };

  const handleCheckboxRowChange = (
    value: boolean,
    item: DummyData,
    index: number,
  ) => {
    if (value) {
      setSelectedRowIndexes([...selectedRowIndexes, index]);
    } else {
      setSelectedRowIndexes(
        selectedRowIndexes.filter(selectedIndex => selectedIndex !== index),
      );
    }
  };

  return (
    <SimpleTable
      getRowLink={item => `${link}/?q=${item.name}`}
      headers={tableHeaders}
      items={items}
      keyExtractor={item => String(item.id)}
      selectable={{
        anySelected: selectedRowIndexes.length > 0,
        enabled: true,
        headerCheckboxValue: checkboxAllValue,
        isRowChecked: (_, index) => selectedRowIndexes.includes(index),
        onHeaderCheckboxChange: handleCheckboxAllChange,
        onRowCheckboxChange: handleCheckboxRowChange,
      }}
    />
  );
};

export const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [selectedRowIndexes, setSelectedRowIndexes] = useState<number[]>([]);

  const checkboxAllValue = selectedRowIndexes.length === items.length;

  const handleCheckboxAllChange = () => {
    if (selectedRowIndexes.length === items.length) {
      setSelectedRowIndexes([]);
    } else {
      setSelectedRowIndexes(items.map((_, index) => index));
    }
  };

  const handleCheckboxRowChange = (
    value: boolean,
    item: DummyData,
    index: number,
  ) => {
    if (value) {
      setSelectedRowIndexes([...selectedRowIndexes, index]);
    } else {
      setSelectedRowIndexes(
        selectedRowIndexes.filter(selectedIndex => selectedIndex !== index),
      );
    }
  };

  return (
    <>
      <Checkbox checked={loading} label="Loading" onChange={setLoading} />
      <SimpleTable
        headers={tableHeaders}
        items={items}
        keyExtractor={item => String(item.id)}
        loading={loading}
        loadingItems={items.length}
        selectable={{
          anySelected: selectedRowIndexes.length > 0,
          enabled: true,
          headerCheckboxValue: checkboxAllValue,
          isRowChecked: (_, index) => selectedRowIndexes.includes(index),
          onHeaderCheckboxChange: handleCheckboxAllChange,
          onRowCheckboxChange: handleCheckboxRowChange,
        }}
      />
    </>
  );
};

export const Bordered = () => {
  const augmentedHeaders: SimpleTableHeader<DummyData>[] = tableHeaders
    .filter(Boolean)
    .map(header => ({
      ...header,
      minWidth: header.minWidth || 50,
      name: null,
    }));
  return (
    <>
      <Text type="header">With headers</Text>
      <SimpleTable
        bordered
        headers={tableHeaders}
        items={items}
        keyExtractor={item => String(item.id)}
      />
      <Divider />
      <Text type="header">Without headers</Text>
      <SimpleTable
        bordered
        headers={augmentedHeaders}
        items={items}
        keyExtractor={item => String(item.id)}
      />
    </>
  );
};

export const Collapsible = () => {
  const [selectedRowIndexes, setSelectedRowIndexes] = useState<number[]>([]);
  const [expandedItemKeys, setExpandedItemKeys] = useState<string[]>([]);
  const toggleItem = (id: string) =>
    setExpandedItemKeys(
      expandedItemKeys.includes(id)
        ? expandedItemKeys.filter(x => x !== id)
        : expandedItemKeys.concat(id),
    );

  const checkboxAllValue = selectedRowIndexes.length === items.length;

  const handleCheckboxAllChange = () => {
    if (selectedRowIndexes.length === items.length) {
      setSelectedRowIndexes([]);
    } else {
      setSelectedRowIndexes(items.map((_, index) => index));
    }
  };

  const handleCheckboxRowChange = (
    value: boolean,
    item: DummyData,
    index: number,
  ) => {
    if (value) {
      setSelectedRowIndexes([...selectedRowIndexes, index]);
    } else {
      setSelectedRowIndexes(
        selectedRowIndexes.filter(selectedIndex => selectedIndex !== index),
      );
    }
  };
  const collapseContent = items.map(item => ({
    content: (
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Vegan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: 'none' }}>{item.name}</td>
            <td style={{ border: 'none' }}>{item.age}</td>
            <td style={{ border: 'none' }}>{item.vegan}</td>
          </tr>
        </tbody>
      </table>
    ),
    key: String(item.id),
  }));

  const adjustedCollapseContent = collapseContent.filter(
    (_, index) => index !== 3,
  );

  return (
    <>
      <Text type="header">Normal</Text>
      <SimpleTable
        className="normal-table"
        collapsible={{
          collapseContent,
          enabled: true,
          expandedItemKeys,
          toggleItem,
        }}
        headers={tableHeaders}
        items={items}
        keyExtractor={item => String(item.id)}
      />
      <Divider />
      <Text type="header">Bordered</Text>
      <SimpleTable
        bordered
        className="bordered-table"
        collapsible={{
          collapseContent: adjustedCollapseContent,
          enabled: true,
          expandedItemKeys,
          toggleItem,
        }}
        headers={tableHeaders}
        items={items}
        keyExtractor={item => String(item.id)}
      />
      <Divider />
      <Text type="header">Selectable</Text>
      <SimpleTable
        bordered
        className="selectable-table"
        collapsible={{
          collapseContent,
          enabled: true,
          expandedItemKeys,
          toggleItem,
        }}
        headers={tableHeaders}
        items={items}
        keyExtractor={item => String(item.id)}
        selectable={{
          anySelected: selectedRowIndexes.length > 0,
          enabled: true,
          headerCheckboxValue: checkboxAllValue,
          isRowChecked: (_, index) => selectedRowIndexes.includes(index),
          onHeaderCheckboxChange: handleCheckboxAllChange,
          onRowCheckboxChange: handleCheckboxRowChange,
        }}
      />
    </>
  );
};

export const Custom = () => {
  const [shouldTruncate, setShouldTruncate] = useState(true);
  const [viewOneRow, setViewOneRow] = useState(false);

  type AugmentedDummyData = DummyData & {
    countryCode: Flag;
    hoverField: null;
    truncateText?: string;
  };

  const augmentedItems: AugmentedDummyData[] = items
    .flatMap(item => [
      {
        ...item,
        countryCode: 'HK' as Flag,
      },
      {
        ...item,
        countryCode: 'US' as Flag,
        id: item.id + 100,
        name: `${item.name} 2`,
      },
      {
        ...item,
        countryCode: 'CA' as Flag,
        id: item.id + 200,
        name: `${item.name} 3`,
      },
      {
        ...item,
        countryCode: 'GB' as Flag,
        id: item.id + 300,
        name: `${item.name} 4`,
      },
    ])
    .map(item => ({
      ...item,
      hoverField: null,
    }));

  const displayedItems = viewOneRow
    ? augmentedItems.slice(0, 1)
    : augmentedItems;

  const [selectedItemIds, setSelectedItemIds] = useState<number[]>([]);

  const nonCadeItems = items.filter(item => item.name !== 'Cade');

  const checkboxAllValue = selectedItemIds.length === nonCadeItems.length;

  const handleCheckboxAllChange = () => {
    if (selectedItemIds.length === nonCadeItems.length) {
      setSelectedItemIds([]);
    } else {
      setSelectedItemIds(nonCadeItems.map(item => item.id));
    }
  };

  const handleCheckboxRowChange = (value: boolean, item: DummyData) => {
    if (value) {
      setSelectedItemIds([...selectedItemIds, item.id]);
    } else {
      setSelectedItemIds(selectedItemIds.filter(id => id !== item.id));
    }
  };

  const HoverMenu = ({ item }: { item: DummyData }) => (
    <MenuButton
      action={
        <Button icon={<ThreeDotIcon size={20} />} size="sm" variant="subtle" />
      }
      dropdownOptions={{
        placement: 'bottom-end',
      }}
    >
      <Menu>
        <MenuItem
          icon={<EditDuotoneIcon size={20} />}
          onClick={() => {
            alert(`Edit ${item.name}`);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          icon={
            <TrashCanDuotoneIcon
              color="red600"
              secondaryColor="red300"
              size={20}
            />
          }
          onClick={() => {
            alert(`Delete ${item.name}`);
          }}
        >
          <Text color="red600">Delete</Text>
        </MenuItem>
      </Menu>
    </MenuButton>
  );

  const augmentedHeaders: SimpleTableHeader<AugmentedDummyData>[] = [
    ...tableHeaders.filter(header => header?.key !== 'truncateText'),
    {
      align: 'start',
      key: 'countryCode',
      name: 'Country',
      renderCustom: countryCode => (
        <FlagIcon code={countryCode} iconScale="large" />
      ),
    },
    {
      key: 'truncateText',
      name: (
        <Checkbox
          checked={shouldTruncate}
          label="Truncate text"
          onChange={setShouldTruncate}
        />
      ),
      textWrapMethod: shouldTruncate ? 'truncate' : 'normal',
    },
    {
      align: 'end',
      key: 'hoverField',
      name: '',
      renderCustom: (_, item) => (
        <div className="row-hover-show">
          <HoverMenu item={item} />
        </div>
      ),
    },
  ];

  return (
    <>
      <Checkbox
        checked={viewOneRow}
        label="View one row"
        onChange={setViewOneRow}
      />

      <Divider />

      <SimpleTable
        headers={augmentedHeaders}
        items={displayedItems}
        keyExtractor={item => String(item.id)}
        onRowClick={item => {
          alert(`Clicked ${item.name}`);
        }}
        selectable={{
          anySelected: selectedItemIds.length > 0,
          enabled: true,
          headerCheckboxValue: checkboxAllValue,
          isRowCheckboxDisabled: item => item.name === 'Cade',
          isRowChecked: item => selectedItemIds.includes(item.id),
          onHeaderCheckboxChange: handleCheckboxAllChange,
          onRowCheckboxChange: handleCheckboxRowChange,
        }}
      />
    </>
  );
};

export const OnRowClick = () => {
  const [expandedItemKeys, setExpandedItemKeys] = useState<string[]>([]);
  const toggleItem = (id: string) =>
    setExpandedItemKeys(
      expandedItemKeys.includes(id)
        ? expandedItemKeys.filter(x => x !== id)
        : expandedItemKeys.concat(id),
    );
  const collapseContent = items.map(item => ({
    content: (
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Vegan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: 'none' }}>{item.name}</td>
            <td style={{ border: 'none' }}>{item.age}</td>
            <td style={{ border: 'none' }}>{item.vegan}</td>
          </tr>
        </tbody>
      </table>
    ),
    key: String(item.id),
  }));

  return (
    <>
      <Text type="header">Normal table</Text>
      <SimpleTable
        headers={tableHeaders}
        items={items}
        keyExtractor={item => String(item.id)}
        onRowClick={item => {
          alert(`Clicked ${item.name}`);
        }}
      />
      <Divider />
      <Text type="header">Collapsible table</Text>
      <SimpleTable
        className="collapsible"
        collapsible={{
          collapseContent,
          enabled: true,
          expandedItemKeys,
          toggleItem,
        }}
        headers={tableHeaders}
        items={items}
        keyExtractor={item => String(item.id)}
        onRowClick={item => alert(`Clicked ${item.name}`)}
      />
    </>
  );
};
