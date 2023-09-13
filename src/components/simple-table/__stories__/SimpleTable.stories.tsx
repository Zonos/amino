/* eslint-disable no-alert */
/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';

import type { Meta } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { MenuButton } from 'src/components/button/MenuButton';
import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Menu } from 'src/components/menu/Menu';
import { MenuItem } from 'src/components/menu/MenuItem';
import {
  type SimpleTableHeader,
  SimpleTable,
} from 'src/components/simple-table/SimpleTable';
import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { EditDuotoneIcon } from 'src/icons/EditDuotoneIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { ThreeDotIcon } from 'src/icons/ThreeDotIcon';
import { TrashCanDuotoneIcon } from 'src/icons/TrashCanDuotoneIcon';

const meta: Meta = {
  component: SimpleTable,
};

export default meta;

type DummyData = {
  age: number;
  id: number;
  name: string;
  optionalField?: string;
  vegan: boolean;
};

const items: DummyData[] = [
  {
    age: 24,
    id: 1,
    name: 'John',
    optionalField: 'optional',
    vegan: false,
  },
  {
    age: 25,
    id: 2,
    name: 'Jane',
    vegan: true,
  },
  {
    age: 26,
    id: 3,
    name: 'Joe',
    vegan: false,
  },
  {
    age: 27,
    id: 4,
    name: 'Joan',
    optionalField: 'idk',
    vegan: true,
  },
  {
    age: 28,
    id: 5,
    name: 'Jim',
    vegan: false,
  },
  {
    age: 26,
    id: 29,
    name: 'Cade',
    optionalField: 'optional',
    vegan: false,
  },
];

const tableHeaders: SimpleTableHeader<DummyData>[] = [
  {
    key: 'name',
    name: 'Name',
  },
  {
    key: 'age',
    name: 'Age',
    width: 10,
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
    key: 'optionalField',
    name: 'Optional Field',
    renderCustom: value => value || <Text color="gray400">N/A</Text>,
  },
];

export const Basic = () => (
  <SimpleTable
    headers={tableHeaders}
    items={items}
    keyExtractor={item => String(item.id)}
  />
);

export const Selectable = () => {
  const [selectedRowIndexes, setSelectedRowIndexes] = useState<number[]>([]);

  const checkboxAllValue = selectedRowIndexes.length === items.length;

  const handleCheckboxAllChange = () => {
    if (selectedRowIndexes.length === items.length) {
      setSelectedRowIndexes([]);
    } else {
      setSelectedRowIndexes(items.map((_, index) => index));
    }
  };

  const handleCheckboxRowChange = (value: boolean, index: number) => {
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
      selectable={{
        enabled: true,
        headerCheckboxValue: checkboxAllValue,
        onHeaderCheckboxChange: handleCheckboxAllChange,
        onRowCheckboxChange: handleCheckboxRowChange,
        selectedRowIndexes,
      }}
    />
  );
};

export const Loading = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Checkbox checked={loading} label="Loading" onChange={setLoading} />
      <SimpleTable
        headers={tableHeaders}
        items={items}
        keyExtractor={item => String(item.id)}
        loading={loading}
        loadingItems={8}
      />
    </>
  );
};

export const Custom = () => {
  type AugmentedDummyData = DummyData & {
    hoverField: null;
  };

  const augmentedItems: AugmentedDummyData[] = items.map(item => ({
    ...item,
    hoverField: null,
  }));

  const HoverMenu = ({ item }: { item: DummyData }) => {
    const [open, setOpen] = useState(false);

    return (
      <MenuButton
        action={
          <Button
            icon={<ThreeDotIcon size={20} />}
            onClick={e => {
              e.stopPropagation();
              setOpen(!open);
            }}
            size="sm"
            variant="subtle"
          />
        }
        open={open}
        setOpen={setOpen}
      >
        <Menu>
          <MenuItem
            icon={<EditDuotoneIcon size={20} />}
            onClick={e => {
              e.stopPropagation();
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
            onClick={e => {
              e.stopPropagation();
              alert(`Delete ${item.name}`);
            }}
          >
            <Text color="red600">Delete</Text>
          </MenuItem>
        </Menu>
      </MenuButton>
    );
  };

  const augmentedHeaders: SimpleTableHeader<AugmentedDummyData>[] = [
    ...tableHeaders,
    {
      key: 'hoverField',
      name: null,
      noPadding: true,
      renderCustom: (_, item) => (
        <div className="row-hover-show">
          <HoverMenu item={item} />
        </div>
      ),
    },
  ];

  return (
    <SimpleTable
      headers={augmentedHeaders}
      items={augmentedItems}
      keyExtractor={item => String(item.id)}
      onRowClick={item => {
        alert(`Clicked ${item.name}`);
      }}
    />
  );
};
