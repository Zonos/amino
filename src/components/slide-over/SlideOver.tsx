import { type ReactNode } from 'react';

import styled from 'styled-components';

import { Button } from 'src/components/button/Button';
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
  background: transparent;
  box-shadow: none;

  position: absolute;
  height: 100vh;
  right: 0;
  top: 0;
`;

const Wrapper = styled.div`
  height: 100%;
  margin: ${theme.space8};
  border-radius: ${theme.space12};
  background: ${theme.surfaceColor};

  display: flex;
  flex-direction: column;

  box-shadow: ${theme.v3ShadowXxl};
`;

const SlideOverHeader = styled.header`
  padding: ${theme.space16};
  border-bottom: ${theme.border};

  display: flex;
  gap: ${theme.space16};
  align-items: center;

  .header-content {
    margin: 0;
    flex: 1;
  }
`;

const SlideOverContent = styled.div`
  padding: ${theme.space24};
  overflow-y: auto;
  overscroll-behavior: contain;
  flex: 1;
`;

const Footer = styled.div`
  padding: ${theme.space24};
  border-radius: ${theme.space12};
  border-top: ${theme.border};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: ${theme.surfaceColorSecondary};

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
  width = 444,
  ...props
}: SlideOverProps) => (
  <StyledBaseDialog
    onClose={onClose}
    popupMotionProps={{
      animate: { x: 0 },
      exit: { x: width },
      initial: { x: width },
      transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
    }}
    width={width}
    {...props}
  >
    <Wrapper>
      <SlideOverHeader>
        <Button icon={<RemoveIcon />} onClick={onClose} />
        {subtitle ? (
          <VStack className="header-content" spacing={0}>
            <Text type="subheader">{label}</Text>
            {subtitle}
          </VStack>
        ) : (
          <Text className="header-content" type="subheader">
            {label}
          </Text>
        )}
      </SlideOverHeader>
      <SlideOverContent>{children}</SlideOverContent>
      {actions && (
        <Footer>
          <HStack spacing={8}>{actions}</HStack>
        </Footer>
      )}
    </Wrapper>
  </StyledBaseDialog>
);
