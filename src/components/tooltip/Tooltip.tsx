import React, { ReactNode } from 'react';

import { styled as muiStyled } from '@mui/material/styles';
import MuiTooltip, {
  tooltipClasses,
  TooltipProps as MuiTooltipProps,
} from '@mui/material/Tooltip';
import { VStack } from 'src/components/stack/VStack';
import styled from 'styled-components';

const NoTooltipWrapper = styled.div``;

const HiddenSpan = styled.span`
  display: none;
`;

const ChildWrapper = styled.div`
  position: relative;
  [disabled] + ${HiddenSpan} {
    display: block;
    cursor: not-allowed;
    z-index: 100000;

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;

export type TooltipProps = {
  children: ReactNode;
  className?: string;
  showTooltip: boolean;
  subtitle?: ReactNode;
  tag?: 'div' | 'span';
  title?: ReactNode;
};

export const LightTooltip = muiStyled(
  ({ className, ...props }: MuiTooltipProps) => (
    <MuiTooltip {...props} classes={{ popper: className }} />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
  },
}));

export const Tooltip = ({
  className,
  children,
  showTooltip,
  subtitle,
  tag,
  title,
}: TooltipProps) => {
  if (showTooltip) {
    return (
      <LightTooltip
        className={className}
        title={
          <VStack spacing="space-quarter">
            {title}
            {subtitle}
          </VStack>
        }
      >
        <ChildWrapper as={tag}>
          {children}
          <HiddenSpan />
        </ChildWrapper>
      </LightTooltip>
    );
  }

  return <NoTooltipWrapper as={tag}>{children}</NoTooltipWrapper>;
};
