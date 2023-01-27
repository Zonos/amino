import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { useHotkeys } from 'react-hotkeys-hook';

import { AnimatePresence, motion } from 'framer-motion';
import { Backdrop } from 'src/components/backdrop/Backdrop';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { theme } from 'src/styles/constants/theme';
import { IAminoTheme } from 'src/types/IAminoTheme';
import styled from 'styled-components';

const Popup = styled(motion.div)`
  position: absolute;
  z-index: 1001;
  background: ${theme.surfaceColor};
  width: 300px;
  outline: none;
  box-shadow: ${theme.v3ShadowXxl};
  height: 100vh;
  right: 0;
  top: 0;
  border-left: ${theme.border};
`;

const SlideOverHeader = styled.header`
  padding: ${theme.space24};
  border-bottom: ${theme.border};
  display: flex;
  align-items: center;

  .header-content {
    margin: 0;
    flex: 1;
  }
`;

const Close = styled.div`
  transition: all 100ms ease-in-out;
  background: transparent;
  border-radius: 32px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    background: ${theme.gray200};
    opacity: 1;
  }

  svg {
    width: 14px;
    height: 14px;
    fill: ${theme.textColor};
    transition: all 100ms ease-in-out;
  }
`;

const SlideOverContent = styled.div`
  padding: ${theme.space24};
  overflow-y: auto;
  overscroll-behavior: contain;
`;

const Footer = styled.div`
  padding: ${theme.space24};
  border-top: ${theme.border};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: ${theme.surfaceColorSecondary};
  position: absolute;
  bottom: 0;
  width: 100%;

  & > div + div {
    margin-left: ${theme.space8};
  }
`;

export type SlideOverProps = {
  children: ReactNode;
  actions?: ReactNode;
  label?: string;
  onClose: () => void;
  open: boolean;
  theme?: IAminoTheme;
  modal?: boolean;
  subtitle?: ReactNode;
};

export const SlideOver = ({
  children,
  actions,
  label,
  onClose,
  open,
  theme: _theme,
  subtitle,
  modal = true,
}: SlideOverProps) => {
  useHotkeys('esc', onClose);

  if (typeof document !== 'undefined') {
    return ReactDOM.createPortal(
      <AnimatePresence>
        {open && (
          <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: modal ? 0.65 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            key="dialog-backdrop"
            data-theme={_theme}
            onClick={onClose}
          />
        )}
        {open && (
          <Popup
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.45 }}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            key="slide-over"
          >
            <SlideOverHeader>
              {subtitle ? (
                <VStack spacing="none" className="header-content">
                  <Text type="title">{label}</Text>
                  {subtitle}
                </VStack>
              ) : (
                <Text type="title" className="header-content">
                  {label}
                </Text>
              )}
              <Close onClick={onClose}>
                <RemoveIcon />
              </Close>
            </SlideOverHeader>
            <SlideOverContent>{children}</SlideOverContent>
            {actions && (
              <Footer>
                <HStack spacing="space-quarter">{actions}</HStack>
              </Footer>
            )}
          </Popup>
        )}
      </AnimatePresence>,
      document.querySelector('body')!
    );
  }
  return null;
};
