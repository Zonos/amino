/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import {
  Collapse,
  type CollapseProps,
} from '~/src/components/Collapse/Collapse';
import { NavigationItem } from '~/src/components/Layout/NavigationGroup';

const CollapseMeta: Meta = {
  title: 'Amino/Collapse',
  component: Collapse,
  decorators: [withDesign],

  parameters: {
    docs: { source: { type: 'code' } },
  },
  argTypes: {
    children: {
      description: 'ReactNode item that need to be collapsed or expanded',
      type: 'symbol',
    },
    isExpand: {
      defaultValue: false,
      type: 'boolean',
    },
    collapseSize: {
      type: 'number',
      defaultValue: 0,
    },
    className: {
      type: 'string',
    },
  },
};

export default CollapseMeta;

const Template: Story<CollapseProps> = ({
  className,
  children,
  isExpand,
  collapseSize,
}) => {
  return (
    <>
      <p>Collapse status: {isExpand ? 'Expanded' : 'Collapsed'}</p>
      <p>Collapse size: {collapseSize ? `${collapseSize}px` : '0px'}</p>
      <Collapse
        className={className}
        isExpand={isExpand}
        collapseSize={collapseSize}
      >
        {children}
      </Collapse>
    </>
  );
};
export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <NavigationItem content="Item 1" isActive />
      <NavigationItem content="Item 2" />
      <NavigationItem content="Item 3" />
    </>
  ),
};
