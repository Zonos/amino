/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Banner } from 'src/components/banner/Banner';
import { Button } from 'src/components/button/Button';
import { LegacyButton } from 'src/components/button/LegacyButton';
import { type CollapseProps, Collapse } from 'src/components/collapse/Collapse';
import { NavigationItem } from 'src/components/layout/NavigationGroup';
import { Text } from 'src/components/text/Text';
import { ChevronRightIcon } from 'src/icons/ChevronRightIcon';
import { theme } from 'src/styles/constants/theme';

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

const BasicWrapper = styled.div`
  border: ${theme.border};
  background: ${theme.gray100};
  margin: 20px;
  padding: 20px;
  display: flex;
`;

export const Basic: StoryFn<CollapseProps> = props => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Button onClick={() => setCollapsed(!collapsed)}>Toggle</Button>
      <Collapse collapsed={collapsed} {...props}>
        <BasicWrapper>
          <Text>Some text</Text>
        </BasicWrapper>
      </Collapse>
    </>
  );
};

const CollapseContainer = styled.div`
  margin: 20px;
  display: flex;
  gap: 40px;
`;

const RandomCollapseWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 6px;
`;

const ActionWrapper = styled.div`
  display: inline-flex;
  gap: 20px;
`;

const StyledBanner = styled(Banner)`
  margin: ${theme.space16};
`;

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
      <StyledBanner>Component has margin top & bottom</StyledBanner>
      <NavigationItem content="Item 1" isActive />
      <NavigationItem content="Item 2" />
      <NavigationItem content="Item 3" />
    </>
  );

  return (
    <>
      <ActionWrapper>
        <LegacyButton
          onClick={() => {
            setOpen1(!open1);
            setOpen2(!open2);
          }}
        >
          Toggle
        </LegacyButton>

        <LegacyButton
          onClick={() => {
            setMoreItems(true);
          }}
        >
          Add more items
        </LegacyButton>
      </ActionWrapper>
      <CollapseContainer>
        <p>Collapse size: {collapseSize ? `${collapseSize}px` : '0px'}</p>
        <div>
          Open by default (no border) - to test if the the `Collapse` will
          collapse the margin with its children
          <Collapse collapsed={!open1} collapseSize={collapseSize}>
            {children}
            {moreItems && (
              <>
                <NavigationItem content="Item 4" />
                <NavigationItem content="Item 5" />
                <NavigationItem content="Item 6" />
                <StyledBanner>Component has margin top & bottom</StyledBanner>
              </>
            )}
          </Collapse>
        </div>
        <div>
          Open by default
          <Collapse collapsed={!open1} collapseSize={collapseSize}>
            <RandomCollapseWrapper>
              {children}
              {moreItems && (
                <>
                  <NavigationItem content="Item 4" />
                  <NavigationItem content="Item 5" />
                  <NavigationItem content="Item 6" />
                  <StyledBanner>Component has margin top & bottom</StyledBanner>
                </>
              )}
            </RandomCollapseWrapper>
          </Collapse>
        </div>
        <div>
          Closed by default
          <Collapse collapsed={!open2} collapseSize={collapseSize}>
            <RandomCollapseWrapper>
              {children}
              {moreItems && (
                <>
                  <NavigationItem content="Item 4" />
                  <NavigationItem content="Item 5" />
                  <NavigationItem content="Item 6" />
                </>
              )}
            </RandomCollapseWrapper>
          </Collapse>
        </div>
      </CollapseContainer>
    </>
  );
};

const StyledChevronRightIcon = styled(ChevronRightIcon)<{
  $collapsed: boolean;
}>`
  color: ${theme.gray600};
  transition: ${theme.transition};

  transform: ${p => (p.$collapsed ? 'rotate(0)' : 'rotate(-90deg)')};
`;

const Container = styled.div`
  width: 500px;
  height: 300px;
  border: ${theme.border};
  overflow-y: auto;
  overscroll-behavior-y: contain;
`;

const ItemWrapper = styled.div`
  padding-left: 16px;
`;

const ItemLabel = styled.div`
  cursor: pointer;
  display: flex;
  gap: 8px;
`;

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
        <ItemWrapper>
          <ItemLabel
            key={index}
            onClick={() =>
              setCollapsed(prev => {
                const next = [...prev];
                next[index] = !next[index];
                return next;
              })
            }
          >
            <StyledChevronRightIcon $collapsed={collapsed[index]!} />
            <Text>Item {index + 1}</Text>
          </ItemLabel>
          <Collapse collapsed={collapsed[index]!}>
            <DropdownNavItem items={item} />
          </Collapse>
        </ItemWrapper>
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
  <Container>
    <DropdownNavItem items={items} />
  </Container>
);
