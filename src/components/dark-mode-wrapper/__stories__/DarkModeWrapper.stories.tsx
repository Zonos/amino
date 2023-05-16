import type { Meta, StoryFn } from '@storybook/react';
import { Card } from 'src/components/card/Card';
import {
  type DarkModeWrapperProps,
  DarkModeWrapper,
} from 'src/components/dark-mode-wrapper/DarkModeWrapper';

const DarkModeWrapperMeta: Meta = {
  component: DarkModeWrapper,
};

export default DarkModeWrapperMeta;

const Template: StoryFn<DarkModeWrapperProps> = () => (
  <DarkModeWrapper>
    <Card>This content is always in dark mode</Card>
  </DarkModeWrapper>
);

export const DarkMode = Template.bind({});
