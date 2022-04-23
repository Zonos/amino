/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { Card } from '~/src/components/Card';
import {
  NavigationGroup,
  NavigationItem,
} from '~/src/components/Layout/NavigationGroup';
import { HStack } from '~/src/components/Stack';
import { ZonosIcon } from '~/src/icons/ZonosIcon';

import { Layout, type LayoutProps } from '../../components/Layout';
import { NavigationGroupExample as NavigationGroupStory } from './NavigationGroup.stories';
import { UserMenu } from './UserMenu';

const LayoutMeta: Meta = {
  title: 'Amino/Layout',
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
      defaultValue: 'Has Search Input',
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
    },
    footer: {
      control: false,
    },
  },
};

export default LayoutMeta;

const Template: Story<LayoutProps> = ({
  content,
  logoSidebar,
  headerContent,
  searchInput,
}: LayoutProps) => {
  return (
    <Layout
      logoSidebar={logoSidebar}
      searchInput={searchInput}
      content={content}
      footer={<UserMenu />}
      sidebar={<NavigationGroupStory />}
      headerContent={headerContent}
    />
  );
};

const StyledHeader = styled.div`
  padding: 0 var(--amino-space);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--amino-space);
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
