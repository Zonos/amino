import type { ComponentStory, Meta } from '@storybook/react';
import { MdxImage as MdxImageComponent } from 'src/components/mdx-image/MdxImage';
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

export const MdxImage: ComponentStory<typeof MdxImageComponent> = () => (
  <MdxImageComponent shadow>
    <CenteredDiv>
      <img src="logo.png" alt="logo" />
    </CenteredDiv>
  </MdxImageComponent>
);
