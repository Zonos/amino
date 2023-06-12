import type { Meta, StoryFn } from '@storybook/react';
import { MdxImage as MdxImageComponent } from 'src/components/mdx/mdx-image/MdxImage';
import styled from 'styled-components';

const MdxImageMeta: Meta = {
  component: MdxImageComponent,
};

export default MdxImageMeta;

const CenteredDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

export const MdxImage: StoryFn<typeof MdxImageComponent> = () => (
  <MdxImageComponent shadow>
    <CenteredDiv>
      <img alt="logo" src="logo.png" />
    </CenteredDiv>
  </MdxImageComponent>
);
