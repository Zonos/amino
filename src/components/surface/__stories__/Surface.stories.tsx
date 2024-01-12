import type { Meta, StoryFn } from '@storybook/react';

import { Card } from 'src/components/card/Card';
import { Surface as SurfaceComponent } from 'src/components/surface/Surface';
import { Text } from 'src/components/text/Text';

import styles from './Surface.stories.module.scss';

const StyleMeta: Meta = {
  component: SurfaceComponent,
};

export default StyleMeta;

const Template: StoryFn = () => (
  <SurfaceComponent>
    <Card className={styles.hoverCard}>
      <Text>Hello</Text>
    </Card>
  </SurfaceComponent>
);

export const Surface = Template.bind({});
