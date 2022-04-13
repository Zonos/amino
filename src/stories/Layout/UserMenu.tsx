import React, { useState } from 'react';

import { Menu, MenuItem, Text, TextAvatar, VStack } from 'index';
import styled from 'styled-components';

import { Surface } from 'components/Surface';
import { Depth } from 'types';

import { DropdownAnimationInverse } from '../../animations';

const MenuWrapper = styled.div<{ addSpacing: boolean }>`
  border-top: var(--amino-border);
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: visible;

  li {
    cursor: pointer;
  }

  strong {
    font-weight: 500;
  }
`;

const UserInfo = styled.button<{ addSpacing: boolean }>`
  width: 100%;
  border-radius: var(--amino-radius);
  box-sizing: border-box;
  padding: ${p => p.addSpacing && `var(--amino-space)`};
  transition: var(--amino-transition);
  background: transparent;
  display: flex;
  align-items: center;
  flex-direction: row;

  &:hover {
    background: var(--amino-hover-color);
  }

  * {
    margin-bottom: 0;
  }

  span {
    font-size: 0.85rem;
  }
`;

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: var(--amino-space-half);
`;

const StoreItem = styled.div`
  padding: var(--amino-space-half);
  transition: var(--amino-transition);
  user-select: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;

  & + & {
    margin-top: var(--amino-space-half-negative);
  }

  &:hover {
    background: var(--amino-hover-color);
  }

  * {
    user-select: none;
    cursor: pointer;
    margin-bottom: 0;
  }

  & > div {
    margin-right: var(--amino-space-half);
  }
`;

const AnimatedSurface = styled(Surface)`
  animation: ${DropdownAnimationInverse.getName()} 250ms ease-in-out;
  animation-fill-mode: both;
  border: 1px solid var(--amino-border-color);
  z-index: 100;
  position: absolute;
  padding: var(--amino-radius) 0;
  min-width: 100%;
  width: max-content;

  left: var(--amino-space-half);
  bottom: var(--amino-space-half);
`;

const StyledSubtitle = styled.span`
  opacity: 0.7;
  font-style: italic;
`;

const StyledVStack = styled(VStack)`
  text-align: left;
  min-width: 145.17px;
`;

interface Props {
  addSpacing?: boolean;
}

export const UserMenu = ({ addSpacing = true }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuWrapper addSpacing={addSpacing}>
        <UserInfo addSpacing={addSpacing} onClick={() => setOpen(!open)}>
          <Avatar />
          <StyledVStack spacing="none">
            <strong>Hello</strong>
            <StyledSubtitle title="Store 2458">Store #1234</StyledSubtitle>
          </StyledVStack>
        </UserInfo>

        {open && (
          <AnimatedSurface dense depth={Depth.depth16}>
            <Menu>
              <StoreItem onClick={() => {}}>
                <TextAvatar label="Default" />
                <VStack spacing="none">
                  <strong>Test Store</strong>
                  <Text type="subtitle">Click to switch...</Text>
                </VStack>
              </StoreItem>

              <StoreItem>
                <TextAvatar label="Zonos" />
                <VStack spacing="none">
                  <strong>Switch to Zonos</strong>
                  <Text type="subtitle">Click to switch...</Text>
                </VStack>
              </StoreItem>

              <hr />

              <MenuItem>
                <span>Your profile</span>
              </MenuItem>
              <MenuItem>
                <a
                  href="https://docs.zonos.com/support"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Support
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="https://docs.zonos.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Documentation
                </a>
              </MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </AnimatedSurface>
        )}
      </MenuWrapper>
    </>
  );
};
