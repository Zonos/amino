import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Button } from 'src/components/button/Button';
import { MenuButton } from 'src/components/button/MenuButton';
import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Divider } from 'src/components/divider/Divider';
import { Menu } from 'src/components/menu/Menu';
import { MenuItem } from 'src/components/menu/MenuItem';
import {
  SimpleTable,
  type SimpleTableHeader,
  type SimpleTableProps,
} from 'src/components/simple-table/SimpleTable';
import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { EditDuotoneIcon } from 'src/icons/EditDuotoneIcon';
import { type Flag, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { ThreeDotIcon } from 'src/icons/ThreeDotIcon';
import { TrashCanDuotoneIcon } from 'src/icons/TrashCanDuotoneIcon';

import styles from './SimpleTable.stories.module.scss';

const meta: Meta = {
  component: SimpleTable,
  tags: ['tested'],
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

type DummyDataExtended = DummyData & {
  empty: null;
  interactions: null;
  multiLineContent: null;
};

const truncateText = 'This is a long string that should be truncated. '.repeat(
  5,
);

const items: DummyDataExtended[] = [
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
].map(item => ({
  ...item,
  empty: null,
  interactions: null,
  multiLineContent: null,
}));

const tableHeaders: SimpleTableHeader<DummyDataExtended>[] = [
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
    key: 'multiLineContent',
    name: 'Multi-line Content',
    renderCustom: () => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text>Line 1</Text>
        <Text color="gray600" fontSize="s">
          Line 2
        </Text>
        <Text color="gray600" fontSize="xs">
          Line 3
        </Text>
      </div>
    ),
  },
  {
    key: 'empty',
    name: 'Empty',
    renderCustom: () => null,
  },
  {
    key: 'interactions',
    name: 'Interactions',
    renderCustom: () => (
      <div style={{ alignItems: 'center', display: 'flex', gap: '1rem' }}>
        <Button variant="link">
          <a href="https://picsum.photos/100/100" target="_blank">
            Link
          </a>
        </Button>
        <Button
          onClick={e => {
            e.preventDefault();
            alert('Button Clicked');
          }}
        >
          Button
        </Button>
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

export const Basic: StoryObj = {
  play: async ({ canvasElement }) => {
    const withHoverTable = canvasElement.querySelector('.with-hover');
    const noHoverTable = canvasElement.querySelector('.no-hover');
    const row1 = withHoverTable?.querySelector('tbody > tr');
    const row2 = noHoverTable?.querySelector('tbody > tr');
    if (!row1 || !row2) {
      throw new Error('Row not found');
    }
    await userEvent.hover(row1);
    expect(row1).toHaveClass(/withHover.+/);
    await userEvent.hover(row2);
    expect(row2).not.toHaveClass(/withHover.+/);
  },
  render: () => (
    <>
      <div className="with-hover">
        <Text type="header">With hover</Text>
        <SimpleTable
          headers={tableHeaders}
          items={items}
          keyExtractor={item => String(item.id)}
        />
      </div>
      <Divider />
      <div className="no-hover">
        <Text type="header">Without hover</Text>
        <SimpleTable
          headers={tableHeaders}
          items={items}
          keyExtractor={item => String(item.id)}
          noHoverBackground
        />
      </div>
    </>
  ),
};

export const Long: StoryObj = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('sticky header z-index', () => {
      const row1 = canvas.getByTestId('amino--row-1');
      const cell = row1.querySelector('td:nth-child(4) > div > span');
      document.querySelector('#storybook-root > div > div')?.scrollBy(0, 50);

      const isCovered = (element: Element | null) => {
        if (!element) return true; // If the element doesn't exist, consider it covered

        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        // Get the topmost element at the center of the target element
        const topElement = document.elementFromPoint(x, y);
        return topElement !== element && !element.contains(topElement);
      };

      expect(isCovered(cell)).toBe(true);
    });
  },
  render: () => (
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
      maxHeight="1000px"
    />
  ),
};

export const Selectable: StoryObj<SimpleTableProps<object>> = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    global.alert = fn();
    await step('Check first box', async () => {
      const checkbox = canvas.getByTestId('amino--row-checkbox-1');
      await userEvent.click(checkbox);
      expect(checkbox.querySelector('input')).toBeChecked();
    });
    await step('Check another box', async () => {
      const checkbox = canvas.getByTestId('amino--row-checkbox-4');
      await userEvent.click(checkbox);
      expect(checkbox.querySelector('input')).toBeChecked();
    });
    await step('Uncheck first box', async () => {
      const checkbox = canvas.getByTestId('amino--row-checkbox-1');
      await userEvent.click(checkbox);
      expect(checkbox.querySelector('input')).not.toBeChecked();
    });
    await step('Select all', async () => {
      const checkbox = canvas.getByTestId('amino--header-checkbox');
      await userEvent.click(checkbox);
      const checkbox1 = canvas.getByTestId('amino--row-checkbox-1');
      const checkbox2 = canvas.getByTestId('amino--row-checkbox-4');
      const checkbox3 = canvas.getByTestId('amino--row-checkbox-29');
      expect(checkbox1.querySelector('input')).toBeChecked();
      expect(checkbox2.querySelector('input')).toBeChecked();
      expect(checkbox3.querySelector('input')).toBeChecked();
    });
    await step(
      'Try to trigger row click and verify no action occurs',
      async () => {
        const row = canvas.getByTestId('amino--row-1');
        await userEvent.click(row);
        expect(global.alert).not.toHaveBeenCalled();
      },
    );
    await step(
      'Select all then unselect all and verify onClick works again',
      async () => {
        const checkbox = canvas.getByTestId('amino--header-checkbox');
        const row = canvas.getByTestId('amino--row-1');
        await userEvent.click(checkbox);
        await userEvent.click(checkbox);
        await userEvent.click(row);
        expect(global.alert).toHaveBeenCalled();
      },
    );
  },
  render: ({ loading }) => {
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
      _item: DummyData,
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
        onRowClick={() => {
          alert(`Should not see this on checkbox click`);
        }}
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
  },
};

