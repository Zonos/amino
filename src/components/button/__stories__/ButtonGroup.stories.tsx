import type { Meta, StoryFn } from '@storybook/react';

import { type ButtonProps, Button } from 'src/components/button/Button';
import { ButtonGroup } from 'src/components/button/button-group/ButtonGroup';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { ArrowSwapIcon } from 'src/icons/ArrowSwapIcon';
import { EditIcon } from 'src/icons/EditIcon';
import { RemoveCircleIcon } from 'src/icons/RemoveCircleIcon';
import { StarsIcon } from 'src/icons/StarsIcon';

const ButtonGroupMeta: Meta = {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=6952-10231&t=ty8x4h88FKUVO4EX-4',
    },
  },
};

export default ButtonGroupMeta;

const Template: StoryFn<ButtonProps> = () => (
  <VStack spacing={40}>
    <VStack spacing={16}>
      <Text type="title">2 Buttons</Text>
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button icon={<EditIcon />} />
        <Button icon={<RemoveCircleIcon />} />
      </ButtonGroup>
    </VStack>

    <VStack spacing={16}>
      <Text type="title">3 Buttons</Text>
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button icon={<EditIcon />} />
        <Button icon={<RemoveCircleIcon />} />
        <Button icon={<ArrowSwapIcon />} />
      </ButtonGroup>
    </VStack>

    <VStack spacing={16}>
      <Text type="title">4 Buttons</Text>
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <Button>Button 4</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button icon={<EditIcon />} />
        <Button icon={<RemoveCircleIcon />} />
        <Button icon={<ArrowSwapIcon />} />
        <Button icon={<StarsIcon />} />
      </ButtonGroup>
    </VStack>
  </VStack>
);

export const Default = Template.bind({});
