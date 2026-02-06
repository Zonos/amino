import type { Meta, StoryFn } from '@storybook/react';

import { Card } from 'src/components/card/Card';
import { Surface as SurfaceComponent } from 'src/components/surface/Surface';
import { Text } from 'src/components/text/Text';

const StyleMeta: Meta = {
  component: SurfaceComponent,
};

export default StyleMeta;

const Template: StoryFn = () => (
  <SurfaceComponent>
    <Card className="hover:bg-amino-hover-color">
      <Text>Hello</Text>
    </Card>
  </SurfaceComponent>
);

export const Surface = Template.bind({});
