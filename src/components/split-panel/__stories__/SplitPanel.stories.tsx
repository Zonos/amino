import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Button } from 'src/components/button/LegacyButton';
import { SplitPanel as SplitPanelComponent } from 'src/components/split-panel/SplitPanel';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';

const SplitPanelMeta: Meta = {
  component: SplitPanelComponent,
};

export default SplitPanelMeta;

const StyledWrapper = styled.div`
  display: flex;
  gap: ${theme.space12};
`;

const StyledSplitPanel = styled(SplitPanelComponent)`
  .pane {
    &:last-child,
    &:last-child > div {
      border-radius: 0 ${theme.radius8} ${theme.radius8} 0;
    }
    &:first-child,
    &:first-child > div {
      border-radius: ${theme.radius8} 0 0 ${theme.radius8};
    }
  }
`;

const StyledItem = styled.div`
  border: 1px solid ${theme.gray300};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type SplitPanelProps = Parameters<typeof SplitPanelComponent>[0];

const Template: StoryFn<SplitPanelProps> = ({ ...props }: SplitPanelProps) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [itemQty, setItemQty] = useState(2);
  const [collapseFirstItem, setCollapseFirstItem] = useState(false);
  const [sizes, setSizes] = useState<number[]>([0.2, 0.8]);

  const renderSplitItem = ({ id }: { id: number }) => (
    <StyledItem key={id}>
      <Text type="header">{id}</Text>
    </StyledItem>
  );

  return (
    <VStack>
      <StyledWrapper>
        <Button onClick={() => setIsCollapse(!isCollapse)}>
          {isCollapse ? `Collapse all (Except the first one)` : `Expand all`}
        </Button>
        <Button
          onClick={() => {
            setSizes([!collapseFirstItem ? 0 : 0.2]);
            setCollapseFirstItem(!collapseFirstItem);
          }}
        >
          {!collapseFirstItem
            ? `Collapse first item`
            : `Expand first item to random width`}
        </Button>
        <Button onClick={() => setItemQty(itemQty + 1)}>Add item</Button>
        <Button
          disabled={itemQty === 0}
          onClick={() => setItemQty(itemQty - 1)}
        >
          Remove item
        </Button>
      </StyledWrapper>
      <StyledSplitPanel
        collapseAll={isCollapse}
        {...props}
        onSetSizes={setSizes}
        sizes={sizes}
      >
        {renderSplitItem({
          id: 1,
        })}
        {Array.from({ length: itemQty }).map((_, index) =>
          renderSplitItem({ id: index + 3 }),
        )}
      </StyledSplitPanel>
    </VStack>
  );
};

export const SplitPanel = Template.bind({});
