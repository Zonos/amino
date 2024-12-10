import type { Meta, StoryFn } from '@storybook/react';

import {
  ProgressBar,
  type ProgressBarProps,
} from 'src/components/progress-bar/ProgressBar';
import { VStack } from 'src/components/stack/VStack';

const ProgressBarMeta: Meta = {
  component: ProgressBar,
};

export default ProgressBarMeta;

export const Template: StoryFn<ProgressBarProps> = ({
  colorStyle = 'blue600',
  progress = 0,
}: ProgressBarProps) => (
  <VStack spacing={8}>
    <ProgressBar colorStyle={colorStyle} progress={20} />
    <ProgressBar colorStyle={colorStyle} progress={50} />
    <ProgressBar colorStyle={colorStyle} progress={80} />
    <ProgressBar colorStyle={colorStyle} progress={progress} />
  </VStack>
);

export const RedToGreen = Template.bind({});
RedToGreen.args = {
  colorStyle: 'redToGreen',
};

export const GreenToRed = Template.bind({});
GreenToRed.args = {
  colorStyle: 'greenToRed',
};

export const ContantColor = Template.bind({});
ContantColor.args = {
  colorStyle: 'blue600',
};
