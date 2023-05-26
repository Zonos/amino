import { type ReactNode, useState } from 'react';

import { LightBox } from 'src/components/lightbox/LightBox';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const ImageWrapper = styled.div<{
  showColor?: boolean;
  addMargin?: boolean;
  shadow?: boolean;
}>`
  position: relative;
  margin: 0 auto;
  display: block;
  margin: ${({ addMargin }) => addMargin && '32px 0'};
  cursor: pointer;
  width: 100%;

  ::after {
    content: '';
    display: ${({ showColor }) => (showColor ? 'block' : 'none')};
    background: linear-gradient(90deg, #fdff87, #ff9b3f, #00e0ff, #83ff5f);
    position: absolute;
    bottom: 20px;
    left: -50px;
    right: -50px;
    margin: auto;
    height: 50%;
    width: 100%;
    z-index: -1;
    filter: blur(50px);
  }

  img {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: ${({ shadow }) => shadow && theme.v3ShadowLarge};
  }
`;

const LightBoxStyled = styled(LightBox)`
  width: 100%;
  max-width: 700px;
  margin: 32px;
`;

type Props = {
  addMargin?: boolean;
  color?: boolean;
  shadow?: boolean;
  children: ReactNode;
};

export const MdxImage = ({ addMargin, color, shadow, children }: Props) => {
  const [showImgDialog, setShowImgDialog] = useState(false);
  return (
    <>
      <ImageWrapper
        addMargin={addMargin}
        showColor={color}
        onClick={() => setShowImgDialog(true)}
        shadow={shadow}
      >
        {children}
      </ImageWrapper>

      <LightBoxStyled
        open={showImgDialog}
        onClose={() => setShowImgDialog(false)}
      >
        {children}
      </LightBoxStyled>
    </>
  );
};

MdxImage.stableName = 'MdxImage';
