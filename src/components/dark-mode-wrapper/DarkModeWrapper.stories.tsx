import { Meta, Story } from '@storybook/react/types-6-0';
import { Card } from 'src/components/card/Card';
import {
  DarkModeWrapper,
  DarkModeWrapperProps,
} from 'src/components/dark-mode-wrapper/DarkModeWrapper';

const DarkModeWrapperMeta: Meta = {
  component: DarkModeWrapper,
};

export default DarkModeWrapperMeta;

const Template: Story<DarkModeWrapperProps> = () => (
  <DarkModeWrapper>
    <Card>This content is always in dark mode</Card>
  </DarkModeWrapper>
);

export const DarkMode = Template.bind({});
