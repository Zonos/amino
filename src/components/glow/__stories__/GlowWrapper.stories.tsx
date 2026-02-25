import type { Meta, StoryFn } from '@storybook/react';

import { Card as CardComponent } from 'src/components/card/Card';
import { GlowWrapper } from 'src/components/glow/GlowWrapper';
import { getProductDetails, type Product } from 'src/utils/getProductDetails';

const meta: Meta = {
  component: GlowWrapper,
};

export default meta;

const products: Product[] = [
  'checkout',
  'classify',
  'clear',
  'counter-companion',
  'dashboard',
  'prepay',
  'collect',
  'hello',
  'inclusive-pricing',
  'landed-cost',
  'rate',
  'restrict',
  'screen',
  'tax',
];

export const Card: StoryFn<typeof GlowWrapper> = props => (
  <GlowWrapper {...props}>
    <CardComponent label="Card">Card content</CardComponent>
  </GlowWrapper>
);

export const ProductCards: StoryFn<typeof GlowWrapper> = props => (
  <div className="grid w-full grid-cols-3 gap-x-amino-24 gap-y-[40px] pb-amino-20">
    {products.map(product => {
      const { icon, name } = getProductDetails({ iconSize: 40, product });
      return (
        <GlowWrapper key={product} product={product} {...props}>
          <CardComponent label={name}>{icon}</CardComponent>
        </GlowWrapper>
      );
    })}
  </div>
);

ProductCards.argTypes = {
  glowColor: {
    table: {
      disable: true,
    },
  },
  product: {
    table: {
      disable: true,
    },
  },
};
