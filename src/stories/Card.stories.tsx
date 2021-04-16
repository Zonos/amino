import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Card, CardProps } from '../components/Card';
import { Button } from '../components/Button';

const CardMeta: Meta = {
  title: 'Amino/Card',
  component: Card,
  decorators: [withDesign],
};

export default CardMeta;

const Template: Story<CardProps> = ({
  label,
  children,
  actions,
  footerActions,
}: CardProps) => (
  <Card label={label} actions={actions} footerActions={footerActions}>
    {children}
  </Card>
);

export const BasicCard = Template.bind({});
BasicCard.args = {
  children: 'Card contents',
  label: 'My hot card',
};
BasicCard.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const CardWithActions = Template.bind({});
CardWithActions.args = {
  children: 'Card contents',
  label: 'My hot card',
  actions: <Button>Title action</Button>,
  footerActions: <Button>Footer action</Button>,
};
CardWithActions.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};
