import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { LightBox as LightBoxComponent } from 'src/components/lightbox/LightBox';

import styles from './LightBox.stories.module.scss';

const LightBoxMeta: Meta = {
  component: LightBoxComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=224%3A16329',
    },
  },
};

export default LightBoxMeta;

export const LightBox: StoryFn<typeof LightBoxComponent> = ({
  children,
  width,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.centeredDiv}>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <LightBoxComponent
        {...rest}
        onClose={() => setOpen(false)}
        open={open}
        width={width}
      >
        <img alt="logo" src="logo.png" />
      </LightBoxComponent>
    </div>
  );
};
