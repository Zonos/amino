import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Typography } from 'src/components/Styles/Typography';

const StyleMeta: Meta = {
  title: 'Amino/Typography',
};

export default StyleMeta;

const TypographyTemplate: Story = () => <Typography />;

export const Size = TypographyTemplate.bind({});
