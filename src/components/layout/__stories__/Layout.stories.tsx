import type { Meta, StoryFn } from '@storybook/react';
import { Card } from 'src/components/card/Card';
import { type LayoutProps, Layout } from 'src/components/layout/Layout';
import {
  NavigationGroup,
  NavigationItem,
} from 'src/components/layout/NavigationGroup';
import { HStack } from 'src/components/stack/HStack';
import { ZonosIcon } from 'src/icons/custom/ZonosIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { NavigationGroup as NavigationGroupStory } from './NavigationGroup.stories';
import { UserMenu } from './UserMenu';

const LayoutMeta: Meta = {
  component: Layout,
  subcomponents: {
    NavigationGroup,
    NavigationItem,
  },
  parameters: {
    docs: { source: { type: 'code' } },
  },
  argTypes: {
    searchInput: {
      options: ['No Search Input', 'Has Search Input'],
      mapping: {
        'No Search Input': null,
        'Has Search Input': {
          value: '',
          onChange: () => {},
        },
      },
    },
    logoSidebar: {
      description: 'Want to have logo on sidebar or not',
      options: ['No Logo Sidebar', 'Has Logo Sidebar'],
      mapping: {
        'No Logo Sidebar': null,
        'Has Logo Sidebar': <ZonosIcon size={110} />,
      },
    },
    sidebar: {
      control: false,
    },
    headerContent: {
      control: false,
    },
    content: {
      control: false,
      defaultValue: 'hello',
    },
    footer: {
      control: false,
    },
  },
};

export default LayoutMeta;

const Template: StoryFn<LayoutProps> = ({
  content,
  logoSidebar,
  headerContent,
  searchInput,
}: LayoutProps) => (
  <Layout
    logoSidebar={logoSidebar}
    searchInput={searchInput}
    content={content}
    footer={<UserMenu />}
    sidebar={<NavigationGroupStory />}
    headerContent={headerContent}
  />
);

const StyledHeader = styled.div`
  padding: 0 ${theme.space24};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${theme.space24};
`;

export const BasicLayout = Template.bind({});
BasicLayout.args = {
  content: (
    <HStack>
      <Card label="Content">Here is content description</Card>
    </HStack>
  ),
  headerContent: (
    <StyledHeader>
      <ZonosIcon size={110} />
    </StyledHeader>
  ),
};

export const LayoutWithoutHeader = Template.bind({});
LayoutWithoutHeader.args = {
  logoSidebar: <ZonosIcon size={110} />,
  content: (
    <HStack>
      <Card label="Content">Here is content description</Card>
    </HStack>
  ),
};
