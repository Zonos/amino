import type { Meta, StoryFn } from '@storybook/react';
import { omitControls } from 'story-utils/omitControls';

import { type BadgeProps, Badge } from 'src/components/badge/Badge';
import { Flex } from 'src/components/flex/Flex';
import * as icons from 'src/icons/_IconIndex';

const omittedProps: (keyof BadgeProps)[] = ['iconRight', 'bold'];

const BadgeMeta: Meta = {
  argTypes: {
    ...omitControls<BadgeProps>(omittedProps),
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons),
    },
  },
  args: {
    icon: 'CubeIcon',
  },
  component: Badge,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=357-7819&t=JAnOnPQZhj04fF3s-0',
    },
  },
};

export default BadgeMeta;

type StoryProps = Omit<BadgeProps, 'iconRight' | 'icon' | 'bold'> & {
  icon: keyof typeof icons;
};

const Template: StoryFn<StoryProps> = ({ children, icon, ...props }) => {
  const Icon = icons[icon];

  return (
    <Flex flexDirection="column" gap={20}>
      <div>
        <h3>Normal</h3>
        <Badge {...props}>{children}</Badge>
      </div>
      <div>
        <Badge icon={<Icon />} {...props}>
          {children}
        </Badge>
      </div>
      <div>
        <Badge icon={<Icon />} iconRight {...props}>
          {children}
        </Badge>
      </div>
      <div>
        <h3>Bold / Inverted</h3>
        <Badge bold {...props}>
          {children}
        </Badge>
      </div>
      <div>
        <Badge bold icon={<Icon />} {...props}>
          {children}
        </Badge>
      </div>
      <div>
        <Badge bold icon={<Icon />} iconRight {...props}>
          {children}
        </Badge>
      </div>
    </Flex>
  );
};

export const BasicBadge = Template.bind({});
BasicBadge.args = {
  children: <span>Option</span>,
};
