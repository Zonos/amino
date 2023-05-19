import type { Meta, StoryFn } from '@storybook/react';
import { MdxSubtitle as MdxSubtitleComponent } from 'src/components/mdx/mdx-subtitle/MdxSubtitle';
import { Text } from 'src/components/text/Text';

const MdxSubtitleMeta: Meta = {
  component: MdxSubtitleComponent,
};

export default MdxSubtitleMeta;

const Template: StoryFn = () => (
  <>
    <Text type="page-header">Mdx Subtitle</Text>
    <br />
    <MdxSubtitleComponent>
      This is how to create a subtitle in MDX.
    </MdxSubtitleComponent>
  </>
);

export const MdxSubtitle = Template.bind({});