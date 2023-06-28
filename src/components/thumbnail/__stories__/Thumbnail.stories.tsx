import type { Meta, StoryFn } from '@storybook/react';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import * as icons from '../../../icons/IconIndex';
import {
  type ThumbnailProps,
  Thumbnail as ThumbnailComponent,
} from '../Thumbnail';

const ThumbnailMeta: Meta = {
  argTypes: {
    icon: {
      control: { type: 'select' },
      // TEMP:
      options: Object.keys(icons),
    },
    shape: {
      // We are showing all shapes already
      table: {
        disable: true,
      },
    },
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.space24};
`;

const Template: StoryFn<StoryProps> = ({ icon, ...props }) => {
  const Icon = icons[icon];

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export const Thumbnail = Template.bind({});

Thumbnail.args = {
  icon: 'CubeIcon',
};
