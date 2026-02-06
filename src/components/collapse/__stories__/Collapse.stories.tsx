import { useEffect, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Banner } from 'src/components/banner/Banner';
import { Button } from 'src/components/button/Button';
import { Collapse, type CollapseProps } from 'src/components/collapse/Collapse';
import { NavigationItem } from 'src/components/layout/NavigationGroup';
import { Text } from 'src/components/text/Text';
import { ChevronRightIcon } from 'src/icons/ChevronRightIcon';
import { cn } from 'src/utils/cn';

const CollapseMeta: Meta = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    collapsed: {
      table: {
        disable: true,
      },
    },
  },
  component: Collapse,
  parameters: {
    docs: { source: { type: 'code' } },
  },
};

export default CollapseMeta;

export const Basic: StoryFn<CollapseProps> = props => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Button onClick={() => setCollapsed(!collapsed)}>Toggle</Button>
      <Collapse collapsed={collapsed} {...props}>
        <div className="m-5 flex border border-gray-200 bg-gray-100 p-5 dark:border-gray-700 dark:bg-gray-800">
          <Text>Some text</Text>
        </div>
      </Collapse>
    </>
  );
};

export const Random: StoryFn<CollapseProps> = ({ collapseSize }) => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [moreItems, setMoreItems] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMoreItems(true);
    }, 2000);

    setTimeout(() => {
      setMoreItems(false);
    }, 4000);
  }, []);

  useEffect(() => {
    if (moreItems) {
      setTimeout(() => {
        setMoreItems(false);
      }, 2000);
    }
  }, [moreItems]);

  const children = (
    <>
      <Banner className="m-4">Component has margin top & bottom</Banner>
      <NavigationItem content="Item 1" isActive />
      <NavigationItem content="Item 2" />
      <NavigationItem content="Item 3" />
    </>
  );

  return (
    <>
      <div className="inline-flex gap-5">
        <Button
          onClick={() => {
            setOpen1(!open1);
            setOpen2(!open2);
          }}
        >
          Toggle
        </Button>

        <Button
          onClick={() => {
            setMoreItems(true);
          }}
        >
          Add more items
        </Button>
      </div>
      <div className="m-5 flex gap-10">
        <p>Collapse size: {collapseSize ? `${collapseSize}px` : '0px'}</p>
        <div>
          Open by default (no border) - to test if the the `Collapse` will
          collapse the margin with its children
          <Collapse collapseSize={collapseSize} collapsed={!open1}>
            {children}
            {moreItems && (
              <>
                <NavigationItem content="Item 4" />
                <NavigationItem content="Item 5" />
                <NavigationItem content="Item 6" />
                <Banner className="m-4">
                  Component has margin top & bottom
                </Banner>
              </>
            )}
          </Collapse>
        </div>
        <div>
          Open by default
          <Collapse collapseSize={collapseSize} collapsed={!open1}>
            <div className="rounded-amino-6 border border-gray-400 dark:border-gray-600">
              {children}
              {moreItems && (
                <>
                  <NavigationItem content="Item 4" />
                  <NavigationItem content="Item 5" />
                  <NavigationItem content="Item 6" />
                  <Banner className="m-4">
                    Component has margin top & bottom
                  </Banner>
                </>
              )}
            </div>
          </Collapse>
        </div>
        <div>
          Closed by default
          <Collapse collapseSize={collapseSize} collapsed={!open2}>
            <div className="rounded-amino-6 border border-gray-400 dark:border-gray-600">
              {children}
              {moreItems && (
                <>
                  <NavigationItem content="Item 4" />
                  <NavigationItem content="Item 5" />
                  <NavigationItem content="Item 6" />
                </>
              )}
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
};

type Item = Item[] | null;

const DropdownNavItem = ({ items }: { items: Item[] | null }) => {
  const [collapsed, setCollapsed] = useState<boolean[]>(
    items?.map(() => true) || [],
  );

  if (!items) {
    return <Text>Leaf</Text>;
  }

  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="pl-4">
          <button
            className="flex cursor-pointer gap-2 focus:outline-none"
            onClick={() =>
              setCollapsed(prev => {
                const next = [...prev];
                next[index] = !next[index];
                return next;
              })
            }
            type="button"
          >
            <ChevronRightIcon
              className={cn(
                'text-gray-600 transition-transform duration-amino-normal dark:text-gray-400',
                collapsed[index] ? 'rotate-0' : '-rotate-90',
              )}
            />
            <Text>Item {index + 1}</Text>
          </button>
          <Collapse collapsed={collapsed[index]!}>
            <DropdownNavItem items={item} />
          </Collapse>
        </div>
      ))}
    </>
  );
};

// A lot of nested items
const items: Item[] = [
  [[[[[null]]]]],
  null,
  [[[[null]]]],
  null,
  [[[null]]],
  null,
  [[null]],
  null,
  [null],
  null,
];

export const DropdownNav: StoryFn<CollapseProps> = () => (
  <div className="h-[300px] w-[500px] overflow-y-auto overscroll-contain border border-gray-200 dark:border-gray-700">
    <DropdownNavItem items={items} />
  </div>
);
