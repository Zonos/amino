import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import {
  Collapse as CollapseComponent,
  CollapseProps,
} from 'src/components/collapse/Collapse';
import { NavigationItem } from 'src/components/layout/NavigationGroup';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

const CollapseMeta: Meta = {
  title: 'Amino/Collapse',
  component: CollapseComponent,
  decorators: [withDesign],

  parameters: {
    docs: { source: { type: 'code' } },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    isExpand: {
      table: {
        disable: true,
      },
    },
  },
};

export default CollapseMeta;

const CollapseContainer = styled.div`
  margin: 20px;
`;

const Template: Story<CollapseProps> = ({
  className,
  children,
  collapseSize,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Collapse' : 'Expand'}{' '}
      </Button>
      <CollapseContainer>
        <p>Collapse size: {collapseSize ? `${collapseSize}px` : '0px'}</p>
        <CollapseComponent
          className={className}
          isExpand={open}
          collapseSize={collapseSize}
        >
          {children}
        </CollapseComponent>
      </CollapseContainer>
    </>
  );
};
export const Collapse = Template.bind({});
Collapse.args = {
  children: (
    <>
      <NavigationItem content="Item 1" isActive />
      <NavigationItem content="Item 2" />
      <NavigationItem content="Item 3" />
    </>
  ),
};
