import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Card } from '../components/Card';
import {
  DarkModeWrapper,
  DarkModeWrapperProps,
} from '../components/DarkModeWrapper';

const DarkModeWrapperMeta: Meta = {
  title: 'Amino/DarkModeWrapper',
  component: DarkModeWrapper,
};

export default DarkModeWrapperMeta;

const Template: Story<DarkModeWrapperProps> = () => (
  <DarkModeWrapper>
    <Card>This content is always in dark mode</Card>
  </DarkModeWrapper>
);

export const DarkMode = Template.bind({});
