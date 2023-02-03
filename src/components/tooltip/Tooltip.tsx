import { ReactNode } from 'react';

import { styled as muiStyled } from '@mui/material/styles';
import MuiTooltip, {
  tooltipClasses,
  TooltipProps as MuiTooltipProps,
} from '@mui/material/Tooltip';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import styled from 'styled-components';

const StyledVStack = styled(VStack)`
  padding-top: 3px;
`;

const NoTooltipWrapper = styled.div``;

const HiddenSpan = styled.span`
  display: none;
`;

const ChildWrapper = styled.div`
  position: relative;
  [disabled] + ${HiddenSpan} {
    display: block;
    cursor: not-allowed;
    /** @desc avoid showing tooltip on top of dialog or coversheet */
    z-index: 10;

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;

export type TooltipProps = {
  background?: Color;
  children: ReactNode;
  className?: string;
  open?: boolean;
  showTooltip: boolean;
  subtitle: ReactNode | string | null;
  tag?: 'div' | 'span';
  title?: string;
};

const StyledTooltip = muiStyled(
  ({
    className,
    ...props
  }: MuiTooltipProps & Pick<TooltipProps, 'background'>) => (
    <MuiTooltip {...props} classes={{ popper: className }} />
  )
)(({ background }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: background ? theme[background] : '#0C0C0D',
    boxShadow: theme.v3ShadowLarge,
  },
}));

export const Tooltip = ({
  background,
  className,
  children,
  showTooltip,
  subtitle,
  tag,
  title,
  open,
}: TooltipProps) => {
  if (showTooltip) {
    console.log(background);
    return (
      <StyledTooltip
        background={background}
        className={className}
        open={open}
        title={
          <StyledVStack spacing="space-quarter">
            {title && (
              <Text type="small-header" isUppercase={false}>
                {title}
              </Text>
            )}
            {typeof subtitle === 'string' ? (
              <Text type="caption">{subtitle}</Text>
            ) : (
              subtitle
            )}
          </StyledVStack>
        }
      >
        <ChildWrapper as={tag}>
          {children}
          <HiddenSpan />
        </ChildWrapper>
      </StyledTooltip>
    );
  }

  return <NoTooltipWrapper as={tag}>{children}</NoTooltipWrapper>;
};
