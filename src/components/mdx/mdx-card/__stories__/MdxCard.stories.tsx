import type { Meta, StoryFn } from '@storybook/react';
import { type Props, MdxCard } from 'src/components/mdx/mdx-card/MdxCard';
import { MdxCardGrid } from 'src/components/mdx/mdx-card-grid/MdxCardGrid';

const MdxCardMeta: Meta = {
  component: MdxCard,
};

export default MdxCardMeta;

const Template: StoryFn<Props> = ({
  children,
  glowingColor,
  noGlowOnHover,
  product,
  xlabel,
  xsubLabel,
}: Props) => (
  <MdxCardGrid>
    <MdxCard
      glowingColor={glowingColor}
      noGlowOnHover={noGlowOnHover}
      product={product}
      xlabel={xlabel}
      xsubLabel={xsubLabel}
    >
      {children}
    </MdxCard>
  </MdxCardGrid>
);

export const BasicMdxCard = Template.bind({});
BasicMdxCard.args = {
  product: 'landed-cost',
  xlabel: 'Landed Cost',
  xsubLabel: 'Land Cost sub-label',
};

export const NoGlow = Template.bind({});
NoGlow.args = {
  noGlowOnHover: true,
  product: 'dashboard',
  xlabel: 'Dashboard',
  xsubLabel: 'Dashboard sub-label',
};
