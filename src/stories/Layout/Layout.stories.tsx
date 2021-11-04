import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Layout, LayoutProps } from '../../components/Layout';
import { UserMenu } from './UserMenu';

const LayoutMeta: Meta = {
  title: 'Amino/Layout',
  component: Layout,
  decorators: [withDesign],
};

export default LayoutMeta;

const Template: Story<LayoutProps> = ({
  footer,
  content,
  sidebar,
  headerContent,
}: LayoutProps) => (
  <Layout
    content={content}
    footer={footer}
    sidebar={sidebar}
    headerContent={headerContent}
  />
);

export const BasicLayout = Template.bind({});
BasicLayout.args = {
  footer: <UserMenu />,
  sidebar: <div style={{ height: '400px', background: 'gray' }}>sidebar</div>,
  content: 'content',
  headerContent: 'Header content',
};
BasicLayout.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const LayoutWithoutHeader = Template.bind({});
LayoutWithoutHeader.args = {
  footer: <UserMenu />,
  sidebar: 'sidebar',
  content: 'content',
  headerContent: null,
};
LayoutWithoutHeader.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};
