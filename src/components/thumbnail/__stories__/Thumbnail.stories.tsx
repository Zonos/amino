import { Meta, Story } from '@storybook/react/types-6-0';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import * as icons from '../../../icons/IconIndex';
import { Thumbnail as ThumbnailComponent, ThumbnailProps } from '../Thumbnail';

const ThumbnailMeta: Meta = {
  component: ThumbnailComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A53302&t=YH8gQICo75N9Y6uZ-0',
    },
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons),
    },
    shape: {
      table: {
        disable: true,
      },
    },
    bordered: {
      control: { type: 'boolean' },
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

const Template: Story<StoryProps> = ({ icon, ...props }) => {
  const Icon = icons[icon];

  return (
    <Wrapper>
      <ThumbnailComponent {...props} icon={<Icon />} shape="round" />
      <ThumbnailComponent {...props} icon={<Icon />} shape="rounded" />
      <ThumbnailComponent {...props} icon={<Icon />} shape="square" />
    </Wrapper>
  );
};

export const Thumbnail = Template.bind({});

Thumbnail.args = {
  icon: 'CubeIcon',
};
