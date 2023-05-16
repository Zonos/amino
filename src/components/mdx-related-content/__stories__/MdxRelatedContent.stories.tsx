import type { Meta, StoryFn } from '@storybook/react';
import { MdxCardGrid } from 'src/components/mdx-card-grid/MdxCardGrid';

import { MdxRelatedContent as MdxRelatedContentComponent } from '../MdxRelatedContent';

const MdxRelatedContentMeta: Meta = {
  component: MdxRelatedContentComponent,
};

export default MdxRelatedContentMeta;

const Template: StoryFn = () => (
  <MdxCardGrid>
    <MdxRelatedContentComponent
      product="landed-cost"
      xlabel="Total landed cost"
      xsubLabel="Learn what makes up a landed cost."
    >
      <a href="https://zonos.com">Learn more</a>
    </MdxRelatedContentComponent>

    <MdxRelatedContentComponent
      product="classify"
      xlabel="De minimis value"
      xsubLabel="Understand what de minimis is and the values by country."
    >
      <a href="https://zonos.com">Learn more</a>
    </MdxRelatedContentComponent>

    <MdxRelatedContentComponent
      product="checkout"
      xlabel="Localize your checkout"
      xsubLabel="Give your international shoppers their own personalized experience."
    >
      <a href="https://zonos.com">Learn more</a>
    </MdxRelatedContentComponent>
  </MdxCardGrid>
);

export const MdxRelatedContent = Template.bind({});
MdxRelatedContent.args = {
  xlabel: 'Label example',
};
