import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Card } from 'src/components/card/Card';
import { Surface as SurfaceComponent } from 'src/components/surface/Surface';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';

const StyleMeta: Meta = {
  component: SurfaceComponent,
};

export default StyleMeta;

const HoverCard = styled(Card)`
  &:hover {
    background-color: ${theme.hoverColor};
  }
`;

const Template: StoryFn = () => (
  <SurfaceComponent>
    <HoverCard>
      <Text>Hello</Text>
    </HoverCard>
  </SurfaceComponent>
);

export const Surface = Template.bind({});
