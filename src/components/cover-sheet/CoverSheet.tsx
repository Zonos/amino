import { type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { Button } from 'src/components/button/Button';
import { CoverSheetActions } from 'src/components/cover-sheet/CoverSheetActions';
import { Text } from 'src/components/text/Text';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';

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
  color: ${theme.textColor};

  @media print {
    height: unset;
    min-height: 100vh;
    position: absolute;
  }
`;

const StyledCloseButton = styled(Button)`
  margin-right: ${theme.space24};
`;
const StyledHeader = styled(Text)`
  flex-grow: 1;
`;
const Header = styled.header`
  border-bottom: ${theme.border};
  padding: ${theme.space16} ${theme.space24};
  display: flex;
  align-items: center;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: ${theme.pageBackground};

  @media print {
    display: none;
  }
`;

const Content = styled.div`
  padding: ${theme.space24};
`;

export type CoverSheetProps = {
  /** used for setting id of the wrapper of where the action will be located */
  actionWrapperId?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  label: string;
  open: boolean;
  themeOverride?: Theme;
  onClose: () => void;
};

export const CoverSheet = ({
  actions,
  actionWrapperId = '__cover-sheet-actions',
  children,
  className,
  label,
  onClose,
  open,
  themeOverride,
}: CoverSheetProps) => {
  const { aminoTheme } = useAminoTheme();

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    if (document.querySelectorAll(`[id='${actionWrapperId}']`).length > 1) {
      // eslint-disable-next-line no-console
      console.error(
        `Duplicate id "${actionWrapperId}" detected in "CoverSheet" component. Please set "actionWrapperId" to a unique id.`,
      );
    }
  }, [actionWrapperId]);

  useEffect(() => {
    if (!document?.body) {
      return;
    }
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  if (typeof document !== 'undefined') {
    const body = document.querySelector('body');
    if (body) {
      return createPortal(
        <AnimatePresence>
          {open && (
            <StyledDialog
              animate={{ opacity: 1, translateY: 0 }}
              className={className}
              data-theme={themeOverride || aminoTheme}
              exit={{ opacity: 0, translateY: 5 }}
              initial={{ opacity: 0, translateY: 10 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <Header>
                <StyledCloseButton
                  icon={<RemoveIcon size={20} />}
                  onClick={onClose}
                />
                <StyledHeader type="header">{label}</StyledHeader>
                <div id={actionWrapperId}>
                  {actions && (
                    <CoverSheetActions coverSheetActionId={actionWrapperId}>
                      {actions}
                    </CoverSheetActions>
                  )}
                </div>
              </Header>
              <Content>{children}</Content>
            </StyledDialog>
          )}
        </AnimatePresence>,
        body,
      );
    }
  }
  return null;
};
