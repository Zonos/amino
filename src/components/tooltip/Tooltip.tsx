import type { ReactNode } from 'react';

import type { PopperProps } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import MuiTooltip, {
  type TooltipProps as MuiTooltipProps,
  tooltipClasses,
} from '@mui/material/Tooltip';
import styled from 'styled-components';

import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { Color, Theme } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';

const StyledVStack = styled(VStack)`
  padding: ${theme.space0};
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

export type TooltipProps = BaseProps & {
  background?: Color;
  children: ReactNode;
  open?: boolean;
  showTooltip: boolean;
  subtitle: ReactNode | string | null;
  tag?: 'div' | 'span';
  themeOverride?: Theme;
  title?: string;
} & Partial<Omit<MuiTooltipProps, 'children'>>;

const StyledTooltip = muiStyled(
  ({
    className,
    dataTheme,
    ...props
  }: MuiTooltipProps &
    Pick<TooltipProps, 'background'> & { dataTheme: Theme }) => (
    <MuiTooltip
      {...props}
      classes={{ popper: className }}
      PopperProps={
        {
          ...props.PopperProps,
          'data-theme': dataTheme,
          // PopperProps by default, would not allow the data-theme attribute to be passed
        } as PopperProps
      }
    />
  ),
)(({ background }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: background ? theme[background] : theme.gray1200,
    borderRadius: theme.radius10,
    boxShadow: theme.v3ShadowLarge,
    padding: theme.space12,
  },
  [`&[data-theme='night']`]: {
    [`.${tooltipClasses.tooltip}`]: {
      backgroundColor: background ? theme[background] : theme.gray50,
    },
  },
}));

export const Tooltip = ({
  background,
  children,
  className,
  open,
  showTooltip,
  subtitle,
  tag,
  themeOverride,
  title,
  ...rest
}: TooltipProps) => {
  const { aminoTheme } = useAminoTheme();
  if (showTooltip) {
    return (
      <StyledTooltip
        {...rest}
        background={background}
        className={className}
        dataTheme={themeOverride || aminoTheme}
        open={open}
        title={
          <StyledVStack spacing={8}>
            {title && (
              <Text isUppercase={false} type="small-header">
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
