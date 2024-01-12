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

import styles from './Ripple.stories.module.scss';

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
      <div className={styles.styledDiv} {...getRippleHandlers({})}>
        <div className={styles.backgroundDiv} />
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
