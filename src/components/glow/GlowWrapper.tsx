import { type ReactNode, useEffect, useMemo, useRef } from 'react';

import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import { type StyledProps } from 'src/types';
import type { Color } from 'src/types/Color';
import { type Product, getProductDetails } from 'src/utils/getProductDetails';

type GlowWrapperProps = {
  gradient: string;
  radius: number;
  size: number;
};

const Wrapper = styled.div<StyledProps<GlowWrapperProps>>`
  z-index: 1;
  position: relative;
  overflow: hidden;
  padding: ${p => p.$size}px;
  box-shadow: inset 0px 0px 1px 1px ${theme.gray200};
  border-radius: ${p => p.$radius}px;

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: min(100%, 400px);
    height: min(100%, 400px);
    top: calc(var(--y, 0) * 1px - min(50%, calc(400px / 2)));
    left: calc(var(--x, 0) * 1px - min(50%, calc(400px / 2)));
    background: ${p => p.$gradient};
    filter: blur(20px);

    transition: opacity 0.5s;
    opacity: 0;
  }

  :hover {
    &::after {
      opacity: 1;
    }
  }
`;

type Props = {
  children?: ReactNode;
  className?: string;
  /**
   * @default 'gray600'
   */
  glowColor?: Color;
  /**
   * Use product colors.
   */
  product?: Product;
  /**
   * Border radius
   * @default 6
   */
  radius?: number;
  /**
   * Size of glow border in pixels
   * @default 1
   */
  size?: number;
};

export const GlowWrapper = ({
  children,
  className,
  glowColor = 'gray600',
  product,
  radius = 6,
  size = 1,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const gradient = useMemo(() => {
    if (!product) {
      return `radial-gradient(
        circle,
        ${theme[glowColor]} 0%,
        white 70%
      );`;
    }

    return getProductDetails({ product }).gradient;
  }, [glowColor, product]);

  useEffect(() => {
    const { current } = ref;
    const onMouseMove = (e: MouseEvent) => {
      if (current) {
        const { x, y } = current.getBoundingClientRect();
        current.style.setProperty('--x', (e.clientX - x).toString());
        current.style.setProperty('--y', (e.clientY - y).toString());
      }
    };

    current?.addEventListener('mousemove', onMouseMove);
    return () => {
      current?.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <Wrapper
      ref={ref}
      $gradient={gradient}
      $radius={radius}
      $size={size}
      className={className}
    >
      {children}
    </Wrapper>
  );
};
