import { useState } from 'react';

import type { ComponentStory, Meta } from '@storybook/react';
import { Button } from 'src/components/button/Button';
import { LightBox as LightBoxComponent } from 'src/components/lightbox/LightBox';
import styled from 'styled-components';

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

export const LightBox: ComponentStory<typeof LightBoxComponent> = ({
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
        open={open}
        onClose={() => setOpen(false)}
        width={width}
      >
        <img src="logo.png" alt="logo" />
      </LightBoxComponent>
    </CenteredDiv>
  );
};
