/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { MouseEvent, useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import {
  NavigationGroup,
  NavigationItem,
} from '~/src/components/Layout/NavigationGroup';
import { HomeIcon } from '~/src/icons/HomeIcon';
import { LandedCostIcon } from '~/src/icons/LandedCostIcon';
import { PuzzleIcon } from '~/src/icons/PuzzleIcon';

const NavigationGroupMeta: Meta = {
  title: 'Amino/Layout',
  component: NavigationGroup,
  subcomponents: { NavigationItem },
  decorators: [withDesign],

  parameters: {
    docs: { source: { type: 'code' } },
  },
  argTypes: {
    children: {
      type: 'symbol',
    },
    isExpand: {
      type: 'symbol',
    },
    content: {
      type: 'symbol',
      description:
        '**NOTE**: Should be `NavigationItem` component in order to have proper styling. If you want to use `href`, WRAP the `anchor` tag outside of the `NavigationItem` component.',
    },
    className: {
      type: 'string',
    },
  },
};

export default NavigationGroupMeta;

const Template: Story = ({ className }) => {
  const [pathname, setPathname] = useState('/quoter/create');
  const mockUrlChange = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setPathname(e.currentTarget.pathname);
  };
  return (
    <>
      <NavigationItem content="=> This NavigationItem Is Not Anchor" />
      <a href="/" onClick={mockUrlChange}>
        <NavigationItem
          content="Home"
          icon={<HomeIcon size={20} />}
          isActive={pathname === '/'}
        />
      </a>
      <NavigationGroup
        content={
          <a href="/quoter/create" onClick={mockUrlChange}>
            <NavigationItem
              content="Quoter"
              icon={<LandedCostIcon size={20} />}
            />
          </a>
        }
        className={className}
        isExpand={
          !!pathname.split('/')[1] && pathname.split('/')[1].includes('quoter')
        }
      >
        <a href="/quoter/create" onClick={mockUrlChange}>
          <NavigationItem
            content="Create"
            isActive={pathname.includes('/quoter/create')}
          />
        </a>
        <a href="/quoter/recent" onClick={mockUrlChange}>
          <NavigationItem
            content="Recent"
            isActive={pathname.includes('/quoter/recent')}
          />
        </a>
      </NavigationGroup>

      <NavigationGroup
        content={
          <a href="/classify/create" onClick={mockUrlChange}>
            <NavigationItem
              content="Classify"
              icon={<PuzzleIcon size={20} />}
            />
          </a>
        }
        isExpand={
          !!pathname.split('/')[1] &&
          pathname.split('/')[1].includes('classify')
        }
        className={className}
      >
        <a href="/classify/create" onClick={mockUrlChange}>
          <NavigationItem
            content="Create"
            isActive={pathname.includes('/classify/create')}
          />
        </a>
        <a href="/classify/bulk" onClick={mockUrlChange}>
          <NavigationItem
            content="Bulk"
            isActive={pathname.includes('/classify/bulk')}
          />
        </a>
      </NavigationGroup>
    </>
  );
};
export const NavigationGroupExample = Template.bind({});
