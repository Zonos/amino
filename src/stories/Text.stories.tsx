import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Text, TextProps } from '../components/Text';

const TextMeta: Meta = {
  title: 'Amino/Text',
  component: Text,
  decorators: [withDesign],
};

export default TextMeta;

const Template: Story<TextProps> = ({ children, title, type }: TextProps) => (
  <Text type={type} title={title}>
    {children}
  </Text>
);

export const H1Text = Template.bind({});
H1Text.args = {
  type: 'h1',
  children: 'Hello I am an h1',
};
H1Text.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A122',
  },
};

export const H1TextWithTitle = Template.bind({});
H1TextWithTitle.args = {
  title: 'You found me',
  type: 'h1',
  children: 'Hello I am an h1 with a title',
};
H1TextWithTitle.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A122',
  },
};