const link = 'https://letmegooglethat.com';

export const WithLink: StoryObj = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Ensure CustomLink works', async () => {
      const row = canvas.getByTestId('amino--row-1');
      await userEvent.click(row, { delay: 500 });
      expect(row.querySelector('a')).toHaveAttribute('href', `${link}/?q=John`);
    });
  },
  render: () => {
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
      _item: DummyData,
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
  },
};

export const Loading: StoryObj = {
  render: () => {
    const [loading, setLoading] = useState(true);
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
      _item: DummyData,
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
        <Divider />
        <SimpleTable
          bordered
          collapsible={{
            collapseContent: items.map(item => ({
              content: (
                <table className={styles.collapseTable}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Vegan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.vegan}</td>
                    </tr>
                  </tbody>
                </table>
              ),
              key: String(item.id),
            })),
            enabled: true,
            expandedItemKeys,
            toggleItem,
          }}
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
  },
};

export const Bordered: StoryObj = {
  play: async ({ canvasElement }) => {
    const header1 = canvasElement.querySelector('.with-headers thead');
    const header2 = canvasElement.querySelector('.no-headers thead');
    expect(header1).toBeVisible();
    expect(header2).not.toBeVisible();
  },
  render: () => {
    const augmentedHeaders: SimpleTableHeader<DummyDataExtended>[] =
      tableHeaders.filter(Boolean).map(header => ({
        ...header,
        minWidth: header.minWidth || 50,
        name: null,
      }));
    return (
      <>
        <Text type="header">With headers</Text>
        <SimpleTable
          bordered
          className="with-headers"
          headers={tableHeaders}
          items={items}
          keyExtractor={item => String(item.id)}
        />
        <Divider />
        <Text type="header">Without headers</Text>
        <SimpleTable
          bordered
          className="no-headers"
          headers={augmentedHeaders}
          items={items}
          keyExtractor={item => String(item.id)}
        />
      </>
    );
  },
};

