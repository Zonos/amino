import type { Meta, StoryFn } from '@storybook/react';

import { HStack } from 'src/components/stack/HStack';
import {
  type ThumbnailProps,
  Thumbnail as ThumbnailComponent,
} from 'src/components/thumbnail/Thumbnail';
import * as icons from 'src/icons/_IconIndex';

import styles from './Thumbnail.stories.module.scss';

const ThumbnailMeta: Meta = {
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons),
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
  icon: keyof typeof icons;
};

const Template: StoryFn<StoryProps> = ({ icon, ...props }) => {
  const Icon = icons[icon];

  return (
    <HStack>
      <div className={styles.wrapper}>
        <ThumbnailComponent {...props} icon={<Icon />} shape="round" />
        <ThumbnailComponent {...props} icon={<Icon />} shape="rounded" />
        <ThumbnailComponent {...props} icon={<Icon />} shape="square" />
        <ThumbnailComponent {...props} icon={<Icon />} intent="outline" />
        <ThumbnailComponent
          {...props}
          icon={<Icon />}
          intent="outline"
          shape="rounded"
        />
        <ThumbnailComponent
          {...props}
          icon={<Icon />}
          intent="outline"
          shape="square"
        />
      </div>
    </HStack>
  );
};

export const Thumbnail = Template.bind({});
