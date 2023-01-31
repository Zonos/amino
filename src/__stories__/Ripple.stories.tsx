import { useRef } from 'react';

import { ComponentStory, Meta } from '@storybook/react';
import { IRippleActions, RippleGroup } from 'src/components/button/RippleGroup';
import { useRipple } from 'src/components/button/useRipple';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const RippleMeta: Meta = {
  component: RippleGroup,
  argTypes: {
    duration: {
      control: { type: 'number' },
    },
    opacity: {
      control: { type: 'number' },
    },
  },
};

export default RippleMeta;

const BackgroundDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-size: 400% 400%;
`;

const StyledDiv = styled.div`
  position: relative;
  cursor: crosshair;
  border: ${theme.border};
  border-radius: ${theme.radius6};
  width: 400px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Ripple: ComponentStory<typeof RippleGroup> = props => {
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
      {rippleEnabled && <RippleGroup ref={rippleRef} {...props} />}
    </StyledDiv>
  );
};
