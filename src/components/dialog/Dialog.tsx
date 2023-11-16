import { type ReactNode, forwardRef } from 'react';

import styled from 'styled-components';

import { ButtonIcon } from 'src/components/button/ButtonIcon';
import {
  type BaseDialogProps,
  BaseDialog,
} from 'src/components/dialog/BaseDialog';
import { Text } from 'src/components/text/Text';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { theme } from 'src/styles/constants/theme';

const Header = styled.div`
  padding: ${theme.space24};
  padding-bottom: ${theme.space16};
  border-top-left-radius: ${theme.radius12};
  border-top-right-radius: ${theme.radius12};
  display: flex;
  flex-direction: column;
  gap: ${theme.space12};
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > :not(button) {
    margin: 0;
    flex-grow: 1;
  }
`;

const StyledActionBaseWrapper = styled.div`
  flex-grow: 1;
  display: flex;
`;

const StyledLeftActionWrapper = styled(StyledActionBaseWrapper)`
  justify-content: flex-start;
  display: flex;
  gap: ${theme.space8};
`;
const StyledRightActionWrapper = styled(StyledActionBaseWrapper)`
  justify-content: flex-end;
  display: flex;
  gap: ${theme.space8};
`;

const Footer = styled.div`
  padding: ${theme.space24};
  display: flex;
  align-items: center;
  border-bottom-left-radius: ${theme.radius12};
  border-bottom-right-radius: ${theme.radius12};

  & > div + div {
    margin-left: ${theme.space8};
  }
`;

const Content = styled.div`
  padding: ${theme.space8} ${theme.space24};
  overflow-y: auto;
  flex-grow: 1;
`;

export type DialogProps = BaseDialogProps & {
  actions?: ReactNode;
  label?: ReactNode;
  leftActions?: ReactNode;
  subtitle?: ReactNode;
  onClose: () => void;
};

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    { actions, children, label, leftActions, onClose, subtitle, ...props },
    ref,
  ) => (
    <BaseDialog {...props} onClose={onClose}>
      <Header>
        <Title>
          <Text type="title">{label}</Text>
          <ButtonIcon
            icon={<RemoveCircleDuotoneIcon size={24} />}
            noRipple
            onClick={onClose}
            variant="text"
          />
        </Title>
        {subtitle && <Text type="subtitle">{subtitle}</Text>}
      </Header>
      <Content ref={ref}>{children}</Content>
      {(actions || leftActions) && (
        <Footer>
          {leftActions && (
            <StyledLeftActionWrapper>{leftActions}</StyledLeftActionWrapper>
          )}
          {actions && (
            <StyledRightActionWrapper>{actions}</StyledRightActionWrapper>
          )}
        </Footer>
      )}
    </BaseDialog>
  ),
);
