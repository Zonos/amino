import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { Card, type CardProps } from 'src/components/card/Card';
import { theme } from 'src/styles/constants/theme';

const CardMeta: Meta = {
  component: Card,
};

export default CardMeta;

const Template: StoryFn<CardProps> = ({
  actions,
  children,
  footerActions,
  footerContent,
  footerHeight,
  label,
  spacing = theme.space24,
}: CardProps) => (
  <Card
    actions={actions}
    footerActions={footerActions}
    footerContent={footerContent}
    footerHeight={footerHeight}
    label={label}
    spacing={spacing}
  >
    {children}
  </Card>
);

export const BasicCard = Template.bind({});
BasicCard.args = {
  children: 'Card contents',
  label: 'My hot card',
  spacing: theme.space20,
};
BasicCard.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const CardWithActions = Template.bind({});
CardWithActions.args = {
  actions: <Button>Title action</Button>,
  children: 'Card contents',
  footerActions: <Button>Footer action</Button>,
  label: 'My hot card',
};
CardWithActions.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};

export const CardWithFooter = Template.bind({});
CardWithFooter.args = {
  children: 'content',
  footerActions: (
    <>
      <Button>footer action 1</Button>
      <Button>footer action 2</Button>
    </>
  ),
  footerContent: 'footer content',
  label: 'Super cool',
};
CardWithFooter.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};

export const CardWithFooterWithoutFooterActions = Template.bind({});
CardWithFooterWithoutFooterActions.args = {
  children: 'content',
  footerContent: 'footer content',
  label: 'Super cool',
};
CardWithFooterWithoutFooterActions.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};

export const CardWithFooterHeight = Template.bind({});
CardWithFooterHeight.args = {
  children: 'content',
  footerContent: 'footer content',
  footerHeight: 120,
  label: 'Super cool',
};
CardWithFooterHeight.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};
