import type { Meta, StoryFn } from '@storybook/react';

import { Shadow } from 'src/components/styles/Shadow';

const StyleMeta: Meta = {
  component: Shadow,
};

export default StyleMeta;

const BoxShadowTemplate: StoryFn = () => <Shadow />;

export const Demo = BoxShadowTemplate.bind({});
