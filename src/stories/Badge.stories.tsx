import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { CubeIcon } from '~/src/icons';

import { Badge, type BadgeProps } from '../components/Badge';

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
      defaultValue: false,
      type: 'boolean',
    },
    iconRight: {
      type: 'boolean',
    },
    inverted: {
      type: 'boolean',
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
  inverted,
  rounded,
  size,
}: BadgeProps) => (
  <StyledWrapper>
    <div>
      <h3>Normal</h3>
      <Badge
        color={color}
        iconRight={iconRight}
        inverted={inverted}
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
        inverted={inverted}
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
        inverted={inverted}
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
        inverted
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
        inverted
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
        inverted
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
BasicBadge.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const BlueBadge = Template.bind({});
BlueBadge.args = {
  color: 'blue',
  children: <span>Option</span>,
};
BlueBadge.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const GreenBadge = Template.bind({});
GreenBadge.args = {
  color: 'green',
  children: <span>Option</span>,
};
GreenBadge.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const RedBadge = Template.bind({});
RedBadge.args = {
  color: 'red',
  children: <span>Option</span>,
};
RedBadge.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const OrangeBadge = Template.bind({});
OrangeBadge.args = {
  color: 'orange',
  children: <span>Option</span>,
};
OrangeBadge.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const PurpleBadge = Template.bind({});
PurpleBadge.args = {
  color: 'purple',
  children: <span>Option</span>,
};
PurpleBadge.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const YellowBadge = Template.bind({});
YellowBadge.args = {
  color: 'yellow',
  children: <span>Option</span>,
};
YellowBadge.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const CyanBadge = Template.bind({});
CyanBadge.args = {
  color: 'cyan',
  children: <span>Option</span>,
};
CyanBadge.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};
