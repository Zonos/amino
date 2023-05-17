import type { Meta, StoryFn } from '@storybook/react';
import { MdxCard } from 'src/components/mdx-card/MdxCard';

import { type Props, MdxCardGrid } from '../MdxCardGrid';

const MdxCardGridMeta: Meta = {
  component: MdxCardGrid,
};

export default MdxCardGridMeta;

const Template: StoryFn<Props> = ({ twoColumn, children }: Props) => (
  <MdxCardGrid twoColumn={twoColumn}>{children}</MdxCardGrid>
);

const allCards = (
  <>
    <MdxCard
      product="checkout"
      xlabel="Checkout"
      xsubLabel="Checkout sub-label"
    >
      <a href="https://zonos.com">[](https://zonos.com)</a>
    </MdxCard>

    <MdxCard
      product="classify"
      xlabel="Classify"
      xsubLabel="Classify sub-label"
    >
      <a href="https://zonos.com">[](https://zonos.com)</a>
    </MdxCard>

    <MdxCard product="clear" xlabel="Clear" xsubLabel="Clear sub-label">
      <a href="https://zonos.com">[](https://zonos.com)</a>
    </MdxCard>

    <MdxCard
      product="dashboard"
      xlabel="Dashboard"
      xsubLabel="Dashboard sub-label"
    >
      <a href="https://zonos.com">[](https://zonos.com)</a>
    </MdxCard>

    <MdxCard product="hello" xlabel="Hello" xsubLabel="Hello sub-label">
      <a href="https://zonos.com">[](https://zonos.com)</a>
    </MdxCard>

    <MdxCard
      product="landed-cost"
      xlabel="Landed Cost"
      xsubLabel="Landed Cost sub-label"
    >
      <a href="https://zonos.com">[](https://zonos.com)</a>
    </MdxCard>

    <MdxCard product="rate" xlabel="Rate" xsubLabel="Rate sub-label">
      <a href="https://zonos.com">[](https://zonos.com)</a>
    </MdxCard>

    <MdxCard
      product="restrict"
      xlabel="Restrict"
      xsubLabel="Restrict sub-label"
    >
      <a href="https://zonos.com">[](https://zonos.com)</a>
    </MdxCard>

    <MdxCard product="screen" xlabel="Screen" xsubLabel="Screen sub-label">
      <a href="https://zonos.com">[](https://zonos.com)</a>
    </MdxCard>
  </>
);

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  children: allCards,
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  twoColumn: true,
  children: allCards,
};