export const Collapsible: StoryObj = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Ensure collapsible works', async () => {
      await step('Normal', async () => {
        const row1 = canvas.getByTestId('amino--row-1');
        await userEvent.click(row1, { delay: 500 });
        expect(canvas.getByTestId('amino--collapse-1')).not.toHaveStyle({
          height: '0px',
        });

        const row2 = canvas.getByTestId('amino--row-4');
        await userEvent.click(row2, { delay: 500 });
        expect(canvas.getByTestId('amino--collapse-4')).not.toHaveStyle({
          height: '0px',
        });
      });

      await step('Bordered', async () => {
        const row1 = canvas.getByTestId('amino--row-101');
        await userEvent.click(row1, { delay: 500 });
        expect(canvas.getByTestId('amino--collapse-101')).not.toHaveStyle({
          height: '0px',
        });

        const row2 = canvas.getByTestId('amino--row-105');
        await userEvent.click(row2, { delay: 500 });
        expect(canvas.getByTestId('amino--collapse-105')).not.toHaveStyle({
          height: '0px',
        });
      });

      await step('Selectable', async () => {
        const row1 = canvas.getByTestId('amino--row-201');
        await userEvent.click(row1, { delay: 500 });
        expect(canvas.getByTestId('amino--collapse-201')).not.toHaveStyle({
          height: '0px',
        });

        const row2 = canvas.getByTestId('amino--row-204');
        await userEvent.click(row2, { delay: 500 });
        expect(canvas.getByTestId('amino--collapse-204')).not.toHaveStyle({
          height: '0px',
        });
      });
    });

    await step('Ensure Collapse chevron is fixed width', async () => {
      const row1 = canvas.getByTestId('amino--row-1');
      const chevron1 = row1.querySelector('td:last-child');
      expect(chevron1).toHaveStyle({ width: '48px' });

      const row2 = canvas.getByTestId('amino--row-101');
      const chevron2 = row2.querySelector('td:last-child');
      // bordered will have 1px border on the right
      expect(chevron2).toHaveStyle({ width: '49px' });

      const row3 = canvas.getByTestId('amino--row-201');
      const chevron3 = row3.querySelector('td:last-child');
      expect(chevron3).toHaveStyle({ width: '49px' });
    });
  },
  render: () => {
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
      _item: DummyData,
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
        <table className={styles.collapseTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Vegan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.vegan}</td>
            </tr>
          </tbody>
        </table>
      ),
      key: String(item.id),
    }));

    const adjustedCollapseContent = collapseContent
      .map(item => ({ ...item, key: String(Number(item.key) + 100) }))
      .filter((_, index) => index !== 3);

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
          items={items.map(item => ({ ...item, id: item.id + 100 }))}
          keyExtractor={item => String(item.id)}
        />
        <Divider />
        <Text type="header">Selectable</Text>
        <SimpleTable
          bordered
          className="selectable-table"
          collapsible={{
            collapseContent: collapseContent.map(item => ({
              ...item,
              key: String(Number(item.key) + 200),
            })),
            enabled: true,
            expandedItemKeys,
            toggleItem,
          }}
          headers={tableHeaders}
          items={items.map(item => ({ ...item, id: item.id + 200 }))}
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
  },
};

export const Custom: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    global.alert = fn();
    const row1 = canvas.getByTestId('amino--row-1');
    await userEvent.click(row1);
    expect(global.alert).toHaveBeenCalled();
  },
  render: () => {
    const [shouldTruncate, setShouldTruncate] = useState(true);
    const [viewOneRow, setViewOneRow] = useState(false);

    type AugmentedDummyData = DummyDataExtended & {
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
          <Button
            icon={<ThreeDotIcon size={20} />}
            size="sm"
            variant="subtle"
          />
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
  },
};

