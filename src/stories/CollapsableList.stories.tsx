import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { IconAvatar } from 'src/components/avatar/IconAvatar';
import {
  CollapsableList,
  CollapsableListProps,
} from 'src/components/list/CollapsableList';
import { ListItem } from 'src/components/list-item/ListItem';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';
import { ArrowLeftIcon } from 'src/icons/ArrowLeftIcon';
import { ArrowUpIcon } from 'src/icons/ArrowUpIcon';
import { withDesign } from 'storybook-addon-designs';

const CollapsableListMeta: Meta = {
  title: 'Amino/CollapsableList',
  component: CollapsableList,
  decorators: [withDesign],
};

export default CollapsableListMeta;

const PrimaryCollapsableListTemplate: Story<CollapsableListProps> = ({
  withBorder,
  withNegativeMargin,
}: CollapsableListProps) => {
  const [selectedListItem, setSelectedListItem] = useState(1);

  const updateSelectedListItem = (num: number) => {
    setSelectedListItem(selectedListItem === num ? 0 : num);
  };
  return (
    <CollapsableList
      isExpand
      icon={
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z"
            fill="url(#pattern0)"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2704_33252"
                transform="scale(0.00666667)"
              />
            </pattern>
            <image
              id="image0_2704_33252"
              width="150"
              height="150"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      }
      withBorder={withBorder}
      withNegativeMargin={withNegativeMargin}
      title="Title"
    >
      <ListItem
        label="Label"
        disabled={false}
        subtitle="subtitle"
        onClick={() => updateSelectedListItem(1)}
        selected={selectedListItem === 1}
      />
      <ListItem
        label="Label"
        disabled
        subtitle="subtitle"
        onClick={() => updateSelectedListItem(2)}
        selected={selectedListItem === 2}
      />
      <ListItem
        label="Label"
        subtitle="subtitle"
        onClick={() => updateSelectedListItem(3)}
        selected={selectedListItem === 3}
      />
    </CollapsableList>
  );
};

export const PrimaryList = PrimaryCollapsableListTemplate.bind({});
PrimaryCollapsableListTemplate.args = {
  withBorder: true,
  withNegativeMargin: false,
};

export const OneItem = () => (
  <CollapsableList title="Collapse item 1">
    <ListItem label="Label" disabled={false} subtitle="subtitle" />
  </CollapsableList>
);

export const ManyItems = () => {
  const [selectedListItem, setSelectedListItem] = useState(1);

  const updateSelectedListItem = (num: number) => {
    setSelectedListItem(selectedListItem === num ? 0 : num);
  };

  return (
    <CollapsableList title="Item 1">
      <ListItem
        decorator={
          <IconAvatar shape="round" size="sm" icon={<ArrowDownIcon />} />
        }
        label="Label"
        disabled={false}
        subtitle="subtitle"
        selected={selectedListItem === 1}
        onClick={() => updateSelectedListItem(1)}
      />
      <ListItem
        decorator={
          <IconAvatar shape="round" size="sm" icon={<ArrowLeftIcon />} />
        }
        label="Label"
        disabled={false}
        selected={selectedListItem === 2}
        onClick={() => updateSelectedListItem(2)}
        subtitle="subtitle"
      />
      <ListItem
        decorator={
          <IconAvatar shape="round" size="sm" icon={<ArrowUpIcon />} />
        }
        label="Label"
        disabled={false}
        selected={selectedListItem === 3}
        onClick={() => updateSelectedListItem(3)}
        subtitle="subtitle"
      />
    </CollapsableList>
  );
};
