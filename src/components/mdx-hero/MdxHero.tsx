import { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import { devices } from 'src/styles/devices';
import styled from 'styled-components';

import { MdxSection } from '../mdx-section/MdxSection';

const Wrapper = styled(MdxSection)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  align-items: center;

  @media ${devices.desktop} {
    flex-direction: column;
  }

  > div {
    height: fit-content;
    width: 100%;
  }

  h1,
  h2 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
  }
`;

const HeroImage = styled.div`
  img {
    box-shadow: ${theme.v3ShadowLarge} !important;
    border-radius: 10px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  && > a:hover {
    border-bottom: none;
  }
`;

type Props = {
  children: ReactNode;
};

export const MdxHero = ({ children }: Props) => {
  if (!Array.isArray(children)) {
    // eslint-disable-next-line no-console
    console.error(
      'The MdxHero component requires at least 2 children elements. See https://amino.zonos.com:6007/?path=/story/amino-mdxhero--mdx-hero for details.'
    );
    return null;
  }

  const buttons = children.filter(
    (node: JSX.Element) => node.type.stableName === 'MdxButton'
  );

  const heroImg =
    children.find((node: JSX.Element) => node.type.stableName === 'MdxImage') ||
    '';

  const content =
    buttons &&
    children.filter(node => !buttons.includes(node) && heroImg !== node);

  return (
    <Wrapper>
      <>
        <div>
          {content}
          <ButtonWrap>{buttons}</ButtonWrap>
        </div>

        {heroImg && <HeroImage>{heroImg}</HeroImage>}
      </>
    </Wrapper>
  );
};
