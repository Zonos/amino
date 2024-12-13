import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { ButtonGroup } from 'src/components/button/button-group/ButtonGroup';
import { MenuButton } from 'src/components/button/MenuButton';
import { Menu } from 'src/components/menu/Menu';
import { MenuItem } from 'src/components/menu/MenuItem';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { Tooltip } from 'src/components/tooltip/Tooltip';
import { ArrowSwapIcon } from 'src/icons/ArrowSwapIcon';
import { EditIcon } from 'src/icons/EditIcon';
import { RemoveCircleIcon } from 'src/icons/RemoveCircleIcon';
import { StarsIcon } from 'src/icons/StarsIcon';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=6952-10231&t=ty8x4h88FKUVO4EX-4',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

const icons = [
  <EditIcon />,
  <RemoveCircleIcon />,
  <ArrowSwapIcon />,
  <StarsIcon />,
];

const createButtonStory = (numButtons: number): Story => ({
  render: () => (
    <VStack spacing={40}>
      <VStack spacing={16}>
        <Text type="title">{numButtons} Buttons</Text>

        {/* Text buttons */}
        <ButtonGroup>
          {Array.from({ length: numButtons }, (_, i) => (
            <Button key={i}>Button {i + 1}</Button>
          ))}
        </ButtonGroup>

        {/* Mixture of text and icon buttons */}
        <ButtonGroup>
          {Array.from({ length: numButtons }, (_, i) =>
            i % 2 !== 0 ? (
              <Button key={i} icon={icons[i % icons.length]} />
            ) : (
              <Button key={i}>Button {i + 1}</Button>
            ),
          )}
        </ButtonGroup>

        {/* Icon buttons */}
        <ButtonGroup>
          {icons.slice(0, numButtons).map(icon => (
            <Button key={icon.key} icon={icon} />
          ))}
        </ButtonGroup>

        {/* Mixture of menu button and button */}
        <ButtonGroup>
          {Array.from({ length: numButtons }, (_, i) =>
            i % 2 !== 0 ? (
              <MenuButton action={<Button>Menu button</Button>}>
                <Menu>
                  <MenuItem>Menu 1</MenuItem>
                  <MenuItem>Menu 2</MenuItem>
                  <MenuItem>Menu 3</MenuItem>
                </Menu>
              </MenuButton>
            ) : (
              <Button key={i}>Button {i + 1}</Button>
            ),
          )}
        </ButtonGroup>

        {/* Mixture of tooltip button and menu button */}
        <ButtonGroup>
          {Array.from({ length: numButtons }, (_, i) =>
            i % 2 !== 0 ? (
              <MenuButton action={<Button>Menu button</Button>}>
                <Menu>
                  <MenuItem>Menu 1</MenuItem>
                  <MenuItem>Menu 2</MenuItem>
                  <MenuItem>Menu 3</MenuItem>
                </Menu>
              </MenuButton>
            ) : (
              <Tooltip title="Tooltip">
                <Button key={i}>Tooltip Button {i + 1}</Button>
              </Tooltip>
            ),
          )}
        </ButtonGroup>
      </VStack>
    </VStack>
  ),
});

export const TwoButtons: Story = createButtonStory(2);
export const ThreeButtons: Story = createButtonStory(3);
export const FourButtons: Story = createButtonStory(4);
