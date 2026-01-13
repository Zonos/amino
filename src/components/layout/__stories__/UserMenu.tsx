import { useState } from 'react';

import clsx from 'clsx';

import { TranslateAminoText as Translate } from 'src/components/__amino__/TranslateAminoText';
import { Menu } from 'src/components/menu/Menu';
import { MenuItem } from 'src/components/menu/MenuItem';
import { VStack } from 'src/components/stack/VStack';
import { Surface } from 'src/components/surface/Surface';
import { Text } from 'src/components/text/Text';
import { TextAvatar } from 'src/components/text-avatar/TextAvatar';

import styles from './UserMenu.stories.module.scss';

type UserMenuProps = {
  addSpacing?: boolean;
};

export const UserMenu = ({ addSpacing = true }: UserMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.menuWrapper}>
      <button
        className={clsx(styles.userInfo, addSpacing && styles.addSpacing)}
        onClick={() => setOpen(!open)}
        type="button"
      >
        <div className={styles.avatar} />
        <VStack className={styles.styledVStack} spacing={0}>
          <strong>
            <Translate text="Hello" />
          </strong>
          <span className={styles.styledSubtitle} title="Store 2458">
            <Translate
              text="Store #[storeNumber]"
              variables={{ storeNumber: '1234' }}
            />
          </span>
        </VStack>
      </button>

      {open && (
        <Surface className={styles.animatedSurface} dense depth="depth16">
          <Menu>
            <button
              className={styles.storeItem}
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

            <div className={styles.storeItem}>
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
