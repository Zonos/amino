import type { Meta, StoryFn } from '@storybook/react';
import type { BadgeProps } from 'src/components/badge/Badge';
import { CubeIcon } from 'src/icons/CubeIcon';
import styled from 'styled-components';

import { MdxBadge } from '../MdxBadge';

const MdxBadgeMeta: Meta = {
  argTypes: {
    bold: {
      type: 'boolean',
    },
    className: {
      type: 'string',
    },
    color: {
      options: ['default', 'blue', 'green', 'red', 'orange', 'purple', 'cyan'],
    },
    iconRight: {
      type: 'boolean',
    },
    rounded: {
      type: 'boolean',
    },
  },
  component: MdxBadge,
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
  bold,
  children,
  color,
  iconRight,
  rounded,
  size,
}: BadgeProps) => (
  <StyledWrapper>
    <div>
      <h3>Normal</h3>
      <MdxBadge
        bold={bold}
        color={color}
        iconRight={iconRight}
        rounded={rounded}
        size={size}
      >
        {children}
      </MdxBadge>
    </div>
    <div>
      <MdxBadge
        bold={bold}
        color={color}
        icon={<CubeIcon size={20} />}
        iconRight={iconRight}
        rounded={rounded}
        size={size}
      >
        {children}
      </MdxBadge>
    </div>
    <div>
      <MdxBadge
        bold={bold}
        color={color}
        icon={<CubeIcon size={20} />}
        iconRight
        rounded={rounded}
        size={size}
      >
        {children}
      </MdxBadge>
    </div>
    <div>
      <h3>Bold / Inverted</h3>
      <MdxBadge
        bold
        color={color}
        iconRight={iconRight}
        rounded={rounded}
        size={size}
      >
        {children}
      </MdxBadge>
    </div>
    <div>
      <MdxBadge
        bold
        color={color}
        icon={<CubeIcon size={20} />}
        rounded={rounded}
        size={size}
      >
        {children}
      </MdxBadge>
    </div>
    <div>
      <MdxBadge
        bold
        color={color}
        icon={<CubeIcon size={20} />}
        iconRight
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
  children: <span>Option</span>,
  color: 'blue',
};

export const GreenBadge = Template.bind({});
GreenBadge.args = {
  children: <span>Option</span>,
  color: 'green',
};

export const RedBadge = Template.bind({});
RedBadge.args = {
  children: <span>Option</span>,
  color: 'red',
};

export const OrangeBadge = Template.bind({});
OrangeBadge.args = {
  children: <span>Option</span>,
  color: 'orange',
};

export const PurpleBadge = Template.bind({});
PurpleBadge.args = {
  children: <span>Option</span>,
  color: 'purple',
};

export const CyanBadge = Template.bind({});
CyanBadge.args = {
  children: <span>Option</span>,
  color: 'cyan',
};
