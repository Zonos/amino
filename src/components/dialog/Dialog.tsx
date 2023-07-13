import { type ReactNode, forwardRef } from 'react';

import { Text } from 'src/components/text/Text';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types/Theme';
import styled, { css } from 'styled-components';

import { Button } from '../button/Button';
import { BaseDialog } from './_BaseDialog';

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
    font-weight: 700;
  }
`;

const StyledCloseButton = styled(Button)`
  padding: 0;
  path[data-is-secondary-color] {
    fill: ${theme.gray200};
  }

  && {
    &,
    &:focus,
    &:hover,
    &:active {
      color: ${theme.gray800};
      background: transparent;
    }
    &:hover {
      path[data-is-secondary-color] {
        fill: ${theme.gray300};
      }
    }
    &:active,
    &:focus {
      path[data-is-secondary-color] {
        fill: ${theme.gray400};
      }
    }
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const gradientOverflow = css`
  overscroll-behavior: contain;
  /* scroll bar width, for use in mask calculations */
  --scrollbar-width: 8px;

  /* mask fade distance, for use in mask calculations */
  --mask-height: 32px;

  /* If content exceeds height of container, overflow! */
  overflow-y: auto;

  padding-bottom: var(--mask-height);
  /* The CSS mask */

  /* The content mask is a linear gradient from top to bottom */
  --mask-image-content: linear-gradient(
    to bottom,
    transparent,
    black var(--mask-height),
    black calc(100% - var(--mask-height)),
    transparent
  );
  /* Here we scale the content gradient to the width of the container
minus the scrollbar width. The height is the full container height */
  --mask-size-content: calc(100% - var(--scrollbar-width)) 100%;

  /* The scrollbar mask is a black pixel */
  --mask-image-scrollbar: linear-gradient(black, black);

  /* The width of our black pixel is the width of the scrollbar.
The height is the full container height */
  --mask-size-scrollbar: var(--scrollbar-width) 100%;

  /* Apply the mask image and mask size variables */
  mask-image: var(--mask-image-content), var(--mask-image-scrollbar);
  mask-size: var(--mask-size-content), var(--mask-size-scrollbar);

  /* Position the content gradient in the top left, and the
scroll gradient in the top right */
  mask-position: 0 0, 100% 0;

  /* We don't repeat our mask images */
  mask-repeat: no-repeat, no-repeat;
`;

const Content = styled.div`
  padding: ${theme.space8} ${theme.space24};
  overflow-y: auto;
  flex-grow: 1;
  /**
   * Current overflow is not working well with react-tooltip.
   * Temporary remove gradient overflow until having new tooltip library to use
   */
  // gradientOverflow
`;

export type DialogProps = {
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Close when clicking outside dialog (on the backdrop)
   * @default true
   */
  closeOnBlur?: boolean;
  /** Close on pressing 'escape' key
   * @default true
   */
  closeOnEsc?: boolean;
  label?: ReactNode;
  leftActions?: ReactNode;
  noBorder?: boolean;
  open: boolean;
  subtitle?: string;
  themeOverride?: Theme;
  width?: number;
  onClose: () => void;
};

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      actions,
      children,
      className,
      closeOnBlur,
      closeOnEsc,
      label,
      leftActions,
      noBorder,
      onClose,
      open,
      subtitle,
      themeOverride,
      width,
    },
    ref,
  ) => (
    <BaseDialog
      className={className}
      closeOnBlur={closeOnBlur}
      closeOnEsc={closeOnEsc}
      data-theme={themeOverride}
      noBorder={noBorder}
      onClose={onClose}
      open={open}
      width={width}
    >
      <Header>
        <Title>
          <Text type="title">{label}</Text>
          <StyledCloseButton
            icon={<RemoveCircleDuotoneIcon size={24} />}
            noRipple
            onClick={onClose}
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
