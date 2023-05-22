import type { Meta, StoryFn } from '@storybook/react';
import { Card } from 'src/components/card/Card';
import {
  type NightModeWrapperProps,
  NightModeWrapper,
} from 'src/components/night-mode-wrapper/NightModeWrapper';

const NightModeWrapperMeta: Meta = {
  component: NightModeWrapper,
};

export default NightModeWrapperMeta;

const Template: StoryFn<NightModeWrapperProps> = () => (
  <NightModeWrapper>
    <Card>This content is always in dark mode</Card>
  </NightModeWrapper>
);

export const DarkMode = Template.bind({});
