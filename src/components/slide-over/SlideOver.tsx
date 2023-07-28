import { type ReactNode } from 'react';

import styled from 'styled-components';

import {
  type BaseDialogProps,
  BaseDialog,
} from 'src/components/dialog/BaseDialog';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { theme } from 'src/styles/constants/theme';

const StyledBaseDialog = styled(BaseDialog)`
  /* Override BaseDialog.Popup styles */
  border-radius: 0;
  max-height: none;
  overflow: unset;
  border: none;

  position: absolute;
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
  position: fixed;
  bottom: 0;
  width: 300px;

  & > div + div {
    margin-left: ${theme.space8};
  }
`;

export type SlideOverProps = BaseDialogProps & {
  actions?: ReactNode;
  label?: string;
  subtitle?: ReactNode;
};

export const SlideOver = ({
  actions,
  children,
  label,
  onClose,
  subtitle,
  ...props
}: SlideOverProps) => (
  <StyledBaseDialog
    onClose={onClose}
    popupMotionProps={{
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 300 },
      initial: { opacity: 0, x: 300 },
      transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
    }}
    width={300}
    {...props}
  >
    <SlideOverHeader>
      {subtitle ? (
        <VStack className="header-content" spacing={0}>
          <Text type="title">{label}</Text>
          {subtitle}
        </VStack>
      ) : (
        <Text className="header-content" type="title">
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
        <HStack spacing={8}>{actions}</HStack>
      </Footer>
    )}
  </StyledBaseDialog>
);
