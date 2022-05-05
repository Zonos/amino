import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Shadow } from '~/src/components/Styles/Shadow';

const StyleMeta: Meta = {
  title: 'Amino/BoxShadow',
};

export default StyleMeta;

const BoxShadowTemplate: Story = () => <Shadow />;

export const Demo = BoxShadowTemplate.bind({});
