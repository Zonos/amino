import React from 'react';

import { Meta } from '@storybook/react/types-6-0';
import { List } from 'src/components/list/List';
import { ListItem } from 'src/components/list-item/ListItem';
import { withDesign } from 'storybook-addon-designs';

const ListMeta: Meta = {
  title: 'Amino/List',
  component: List,
  decorators: [withDesign],
};

export default ListMeta;

export const PrimaryList = () => (
  <List>
    <ListItem label="Label" disabled={false} subtitle="subtitle" />
    <ListItem label="Label" disabled={false} subtitle="subtitle" />
    <ListItem label="Label" disabled={false} subtitle="subtitle" />
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
    <ListItem label="Label" disabled={false} subtitle="subtitle" />
    <ListItem label="Label" disabled={false} subtitle="subtitle" />
    <ListItem label="Label" disabled={false} subtitle="subtitle" />
  </List>
);
