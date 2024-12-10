import { lazy, Suspense } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Flex } from 'src/components/flex/Flex';
import {
  Thumbnail as ThumbnailComponent,
  type ThumbnailProps,
} from 'src/components/thumbnail/Thumbnail';
import { commonIconsList } from 'src/icons/__stories__/IconsList';

const ThumbnailMeta: Meta = {
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: commonIconsList,
    },
    shape: {
      // We are showing all shapes already
      table: {
        disable: true,
      },
    },
  },
  args: {
    icon: 'CubeIcon',
  },
  component: ThumbnailComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A53302&t=YH8gQICo75N9Y6uZ-0',
    },
  },
};

export default ThumbnailMeta;

type StoryProps = Omit<ThumbnailProps, 'shape' | 'icon'> & {
  icon: keyof typeof commonIconsList;
};

const Template: StoryFn<StoryProps> = ({ icon, ...props }) => {
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
    <Flex alignItems="center" flexDirection="column" gap={24}>
      <ThumbnailComponent {...props} icon={renderIcon()} shape="round" />
      <ThumbnailComponent {...props} icon={renderIcon()} shape="rounded" />
      <ThumbnailComponent {...props} icon={renderIcon()} shape="square" />
      <ThumbnailComponent {...props} icon={renderIcon()} intent="outline" />
      <ThumbnailComponent
        {...props}
        icon={renderIcon()}
        intent="outline"
        shape="rounded"
      />
      <ThumbnailComponent
        {...props}
        icon={renderIcon()}
        intent="outline"
        shape="square"
      />
    </Flex>
  );
};

export const Thumbnail = Template.bind({});
