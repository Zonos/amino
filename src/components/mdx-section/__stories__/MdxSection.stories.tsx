import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { MdxSection as MdxSectionComponent } from '../MdxSection';

const MdxSectionMeta: Meta = {
  component: MdxSectionComponent,
};

export default MdxSectionMeta;

const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const MdxSection: StoryFn<typeof MdxSectionComponent> = () => (
  <MdxSectionComponent>
    <H1>Heading 1</H1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quae velit
      tenetur aliquid aspernatur totam corporis, sapiente, nobis quas atque
      cumque et asperiores corrupti neque architecto nostrum ullam! Voluptas,
      vel.
    </p>
  </MdxSectionComponent>
);
