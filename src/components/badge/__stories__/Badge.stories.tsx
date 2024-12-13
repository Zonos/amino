import { lazy, Suspense } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { omitControls } from 'story-utils/omitControls';

import { Badge, type BadgeProps } from 'src/components/badge/Badge';
import { Flex } from 'src/components/flex/Flex';
import { commonIconsList } from 'src/icons/__stories__/IconsList';

const omittedProps: (keyof BadgeProps)[] = ['iconRight', 'bold'];

const BadgeMeta: Meta = {
  argTypes: {
    ...omitControls<BadgeProps>(omittedProps),
    icon: {
      control: { type: 'select' },
      options: commonIconsList,
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
  icon: keyof typeof commonIconsList;
};

const Template: StoryFn<StoryProps> = ({ children, icon, ...props }) => {
  const renderIcon = () => {
    const IconComponent = lazy(() =>
      import(`src/icons/${String(icon)}.tsx`).then(module => ({
        default: module[icon],
      })),
    );

    return (
      <Suspense fallback={<div>O</div>}>
        <IconComponent />
      </Suspense>
    );
  };

  return (
    <Flex flexDirection="column" gap={20}>
      <div>
        <h3>Normal</h3>
        <Badge {...props}>{children}</Badge>
      </div>
      <div>
        <Badge icon={renderIcon()} {...props}>
          {children}
        </Badge>
      </div>
      <div>
        <Badge icon={renderIcon()} iconRight {...props}>
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
        <Badge bold icon={renderIcon()} {...props}>
          {children}
        </Badge>
      </div>
      <div>
        <Badge bold icon={renderIcon()} iconRight {...props}>
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
