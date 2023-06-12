import { useRef, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Button } from 'src/components/button/Button';
import {
  type IRippleActions,
  RippleGroup,
} from 'src/components/button/RippleGroup';
import { useRipple } from 'src/components/button/useRipple';
import { Checkbox } from 'src/components/checkbox/Checkbox';
import { VStack } from 'src/components/stack/VStack';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const RippleMeta: Meta = {
  argTypes: {
    duration: {
      control: { type: 'number' },
    },
    opacity: {
      control: { type: 'number' },
    },
  },
  component: RippleGroup,
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

export const Ripple: StoryFn<typeof RippleGroup> = props => {
  const rippleRef = useRef<IRippleActions>(null);
  const [controlRippleEnabled, setControlRippleEnabled] = useState(true);

  const { getRippleHandlers, rippleEnabled } = useRipple({
    disabled: false,
    rippleEnabled: controlRippleEnabled,
    rippleRef,
  });

  return (
    <VStack>
      <StyledDiv {...getRippleHandlers({})}>
        <BackgroundDiv />
        <div>Click me!</div>
        {rippleEnabled && <RippleGroup ref={rippleRef} {...props} />}
      </StyledDiv>
      <Checkbox
        checked={controlRippleEnabled}
        label="Ripple enabled"
        onChange={checked => setControlRippleEnabled(checked)}
      />
      {controlRippleEnabled && (
        <Button onClick={() => setControlRippleEnabled(false)}>
          This button should cause no memory leaks
        </Button>
      )}
    </VStack>
  );
};
