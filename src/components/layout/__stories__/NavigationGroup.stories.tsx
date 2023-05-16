import { type MouseEvent, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import {
  NavigationGroup as NavigationGroupComponent,
  NavigationItem,
} from 'src/components/layout/NavigationGroup';
import { HomeIcon } from 'src/icons/HomeIcon';
import { IntegrationIcon } from 'src/icons/IntegrationIcon';
import { TotalLandedCostIcon } from 'src/icons/TotalLandedCostIcon';

const NavigationGroupMeta: Meta = {
  component: NavigationGroupComponent,
  subcomponents: { NavigationItem },
  parameters: {
    docs: { source: { type: 'code' } },
  },
  argTypes: {
    children: {
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

const Template: StoryFn = ({ className }) => {
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
      <NavigationGroupComponent
        content={
          <a href="/quoter/create" onClick={mockUrlChange}>
            <NavigationItem
              content="Quoter"
              icon={<TotalLandedCostIcon size={20} />}
            />
          </a>
        }
        className={className}
        collapsed={!pathname.split('/')[1]?.includes('quoter')}
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
      </NavigationGroupComponent>

      <NavigationGroupComponent
        content={
          <a href="/classify/create" onClick={mockUrlChange}>
            <NavigationItem
              content="Classify"
              icon={<IntegrationIcon size={20} />}
            />
          </a>
        }
        collapsed={!pathname.split('/')[1]?.includes('classify')}
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
      </NavigationGroupComponent>
    </>
  );
};
export const NavigationGroup = Template.bind({});
