import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { SplitPanel as SplitPanelComponent } from 'src/components/split-panel/SplitPanel';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';

import styles from './SplitPanel.stories.module.scss';

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
    <div key={id} className={styles.styledItem}>
      <Text type="header">{id}</Text>
    </div>
  );

  return (
    <VStack>
      <div className={styles.styledWrapper}>
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
        className={styles.styledSplitPanel}
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
