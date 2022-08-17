import React, { forwardRef } from 'react';

import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import { IAminoTheme } from 'src/types/IAminoTheme';
import styled, { css } from 'styled-components';

import { BaseDialog } from './_BaseDialog';

const Header = styled.div`
  padding: ${theme.space};
  border-top-left-radius: ${theme.radiusXl};
  border-top-right-radius: ${theme.radiusXl};
  display: flex;
  align-items: center;

  h5 {
    margin: 0;
    flex: 1;
    font-weight: 700;
  }
`;

const StyledActionBaseWrapper = styled.div`
  flex-grow: 1;
  display: flex;
`;

const StyledLeftActionWrapper = styled(StyledActionBaseWrapper)`
  justify-content: flex-start;
`;
const StyledRightActionWrapper = styled(StyledActionBaseWrapper)`
  justify-content: flex-end;
`;

const Footer = styled.div`
  padding: ${theme.space};
  display: flex;
  align-items: center;
  border-bottom-left-radius: ${theme.radiusXl};
  border-bottom-right-radius: ${theme.radiusXl};

  & > div + div {
    margin-left: ${theme.spaceQuarter};
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
  padding: 0 ${theme.space};
  max-height: calc(90vh - (83px * 2));
  overflow-y: auto;
  /**
   * Current overflow is not working well with react-tooltip.
   * Temporary remove gradient overflow until having new tooltip library to use
   */
  // gradientOverflow
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

  &:hover {
    svg {
      fill: ${theme.grayL20};
    }
  }

  svg {
    transition: all 100ms ease-in-out;
  }
`;

export type DialogProps = {
  actions?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  label?: string;
  leftActions?: React.ReactNode;
  onClose: () => void;
  open: boolean;
  theme?: IAminoTheme;
  width?: number;
};

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      actions,
      children,
      className,
      label,
      leftActions,
      onClose,
      open,
      theme: _theme,
      width,
    },
    ref
  ) => (
    <BaseDialog
      className={className}
      data-theme={_theme}
      open={open}
      width={width}
    >
      <Header>
        <Text type="subheader">{label}</Text>
        <Close onClick={onClose}>
          <RemoveCircleDuotoneIcon size={32} />
        </Close>
      </Header>
      <Content ref={ref}>{children}</Content>
      {(actions || leftActions) && (
        <Footer>
          {leftActions && (
            <StyledLeftActionWrapper>
              <HStack spacing="space-quarter">{leftActions}</HStack>
            </StyledLeftActionWrapper>
          )}
          {actions && (
            <StyledRightActionWrapper>
              <HStack spacing="space-quarter">{actions}</HStack>
            </StyledRightActionWrapper>
          )}
        </Footer>
      )}
    </BaseDialog>
  )
);
