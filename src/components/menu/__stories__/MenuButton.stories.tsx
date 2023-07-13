import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import {
  type MenuButtonProps,
  MenuButton,
} from 'src/components/button/MenuButton';
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

const MenuButtonMeta: Meta = {
  component: MenuButton,
};

export default MenuButtonMeta;

const Template: StoryFn<MenuButtonProps> = ({ children }: MenuButtonProps) => {
  const [open, setOpen] = useState(true);
  return (
    <MenuButton
      action={
        <Button
          icon={<ChevronDownIcon size={20} />}
          iconRight
          onClick={() => setOpen(!open)}
        >
          More...
        </Button>
      }
      open={open}
      setOpen={setOpen}
    >
      {children}
    </MenuButton>
  );
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <Menu>
      <MenuItem icon={<CodeIcon color="gray600" size={19} />}>
        View API details
      </MenuItem>
      <MenuItem icon={<CartIcon color="gray600" size={19} />}>
        Re-create customer cart
      </MenuItem>
      <MenuItem icon={<MailIcon color="gray600" size={19} />}>
        Re-send confirmation email
      </MenuItem>
      <MenuItem icon={<UserIcon color="gray600" size={19} />}>
        Blacklist customer
      </MenuItem>
      <MenuItem icon={<ExternalIcon color="gray600" size={19} />}>
        Open fraud tools
      </MenuItem>
      <MenuItem icon={<CheckCircleIcon color="gray600" size={19} />}>
        Approve
      </MenuItem>
      <MenuItem icon={<RemoveCircleIcon color="gray600" size={19} />}>
        Deny
      </MenuItem>
      <MenuItem icon={<SearchIcon color="gray600" size={19} />}>
        Investigate buyer
      </MenuItem>
      <MenuItem icon={<EyeIcon color="gray600" size={19} />}>
        Request verification
      </MenuItem>
    </Menu>
  ),
};
WithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A89',
  },
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  children: (
    <Menu>
      <MenuItem>View API details</MenuItem>
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
};
WithoutIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A89',
  },
};
