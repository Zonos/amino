import type { Meta, StoryFn } from '@storybook/react';
import type { BadgeProps } from 'src/components/badge/Badge';
import { CubeIcon } from 'src/icons/CubeIcon';
import styled from 'styled-components';

import { MdxBadge } from '../MdxBadge';

const MdxBadgeMeta: Meta = {
  component: MdxBadge,
  argTypes: {
    color: {
      options: ['default', 'blue', 'green', 'red', 'orange', 'purple', 'cyan'],
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
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=357-7819&t=JAnOnPQZhj04fF3s-0',
    },
  },
};

export default MdxBadgeMeta;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Template: StoryFn<BadgeProps> = ({
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
      <MdxBadge
        color={color}
        iconRight={iconRight}
        bold={bold}
        rounded={rounded}
        size={size}
      >
        {children}
      </MdxBadge>
    </div>
    <div>
      <MdxBadge
        color={color}
        icon={<CubeIcon size={20} />}
        iconRight={iconRight}
        bold={bold}
        rounded={rounded}
        size={size}
      >
        {children}
      </MdxBadge>
    </div>
    <div>
      <MdxBadge
        color={color}
        icon={<CubeIcon size={20} />}
        iconRight
        bold={bold}
        rounded={rounded}
        size={size}
      >
        {children}
      </MdxBadge>
    </div>
    <div>
      <h3>Bold / Inverted</h3>
      <MdxBadge
        color={color}
        iconRight={iconRight}
        bold
        rounded={rounded}
        size={size}
      >
        {children}
      </MdxBadge>
    </div>
    <div>
      <MdxBadge
        color={color}
        icon={<CubeIcon size={20} />}
        bold
        rounded={rounded}
        size={size}
      >
        {children}
      </MdxBadge>
    </div>
    <div>
      <MdxBadge
        color={color}
        icon={<CubeIcon size={20} />}
        iconRight
        bold
        rounded={rounded}
        size={size}
      >
        {children}
      </MdxBadge>
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

export const CyanBadge = Template.bind({});
CyanBadge.args = {
  color: 'cyan',
  children: <span>Option</span>,
};
