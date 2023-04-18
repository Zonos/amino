import { ReactNode, useState } from 'react';

import { LightBox } from 'src/components/lightbox/LightBox';
import styled from 'styled-components';

const ImageWrapper = styled.div<{ showColor?: boolean; addMargin?: boolean }>`
  position: relative;
  margin: 0 auto;
  display: block;
  margin: ${({ addMargin }) => addMargin && '32px 0'};
  cursor: pointer;

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
  }
`;

const Shadow = styled.div<{ showShadow?: boolean }>`
  filter: ${({ showShadow }) =>
    showShadow &&
    `drop-shadow(0px 4px 6px rgba(10, 10, 11, 0.1))
    drop-shadow(0px 2px 4px rgba(10, 10, 11, 0.06))`};
  position: ${({ showShadow }) => showShadow && 'relative'};
`;

const LightBoxStyled = styled(LightBox)`
  width: 100%;
  max-width: 700px;
  margin: 32px;
`;

export type Props = {
  addMargin?: boolean;
  color?: boolean;
  shadow?: boolean;
  children: ReactNode;
};

export const Image = ({ addMargin, color, shadow, children }: Props) => {
  const [showImgDialog, setShowImgDialog] = useState(false);
  return (
    <>
      <ImageWrapper
        addMargin={addMargin}
        showColor={color}
        onClick={() => setShowImgDialog(true)}
      >
        <Shadow showShadow={shadow}>{children}</Shadow>
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
