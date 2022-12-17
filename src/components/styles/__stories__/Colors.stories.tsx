import { Meta, Story } from '@storybook/react/types-6-0';
import { ColorPalette } from 'src/components/styles/ColorPalette';

const StyleMeta: Meta = {
  component: ColorPalette,
};

export default StyleMeta;

const ColorTemplate: Story = () => <ColorPalette />;

export const Colors = ColorTemplate.bind({});
