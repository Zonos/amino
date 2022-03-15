import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { ColorPalette } from 'components/Styles/ColorPalette';
import { Shadow } from 'components/Styles/Shadow';
import { Typo } from 'components/Styles/Typo';

const StyleMeta: Meta = {
  title: 'Amino/Styles',
};

export default StyleMeta;

const ColorTemplate: Story = () => <ColorPalette />;

export const Color = ColorTemplate.bind({});

const TypoSizeTemplate: Story = () => <Typo />;

export const TypoSize = TypoSizeTemplate.bind({});

const BoxShadowTemplate: Story = () => <Shadow />;

export const BoxShadow = BoxShadowTemplate.bind({});
