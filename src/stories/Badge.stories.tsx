import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Badge, BadgeProps } from 'src/components/badge/Badge';
import { CubeIcon } from 'src/icons/CubeIcon';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

const BadgeMeta: Meta = {
  title: 'Amino/Badge',
  component: Badge,
  decorators: [withDesign],
  argTypes: {
    color: {
      options: [
        'default',
        'blue',
        'green',
        'red',
        'orange',
        'purple',
        'yellow',
        'cyan',
      ],
    },
    className: {
      type: 'string',
    },
    rounded: {
      type: 'boolean',
    },
    iconRight: {
      type: 'boolean',
    },
    bold: {
      type: 'boolean',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
    },
  },
};

export default BadgeMeta;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Template: Story<BadgeProps> = ({
  color,
  children,
  iconRight,
  bold,
  rounded,
  size,
}: BadgeProps) => (
  <StyledWrapper>
    <div>
      <h3>Normal</h3>
      <Badge
        color={color}
        iconRight={iconRight}
        bold={bold}
        rounded={rounded}
        size={size}
      >
        {children}
      </Badge>
    </div>
    <div>
      <Badge
        color={color}
        icon={<CubeIcon size={20} />}
        iconRight={iconRight}
        bold={bold}
        rounded={rounded}
        size={size}
      >
        {children}
      </Badge>
    </div>
    <div>
      <Badge
        color={color}
        icon={<CubeIcon size={20} />}
        iconRight
        bold={bold}
        rounded={rounded}
        size={size}
      >
        {children}
      </Badge>
    </div>
    <div>
      <h3>Bold / Inverted</h3>
      <Badge
        color={color}
        iconRight={iconRight}
        bold
        rounded={rounded}
        size={size}
      >
        {children}
      </Badge>
    </div>
    <div>
      <Badge
        color={color}
        icon={<CubeIcon size={20} />}
        bold
        rounded={rounded}
        size={size}
      >
        {children}
      </Badge>
    </div>
    <div>
      <Badge
        color={color}
        icon={<CubeIcon size={20} />}
        iconRight
        bold
        rounded={rounded}
        size={size}
      >
        {children}
      </Badge>
    </div>
  </StyledWrapper>
);

export const BasicBadge = Template.bind({});
BasicBadge.args = {
  children: <span>Option</span>,
};

export const BlueBadge = Template.bind({});
BlueBadge.args = {
  color: 'blue',
  children: <span>Option</span>,
};

export const GreenBadge = Template.bind({});
GreenBadge.args = {
  color: 'green',
  children: <span>Option</span>,
};

export const RedBadge = Template.bind({});
RedBadge.args = {
  color: 'red',
  children: <span>Option</span>,
};

export const OrangeBadge = Template.bind({});
OrangeBadge.args = {
  color: 'orange',
  children: <span>Option</span>,
};

export const PurpleBadge = Template.bind({});
PurpleBadge.args = {
  color: 'purple',
  children: <span>Option</span>,
};

export const YellowBadge = Template.bind({});
YellowBadge.args = {
  color: 'yellow',
  children: <span>Option</span>,
};

export const CyanBadge = Template.bind({});
CyanBadge.args = {
  color: 'cyan',
  children: <span>Option</span>,
};
