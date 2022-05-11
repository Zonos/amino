import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { ColorPalette } from 'src/components/Styles/ColorPalette';

const StyleMeta: Meta = {
  title: 'Amino/ColorPalette',
};

export default StyleMeta;

const ColorTemplate: Story = () => <ColorPalette />;

export const Colors = ColorTemplate.bind({});
