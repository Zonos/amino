import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { SplitPanel as SplitPanelComponent } from 'src/components/split-panel/SplitPanel';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';

const SplitPanelMeta: Meta = {
  component: SplitPanelComponent,
};

export default SplitPanelMeta;

type SplitPanelProps = Parameters<typeof SplitPanelComponent>[0];

const Template: StoryFn<SplitPanelProps> = ({ ...props }: SplitPanelProps) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [itemQty, setItemQty] = useState(2);
  const [collapseFirstItem, setCollapseFirstItem] = useState(false);
  const [sizes, setSizes] = useState<number[]>([0.2, 0.8]);

  const renderSplitItem = ({ id }: { id: number }) => (
    <div
      key={id}
      className="flex h-[100px] items-center justify-center border border-gray-300"
    >
      <Text type="header">{id}</Text>
    </div>
  );

  return (
    <VStack>
      <div className="flex gap-amino-12">
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
      </div>
      <SplitPanelComponent
        className="[&_.pane:first-child]:rounded-l-amino8 [&_.pane:first-child>div]:rounded-l-amino8 [&_.pane:last-child]:rounded-r-amino8 [&_.pane:last-child>div]:rounded-r-amino8"
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
      </SplitPanelComponent>
    </VStack>
  );
};

export const SplitPanel = Template.bind({});
