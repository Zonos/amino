import React from 'react';
import { createPortal } from 'react-dom';

import { AnimatePresence, motion } from 'framer-motion';
import { Text } from 'src/components/text/Text';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { Button } from '../button/Button';
import { CoverSheetActions } from './CoverSheetActions';

const StyledDialog = styled(motion.div)`
  z-index: 990;
  outline: none;
  overflow-y: auto;
  box-sizing: border-box;
  overscroll-behavior: contain;
  background: ${theme.pageBackground};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  @media print {
    height: unset;
    min-height: 100vh;
    position: absolute;
  }
`;

const StyledCloseButton = styled(Button)`
  margin-right: ${theme.space};
`;
const StyledHeader = styled(Text)`
  flex-grow: 1;
`;
const Header = styled.header`
  background: ${theme.surfaceColor};
  border-bottom: ${theme.border};

  padding: ${theme.spaceHalf} ${theme.space};
  display: flex;
  align-items: center;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 99;

  @media print {
    display: none !important;
  }
`;

const Content = styled.div`
  padding: ${theme.space};
`;

export type CoverSheetProps = {
  children: React.ReactNode;
  className?: string;
  open: boolean;
  label: string;
  onClose: () => void;
  actions?: React.ReactNode;
};

export const CoverSheet = ({
  className,
  open,
  label,
  onClose,
  children,
  actions,
}: CoverSheetProps) => {
  if (typeof document !== 'undefined') {
    const body = document.querySelector('body');
    if (body) {
      return createPortal(
        <AnimatePresence>
          {open && (
            <StyledDialog
              className={className}
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.35 }}
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 5 }}
            >
              <Header>
                <StyledCloseButton
                  icon={<RemoveIcon size={20} />}
                  onClick={onClose}
                />
                <StyledHeader type="header">{label}</StyledHeader>
                <div id="cover-sheet-actions">
                  {actions && <CoverSheetActions>{actions}</CoverSheetActions>}
                </div>
              </Header>
              <Content>{children}</Content>
            </StyledDialog>
          )}
        </AnimatePresence>,
        body
      );
    }
  }
  return null;
};
