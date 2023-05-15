import { Meta, Story } from '@storybook/react/types-6-0';
import { Card } from 'src/components/card/Card';
import {
  NightModeWrapper,
  NightModeWrapperProps,
} from 'src/components/night-mode-wrapper/NightModeWrapper';

const NightModeWrapperMeta: Meta = {
  component: NightModeWrapper,
};

export default NightModeWrapperMeta;

const Template: Story<NightModeWrapperProps> = () => (
  <NightModeWrapper>
    <Card>This content is always in dark mode</Card>
  </NightModeWrapper>
);

export const DarkMode = Template.bind({});
