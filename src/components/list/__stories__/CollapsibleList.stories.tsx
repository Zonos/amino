import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import {
  CollapsibleList,
  type CollapsibleListProps,
} from 'src/components/list/CollapsibleList';
import { ListItem } from 'src/components/list-item/ListItem';
import { Thumbnail } from 'src/components/thumbnail/Thumbnail';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';
import { ArrowLeftIcon } from 'src/icons/ArrowLeftIcon';
import { ArrowUpIcon } from 'src/icons/ArrowUpIcon';

const CollapsibleListMeta: Meta = {
  component: CollapsibleList,
};

export default CollapsibleListMeta;

const PrimarycollapsibleListTemplate: StoryFn<CollapsibleListProps> = ({
  withBorder,
  withNegativeMargin,
}: CollapsibleListProps) => {
  const [selectedListItem, setSelectedListItem] = useState(1);

  const updateSelectedListItem = (num: number) => {
    setSelectedListItem(selectedListItem === num ? 0 : num);
  };
  return (
    <CollapsibleList
      icon={
        <svg
          fill="none"
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z"
            fill="url(#pattern0)"
          />
          <defs>
            <pattern
              height="1"
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
            >
              <use
                transform="scale(0.00666667)"
                xlinkHref="#image0_2704_33252"
              />
            </pattern>
            <image
              height="150"
              id="image0_2704_33252"
              width="150"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      }
      startExpanded
      title="Title"
      withBorder={withBorder}
      withNegativeMargin={withNegativeMargin}
    >
      <ListItem
        disabled={false}
        label="Label"
        onClick={() => updateSelectedListItem(1)}
        selected={selectedListItem === 1}
        subtitle="subtitle"
      />
      <ListItem
        disabled
        label="Label"
        onClick={() => updateSelectedListItem(2)}
        selected={selectedListItem === 2}
        subtitle="subtitle"
      />
      <ListItem
        label="Label"
        onClick={() => updateSelectedListItem(3)}
        selected={selectedListItem === 3}
        subtitle="subtitle"
      />
    </CollapsibleList>
  );
};

export const PrimaryList = PrimarycollapsibleListTemplate.bind({});
PrimarycollapsibleListTemplate.args = {
  withBorder: true,
  withNegativeMargin: false,
};

export const OneItem = () => (
  <CollapsibleList title="Collapse item 1">
    <ListItem disabled={false} label="Label" subtitle="subtitle" />
  </CollapsibleList>
);

export const ManyItems = () => {
  const [selectedListItem, setSelectedListItem] = useState(1);

  const updateSelectedListItem = (num: number) => {
    setSelectedListItem(selectedListItem === num ? 0 : num);
  };

  return (
    <CollapsibleList title="Item 1">
      <ListItem
        decorator={
          <Thumbnail icon={<ArrowDownIcon />} shape="round" size={16} />
        }
        disabled={false}
        label="Label"
        onClick={() => updateSelectedListItem(1)}
        selected={selectedListItem === 1}
        subtitle="subtitle"
      />
      <ListItem
        decorator={
          <Thumbnail icon={<ArrowLeftIcon />} shape="round" size={16} />
        }
        disabled={false}
        label="Label"
        onClick={() => updateSelectedListItem(2)}
        selected={selectedListItem === 2}
        subtitle="subtitle"
      />
      <ListItem
        decorator={<Thumbnail icon={<ArrowUpIcon />} shape="round" size={16} />}
        disabled={false}
        label="Label"
        onClick={() => updateSelectedListItem(3)}
        selected={selectedListItem === 3}
        subtitle="subtitle"
      />
    </CollapsibleList>
  );
};