export const OnRowClick: StoryObj<typeof SimpleTable> = {
  play: async ({ canvasElement }) => {
    global.alert = fn();
    const canvas = within(canvasElement);
    const row1 = canvas.getByTestId('amino--row-1');
    const row2 = canvas.getByTestId('amino--row-101');
    await userEvent.click(row1);
    expect(global.alert).toHaveBeenCalled();
    await userEvent.click(row2, { delay: 500 });
    expect(global.alert).toHaveBeenCalled();
    expect(canvas.getByTestId('amino--collapse-101')).not.toHaveStyle({
      height: '0px',
    });
  },
  render: () => {
    const [expandedItemKeys, setExpandedItemKeys] = useState<string[]>([]);

    const toggleItem = (id: string) =>
      setExpandedItemKeys(
        expandedItemKeys.includes(id)
          ? expandedItemKeys.filter(x => x !== id)
          : expandedItemKeys.concat(id),
      );

    const collapseContent = items.map(item => ({
      content: (
        <table className={styles.collapseTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Vegan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.vegan}</td>
            </tr>
          </tbody>
        </table>
      ),
      key: String(item.id + 100),
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
          items={items.map(item => ({ ...item, id: item.id + 100 }))}
          keyExtractor={item => String(item.id)}
          onRowClick={item => {
            alert(`Clicked ${item.name}`);
          }}
        />
      </>
    );
  },
};

export const TextWrapMethods: StoryObj = {
  play: async ({ canvasElement, step }) => {
    await step('Text wrap methods', async () => {
      const canvas = within(canvasElement);
      await step('Normal', async () => {
        const normalCell = canvas
          .getByTestId('normal-table')
          .querySelector('tbody tr:first-child td:first-child');
        expect(normalCell).toHaveStyle({
          whiteSpace: 'normal',
        });
        expect(normalCell).not.toHaveStyle({
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        });
      });
      await step('Truncate', async () => {
        const truncateCell = canvas
          .getByTestId('truncate-table')
          .querySelector('tbody tr:first-child td > :first-child');
        expect(truncateCell).toHaveStyle({
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        });
      });
      await step('Nowrap', async () => {
        const nowrapCell = canvas
          .getByTestId('nowrap-table')
          .querySelector('tbody tr:first-child td > :first-child');
        expect(nowrapCell).toHaveStyle({
          whiteSpace: 'nowrap',
        });
        expect(nowrapCell).not.toHaveStyle({
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        });
      });
    });
  },
  render: () => {
    const longText =
      'This is a very long text that should demonstrate different wrapping behaviors. '.repeat(
        3,
      );

    const sampleData = [1, 2, 3].map(id => ({
      extra: longText,
      id: `${id} ${longText}`,
      text: longText,
    }));

    const createHeaders = (
      method: 'normal' | 'truncate' | 'nowrap',
    ): SimpleTableHeader<{ extra: string; id: string; text: string }>[] => [
      {
        key: 'id',
        name: `Text Wrap: ${method}`,
        textWrapMethod: method,
        width: 34,
      },
      {
        key: 'text',
        name: 'Text',
        textWrapMethod: method,
      },
      {
        key: 'extra',
        name: 'Text',
        textWrapMethod: method,
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div data-testid="normal-table">
          <Text type="header">Normal</Text>
          <SimpleTable
            headers={createHeaders('normal')}
            items={sampleData}
            keyExtractor={item => String(item.id)}
          />
        </div>

        <div data-testid="truncate-table">
          <Text type="header">Truncate</Text>
          <SimpleTable
            headers={createHeaders('truncate')}
            items={sampleData}
            keyExtractor={item => String(item.id)}
          />
        </div>

        <div data-testid="nowrap-table">
          <Text type="header">Nowrap</Text>
          <SimpleTable
            headers={createHeaders('nowrap')}
            items={sampleData}
            keyExtractor={item => String(item.id)}
          />
        </div>
      </div>
    );
  },
};
