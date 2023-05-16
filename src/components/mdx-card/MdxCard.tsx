import { useEffect, useRef } from 'react';

import { theme } from 'src/styles/constants/theme';
import type { ColorPrefix } from 'src/types/Color';
import { type Products, getProductDetails } from 'src/utils/getProductDetails';
import styled, { css } from 'styled-components';

import { MdxAnchor } from '../mdx-anchor/MdxAnchor';

type CardProps = Required<Pick<Props, 'glowingColor' | 'noGlowOnHover'>>;

const StyledAnchor = styled(MdxAnchor)``;

const CardStyled = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  padding: 1px;
  box-shadow: inset 0px 0px 1px 1px ${theme.gray200};
  border-radius: 12px;
  position: relative;
  font-size: 14px;
  gap: 4px;
  line-height: 24px;
  overflow: hidden;
  cursor: pointer;
  z-index: 0;

  ${StyledAnchor}${StyledAnchor} {
    background: ${theme.gray0};
    height: 100%;
    border-radius: 11px;
    padding: 20px 24px;
  }
  ${p =>
    !p.noGlowOnHover &&
    p.glowingColor &&
    css`
      &::after {
        content: '';
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: calc(var(--y, 0) * 1px - 50%);
        left: calc(var(--x, 0) * 1px - 50%);
        background: radial-gradient(
          circle,
          ${theme[`${p.glowingColor}600`]} 0%,
          white 70%
        );
        filter: blur(20px);
        transition: opacity 0.5s;
        z-index: -1;
      }
      :hover {
        &::after {
          opacity: 1;
        }
      }
    `}

  b {
    color: ${theme.primary};
    font-weight: 700;
  }
  p {
    font-weight: 400;
    color: ${theme.gray700};
    margin: 0;
  }

  > div {
    display: flex;
    gap: 8px;
    align-items: center;

    span {
      color: ${theme.gray800};
      font-size: 12px;
      margin-bottom: 0;
    }
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export type Props = {
  product?: Products;
  /**
   * @default false
   */
  noGlowOnHover?: boolean;
  /**
   * @default gray
   */
  glowingColor?: ColorPrefix;
  xlabel: string;
  xsubLabel: string;
  children?: JSX.Element;
};

export const MdxCard = ({
  product,
  glowingColor = 'gray',
  noGlowOnHover = false,
  xlabel,
  xsubLabel,
  children,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const { current } = ref;
    const onMouseMove = (e: MouseEvent) => {
      if (current) {
        const { x, y } = current.getBoundingClientRect();
        current.style.setProperty('--x', (e.clientX - x).toString());
        current.style.setProperty('--y', (e.clientY - y).toString());
      }
    };
    if (!noGlowOnHover) {
      current?.addEventListener('mousemove', onMouseMove);
    }
    return () => {
      if (!noGlowOnHover) {
        current?.removeEventListener('mousemove', onMouseMove);
      }
    };
  }, [noGlowOnHover]);

  const getLink = (): string | null => {
    if (children) {
      const { href } = children.props || children.props.children.props;
      if (href) {
        return href;
      }
      throw new Error(`MdxCard will only accept one link as a child.`);
    }
    return null;
  };

  const link = getLink();

  const productDetails = getProductDetails(product);

  const glowColor = product ? productDetails.color : glowingColor;

  return (
    <CardStyled
      ref={ref}
      glowingColor={glowColor}
      noGlowOnHover={noGlowOnHover}
    >
      <StyledAnchor
        as={link ? 'a' : 'div'}
        href={link || undefined}
        title={xlabel}
        className="link-button"
      >
        <InnerWrapper>
          {product && <div>{productDetails.icon}</div>}
          <div>
            <b>{xlabel}</b>
            <p>{xsubLabel}</p>
          </div>
        </InnerWrapper>
      </StyledAnchor>
    </CardStyled>
  );
};
