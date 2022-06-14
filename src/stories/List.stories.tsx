import React from 'react';

import { Meta } from '@storybook/react/types-6-0';
import { IconAvatar } from 'src/components/avatar/IconAvatar';
import { List } from 'src/components/list/List';
import { ListItem } from 'src/components/list-item/ListItem';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';
import { ArrowLeftIcon } from 'src/icons/ArrowLeftIcon';
import { ArrowUpIcon } from 'src/icons/ArrowUpIcon';
import { withDesign } from 'storybook-addon-designs';

const ListMeta: Meta = {
  title: 'Amino/List',
  component: List,
  decorators: [withDesign],
};

export default ListMeta;

export const PrimaryList = () => (
  <List>
    <ListItem
      label="Label"
      disabled={false}
      subtitle="subtitle"
      onClick={() => {}}
    />
    <ListItem label="Label" disabled subtitle="subtitle" />
    <ListItem label="Label" selected subtitle="subtitle" />
  </List>
);

export const Empty = () => <List />;

export const OneItem = () => (
  <List>
    <ListItem label="Label" disabled={false} subtitle="subtitle" />
  </List>
);

export const ManyItems = () => (
  <List>
    <ListItem
      decorator={
        <IconAvatar shape="round" size="sm" icon={<ArrowDownIcon />} />
      }
      label="Label"
      disabled={false}
      subtitle="subtitle"
    />
    <ListItem
      decorator={
        <IconAvatar shape="round" size="sm" icon={<ArrowLeftIcon />} />
      }
      label="Label"
      disabled={false}
      subtitle="subtitle"
    />
    <ListItem
      decorator={<IconAvatar shape="round" size="sm" icon={<ArrowUpIcon />} />}
      label="Label"
      disabled={false}
      subtitle="subtitle"
    />
  </List>
);
