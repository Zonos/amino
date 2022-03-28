/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { Card } from 'components/Card';
import {
  NavigationGroup,
  NavigationItem,
} from 'components/Layout/NavigationGroup';
import { HStack } from 'components/Stack';
import { ZonosIcon } from 'icons/ZonosIcon';

import { Layout, LayoutProps } from '../../components/Layout';
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
  headerContent,
  searchInput,
}: LayoutProps) => {
  return (
    <Layout
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
  content: (
    <HStack>
      <Card label="Content">Here is content description</Card>
    </HStack>
  ),
};
