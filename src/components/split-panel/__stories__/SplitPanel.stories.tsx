import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Button } from 'src/components/button/Button';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { SplitPanel as SplitPanelComponent } from '../SplitPanel';

const SplitPanelMeta: Meta = {
  component: SplitPanelComponent,
};

export default SplitPanelMeta;

const StyledWrapper = styled.div`
  display: flex;
  gap: ${theme.space12};
`;

const StyledItem = styled.div`
  border: 1px solid ${theme.gray300};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    border-radius: 0 ${theme.radius8} ${theme.radius8} 0;
  }
  &:first-child {
    border-radius: ${theme.radius8} 0 0 ${theme.radius8};
  }
`;

type SplitPanelProps = Parameters<typeof SplitPanelComponent>[0];

const Template: StoryFn<SplitPanelProps> = ({ ...props }: SplitPanelProps) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [itemQty, setItemQty] = useState(2);
  const [collapseFirstItem, setCollapseFirstItem] = useState(false);

  const renderSplitItem = ({ id, width }: { id: number; width?: string }) => (
    <StyledItem key={id} style={{ width: width || undefined }}>
      <Text type="header">{id}</Text>
    </StyledItem>
  );
  // get the random number in javascript
  const getRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <VStack>
      <StyledWrapper>
        <Button onClick={() => setIsCollapse(!isCollapse)}>
          {isCollapse ? `Collapse all (Except the first one)` : `Expand all`}
        </Button>
        <Button onClick={() => setCollapseFirstItem(!collapseFirstItem)}>
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
      <SplitPanelComponent collapseAll={isCollapse} {...props}>
        {renderSplitItem({
          id: 1,
          width: collapseFirstItem ? '0' : `${getRandomNumber(10, 300)}px`,
        })}
        {Array.from({ length: itemQty }).map((_, index) =>
          renderSplitItem({ id: index + 3 })
        )}
      </SplitPanelComponent>
    </VStack>
  );
};

export const SplitPanel = Template.bind({});
