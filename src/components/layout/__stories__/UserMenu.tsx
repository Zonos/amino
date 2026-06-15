import { useState } from 'react';

import { TranslateAminoText as Translate } from 'src/components/__amino__/TranslateAminoText';
import { Menu } from 'src/components/menu/Menu';
import { MenuItem } from 'src/components/menu/MenuItem';
import { VStack } from 'src/components/stack/VStack';
import { Surface } from 'src/components/surface/Surface';
import { Text } from 'src/components/text/Text';
import { TextAvatar } from 'src/components/text-avatar/TextAvatar';
import { cn } from 'src/utils/cn';

type UserMenuProps = {
  addSpacing?: boolean;
};

export const UserMenu = ({ addSpacing = true }: UserMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-amino relative flex h-full items-center
        overflow-x-visible border-t [&_li]:cursor-pointer
        [&_strong]:font-medium"
    >
      <button
        className={cn(
          `rounded-amino-6 transition-amino [&_span]:text-amino-s hover:bg-hover
          box-border flex w-full flex-row items-center bg-transparent
          [&>*]:mb-0`,
          addSpacing && 'p-amino-24',
        )}
        onClick={() => setOpen(!open)}
        type="button"
      >
        <div className="mr-amino-16 h-7 w-7 cursor-pointer rounded-full" />
        <VStack className="min-w-[145.17px] text-left" spacing={0}>
          <strong>
            <Translate text="Hello" />
          </strong>
          <span className="italic opacity-70" title="Store 2458">
            <Translate
              text="Store #[storeNumber]"
              variables={{ storeNumber: '1234' }}
            />
          </span>
        </VStack>
      </button>

      {open && (
        <Surface
          className="bottom-amino-16 left-amino-16
            animate-amino-dropdown-inverse border-amino py-amino-6 absolute
            z-[100] w-max min-w-full border"
          dense
          depth="depth16"
        >
          <Menu>
            <li>
              <button
                className="p-amino-16 transition-amino [&+&]:-mt-amino-16
                  hover:bg-hover [&>div]:mr-amino-16 flex cursor-pointer
                  flex-row items-center select-none [&>*]:mb-0
                  [&>*]:cursor-pointer [&>*]:select-none"
                onClick={() => {}}
                type="button"
              >
                <TextAvatar label="Default" />
                <VStack spacing={0}>
                  <strong>
                    <Translate text="Test Store" />
                  </strong>
                  <Text type="subtitle">
                    <Translate text="Click to switch..." />
                  </Text>
                </VStack>
              </button>
            </li>

            <li>
              <div
                className="p-amino-16 transition-amino [&+&]:-mt-amino-16
                  hover:bg-hover [&>div]:mr-amino-16 flex cursor-pointer
                  flex-row items-center select-none [&>*]:mb-0
                  [&>*]:cursor-pointer [&>*]:select-none"
              >
                <TextAvatar label="Zonos" />
                <VStack spacing={0}>
                  <strong>
                    <Translate text="Switch to Zonos" />
                  </strong>
                  <Text type="subtitle">
                    <Translate text="Click to switch..." />
                  </Text>
                </VStack>
              </div>
            </li>

            <hr />

            <MenuItem>
              <span>
                <Translate text="Your profile" />
              </span>
            </MenuItem>
            <MenuItem>
              <a
                href="https://docs.zonos.com/support"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Translate text="Support" />
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="https://docs.zonos.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Translate text="Documentation" />
              </a>
            </MenuItem>
            <MenuItem>
              <Translate text="Logout" />
            </MenuItem>
          </Menu>
        </Surface>
      )}
    </div>
  );
};
