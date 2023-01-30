import styled from 'styled-components';

export type RippleProps = {
  style: {
    width: number;
    height: number;
    left: number;
    top: number;
  };
};

const PositionedRipple = styled.span<RippleProps['style']>`
  width: ${p => `${p.width}px`};
  height: ${p => `${p.height}px`};
  top: ${p => `${p.top}px`};
  left: ${p => `${p.left}px`};
`;

export const Ripple = ({ style }: RippleProps) => (
  <PositionedRipple {...style} className="ripple" />
);
