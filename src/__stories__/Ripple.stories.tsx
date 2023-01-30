import { useRef } from 'react';

import { Meta } from '@storybook/react';
import { IRippleActions, RippleGroup } from 'src/components/button/RippleGroup';
import { useRipple } from 'src/components/button/useRipple';
import { theme } from 'src/styles/constants/theme';
import styled, { keyframes } from 'styled-components';

const RippleMeta: Meta = {};

export default RippleMeta;

const Rainbow = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const BackgroundDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: linear-gradient(-45deg, #ee7752, #23d55b, #e73c7e, #f115c1);
  background-size: 400% 400%;

  animation: 5s ${Rainbow} linear infinite;
`;

const StyledDiv = styled.div`
  position: relative;
  cursor: crosshair;
  border: ${theme.border};
  border-radius: ${theme.radius6};
  width: 50%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Ripple = () => {
  const rippleRef = useRef<IRippleActions>(null);

  const { rippleEnabled, getRippleHandlers } = useRipple({
    rippleRef,
    rippleEnabled: true,
    disabled: false,
  });

  return (
    <StyledDiv {...getRippleHandlers({})}>
      <BackgroundDiv />
      <div>Click me!</div>
      {rippleEnabled && <RippleGroup ref={rippleRef} />}
    </StyledDiv>
  );
};
