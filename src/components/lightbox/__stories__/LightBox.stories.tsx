import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Button } from 'src/components/button/Button';
import { LightBox as LightBoxComponent } from 'src/components/lightbox/LightBox';

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

const CenteredDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LightBox: StoryFn<typeof LightBoxComponent> = ({
  children,
  width,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  return (
    <CenteredDiv>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <LightBoxComponent
        {...rest}
        onClose={() => setOpen(false)}
        open={open}
        width={width}
      >
        <img alt="logo" src="logo.png" />
      </LightBoxComponent>
    </CenteredDiv>
  );
};
