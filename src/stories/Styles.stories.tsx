import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Shadow } from 'components/Styles/Shadow';
import { Typo } from 'components/Styles/Typo';

const StyleMeta: Meta = {
  title: 'Amino',
};

export default StyleMeta;

const TypoSizeTemplate: Story = () => <Typo />;

export const TypoSize = TypoSizeTemplate.bind({});

const BoxShadowTemplate: Story = () => <Shadow />;

export const BoxShadow = BoxShadowTemplate.bind({});
