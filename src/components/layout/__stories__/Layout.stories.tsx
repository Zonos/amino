import type { Meta, StoryFn } from '@storybook/react';

import { Card } from 'src/components/card/Card';
import { NavigationGroup as NavigationGroupStory } from 'src/components/layout/__stories__/NavigationGroup.stories';
import { UserMenu } from 'src/components/layout/__stories__/UserMenu';
import { Layout, type LayoutProps } from 'src/components/layout/Layout';
import {
  NavigationGroup,
  NavigationItem,
} from 'src/components/layout/NavigationGroup';
import { HStack } from 'src/components/stack/HStack';
import { ZonosIcon } from 'src/icons/custom/ZonosIcon';

import styles from './Layout.stories.module.scss';

const LayoutMeta: Meta = {
  argTypes: {
    content: {
      table: {
        disable: true,
      },
    },
    footer: {
      table: {
        disable: true,
      },
    },
    headerContent: {
      table: {
        disable: true,
      },
    },
    logoSidebar: {
      description: 'Want to have logo on sidebar or not',
      mapping: {
        'Has Logo Sidebar': <ZonosIcon size={110} />,
        'No Logo Sidebar': null,
      },
      options: ['No Logo Sidebar', 'Has Logo Sidebar'],
    },
    searchInput: {
      mapping: {
        'Has Search Input': {
          onChange: () => {},
          value: '',
        },
        'No Search Input': null,
      },
      options: ['No Search Input', 'Has Search Input'],
    },
    sidebar: {
      table: {
        disable: true,
      },
    },
  },
  component: Layout,
  parameters: {
    docs: { source: { type: 'code' } },
  },
  subcomponents: {
    // @ts-expect-error subcomponents don't seem to be working
    NavigationGroup,
    // @ts-expect-error subcomponents don't seem to be working
    NavigationItem,
  },
};

export default LayoutMeta;

const Template: StoryFn<LayoutProps> = ({
  content,
  headerContent,
  logoSidebar,
}: LayoutProps) => (
  <Layout
    content={content}
    footer={<UserMenu />}
    headerContent={headerContent}
    logoSidebar={logoSidebar}
    sidebar={<NavigationGroupStory />}
  />
);

export const BasicLayout = Template.bind({});
BasicLayout.args = {
  content: (
    <HStack>
      <Card label="Content">Here is content description</Card>
    </HStack>
  ),
  headerContent: (
    <div className={styles.styledHeader}>
      <ZonosIcon size={110} />
    </div>
  ),
};

export const LayoutWithoutHeader = Template.bind({});
LayoutWithoutHeader.args = {
  content: (
    <HStack>
      <Card label="Content">Here is content description</Card>
    </HStack>
  ),
  logoSidebar: <ZonosIcon size={110} />,
};
