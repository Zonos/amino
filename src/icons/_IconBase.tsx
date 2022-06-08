import React, { forwardRef, ReactNode } from 'react';

import { type IconProps } from 'src/types/IconProps';
import styled, { css } from 'styled-components';

type Props = { children: ReactNode; viewBox?: string } & IconProps;

const SVGWrapper = styled.div<{ size: number }>`
  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
    `};
`;

export const IconBase = forwardRef<SVGSVGElement, Props>(
  ({ size, color, viewBox, children, className }, ref) => {
    const iconSize = size && size > 24 ? size + 2 : 23;
    return (
      <SVGWrapper size={iconSize} className={className}>
        <svg
          ref={ref}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          color={color && `var(--amino-${color})`}
          viewBox={viewBox || `0 0 24 24`}
          preserveAspectRatio="XMaxYMax meet"
        >
          {children}
        </svg>
      </SVGWrapper>
    );
  }
);
