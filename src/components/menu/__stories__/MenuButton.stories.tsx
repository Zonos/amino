import {
  type MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import {
  MenuButton,
  type MenuButtonProps,
} from 'src/components/button/MenuButton';
import { Flex } from 'src/components/flex/Flex';
import { Menu } from 'src/components/menu/Menu';
import { MenuItem } from 'src/components/menu/MenuItem';
import { CartIcon } from 'src/icons/CartIcon';
import { CheckCircleIcon } from 'src/icons/CheckCircleIcon';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { CodeIcon } from 'src/icons/CodeIcon';
import { ExternalIcon } from 'src/icons/ExternalIcon';
import { EyeIcon } from 'src/icons/EyeIcon';
import { MailIcon } from 'src/icons/MailIcon';
import { RemoveCircleIcon } from 'src/icons/RemoveCircleIcon';
import { SearchIcon } from 'src/icons/SearchIcon';
import { UserIcon } from 'src/icons/UserIcon';

const MenuButtonMeta: Meta<typeof MenuButton> = {
  component: MenuButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A89',
    },
  },
};

export default MenuButtonMeta;

type Story = StoryObj<typeof MenuButton>;

const Template: StoryFn<MenuButtonProps> = ({
  children,
  ...props
}: MenuButtonProps) => (
  <MenuButton
    {...props}
    action={
      <Button icon={<ChevronDownIcon size={24} />} iconRight>
        A big ol Menu Button...
      </Button>
    }
  >
    {children}
  </MenuButton>
);

export const WithIcon: Story = {
  args: {
    children: (
      <Menu>
        <MenuItem icon={<CodeIcon color="gray600" size={24} />}>
          View API details
        </MenuItem>
        <MenuItem icon={<CartIcon color="gray600" size={24} />}>
          Re-create customer cart
        </MenuItem>
        <MenuItem icon={<MailIcon color="gray600" size={24} />}>
          Re-send confirmation email
        </MenuItem>
        <MenuItem icon={<UserIcon color="gray600" size={24} />}>
          Blacklist customer
        </MenuItem>
        <MenuItem icon={<ExternalIcon color="gray600" size={24} />}>
          Open fraud tools
        </MenuItem>
        <MenuItem icon={<CheckCircleIcon color="gray600" size={24} />}>
          Approve
        </MenuItem>
        <MenuItem icon={<RemoveCircleIcon color="gray600" size={24} />}>
          Deny
        </MenuItem>
        <MenuItem icon={<SearchIcon color="gray600" size={24} />}>
          Investigate buyer
        </MenuItem>
        <MenuItem icon={<EyeIcon color="gray600" size={24} />}>
          Request verification
        </MenuItem>
      </Menu>
    ),
  },
  render: Template,
};

export const WithoutIcon: Story = {
  args: {
    children: (
      <Menu>
        <MenuItem disabled>View API details</MenuItem>
        <MenuItem>Re-create customer cart</MenuItem>
        <MenuItem>Re-send confirmation email</MenuItem>
        <MenuItem>Blacklist customer</MenuItem>
        <MenuItem>Open fraud tools</MenuItem>
        <MenuItem>Approve</MenuItem>
        <MenuItem>Deny</MenuItem>
        <MenuItem>Investigate buyer</MenuItem>
        <MenuItem>Request verification</MenuItem>
      </Menu>
    ),
  },
  render: Template,
};

export const HasDisabledItem: Story = {
  render: () => {
    const [isDisabled, setIsDisabled] = useState(true);
    return (
      <Flex flexDirection="column">
        <div>
          Click button below to disable first item in menu button
          <Button onClick={() => setIsDisabled(!isDisabled)}>
            Toggle Disabled
          </Button>
        </div>
        <MenuButton
          action={
            <Button>Menu button ({isDisabled ? 'Disabled' : 'Enabled'})</Button>
          }
          noCloseOnMouseLeave
        >
          <Menu>
            <MenuItem disabled={isDisabled} onClick={() => alert('Alert')}>
              {isDisabled ? 'Disabled' : 'Enabled'} item (alert() on click)
            </MenuItem>
            <MenuItem>Normal item</MenuItem>
          </Menu>
        </MenuButton>
      </Flex>
    );
  },
};

export const SmallerOptions: Story = {
  args: {
    children: (
      <Menu>
        <MenuItem>A</MenuItem>
        <MenuItem>B</MenuItem>
      </Menu>
    ),
    noCloseOnMouseLeave: true,
  },
  render: Template,
};

export const Draggable: Story = {
  render: props => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 300, y: 300 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown: MouseEventHandler<HTMLDivElement> = e => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    };

    // Wrap above in useCallback
    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (!isDragging) return;
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      },
      [isDragging, offset.x, offset.y],
    );

    const handleMouseUp = useCallback((e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    }, []);

    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, [handleMouseMove, handleMouseUp]);

    return (
      <div
        onBlur={() => setIsDragging(false)}
        onMouseDown={handleMouseDown}
        role="button"
        style={{
          left: `${position.x}px`,
          position: 'absolute',
          top: `${position.y}px`,
        }}
        tabIndex={-1}
      >
        <MenuButton
          {...props}
          action={
            <Button icon={<ChevronDownIcon size={24} />} iconRight>
              More...
            </Button>
          }
        >
          <MenuItem>View API details</MenuItem>
          <MenuItem onClick={() => alert('ok')}>Something else</MenuItem>
        </MenuButton>
      </div>
    );
  },
};
