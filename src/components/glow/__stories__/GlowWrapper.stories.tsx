import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Card as CardComponent } from 'src/components/card/Card';
import { GlowWrapper } from 'src/components/glow/GlowWrapper';
import { theme } from 'src/styles/constants/theme';
import { type Product, getProductDetails } from 'src/utils/getProductDetails';

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
  'ddp',
  'ddu',
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

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: ${theme.space40};
  grid-column-gap: ${theme.space24};
  padding-bottom: 20px;
`;

export const ProductCards: StoryFn<typeof GlowWrapper> = props => (
  <Wrapper>
    {products.map(product => {
      const { icon, name } = getProductDetails({ iconSize: 40, product });
      return (
        <GlowWrapper key={product} product={product} {...props}>
          <CardComponent label={name}>{icon}</CardComponent>
        </GlowWrapper>
      );
    })}
  </Wrapper>
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
