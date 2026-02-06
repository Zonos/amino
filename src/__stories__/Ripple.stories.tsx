import { useRef, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import {
  type RippleActions,
  RippleGroup,
} from 'src/components/button/RippleGroup';
import { useRipple } from 'src/components/button/useRipple';
import { Checkbox } from 'src/components/checkbox/Checkbox';
import { VStack } from 'src/components/stack/VStack';

const RippleMeta: Meta = {
  component: RippleGroup,
};

export default RippleMeta;

export const Ripple: StoryFn<typeof RippleGroup> = props => {
  const rippleRef = useRef<RippleActions>(null);
  const [controlRippleEnabled, setControlRippleEnabled] = useState(true);

  const { getRippleHandlers, rippleEnabled } = useRipple({
    disabled: false,
    rippleEnabled: controlRippleEnabled,
    rippleRef,
  });

  return (
    <VStack>
      <div
        className="relative cursor-crosshair border border-amino rounded-md w-[400px] h-[400px] flex flex-col justify-center items-center"
        {...getRippleHandlers({})}
      >
        <div className="absolute w-full h-full opacity-30 bg-[length:400%_400%]" />
        <div>Click me!</div>
        {rippleEnabled && <RippleGroup ref={rippleRef} {...props} />}
      </div>
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
