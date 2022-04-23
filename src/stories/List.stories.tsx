import React from 'react';

import { Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { ListItem } from '~/src/components/ListItem/ListItem';

import { List } from '../components/List';

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
