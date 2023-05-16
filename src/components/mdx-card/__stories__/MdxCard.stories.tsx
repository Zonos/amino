import type { Meta, StoryFn } from '@storybook/react';
import { type Props, MdxCard } from 'src/components/mdx-card/MdxCard';
import { MdxCardGrid } from 'src/components/mdx-card-grid/MdxCardGrid';

const MdxCardMeta: Meta = {
  component: MdxCard,
};

export default MdxCardMeta;

const Template: StoryFn<Props> = ({
  xlabel,
  xsubLabel,
  glowingColor,
  noGlowOnHover,
  product,
  children,
}: Props) => (
  <MdxCardGrid>
    <MdxCard
      xlabel={xlabel}
      xsubLabel={xsubLabel}
      glowingColor={glowingColor}
      noGlowOnHover={noGlowOnHover}
      product={product}
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
  product: 'dashboard',
  xlabel: 'Dashboard',
  xsubLabel: 'Dashboard sub-label',
  noGlowOnHover: true,
};
