import { Meta, Story } from '@storybook/react/types-6-0';
import { MdxSubtitle as MdxSubtitleComponent } from 'src/components/mdx-subtitle/MdxSubtitle';
import { Text } from 'src/components/text/Text';

const MdxSubtitleMeta: Meta = {
  component: MdxSubtitleComponent,
};

export default MdxSubtitleMeta;

const Template: Story = () => (
  <>
    <Text type="page-header">Mdx Subtitle</Text>
    <br />
    <MdxSubtitleComponent>
      This is how to create a subtitle in MDX.
    </MdxSubtitleComponent>
  </>
);

export const MdxSubtitle = Template.bind({});
