import { Meta, Story } from '@storybook/react/types-6-0';
import { Shadow } from 'src/components/styles/Shadow';

const StyleMeta: Meta = {
  component: Shadow,
};

export default StyleMeta;

const BoxShadowTemplate: Story = () => <Shadow />;

export const Demo = BoxShadowTemplate.bind({});
