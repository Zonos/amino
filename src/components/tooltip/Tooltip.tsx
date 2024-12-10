import type { ReactNode } from 'react';

import type { PopperProps } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import MuiTooltip, {
  tooltipClasses,
  type TooltipProps as MuiTooltipProps,
} from '@mui/material/Tooltip';

import { Flex } from 'src/components/flex/Flex';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Theme } from 'src/types/Theme';

export type TooltipProps = BaseProps & {
  /**
   * The component that will trigger the tooltip.
   */
  children: ReactNode;
  /**
   * Whether the tooltip should be shown.
   *
   * Leave as undefined to remain uncontrolled.
   * @default undefined
   */
  disabled?: boolean;
  /**
   * Override to stay open.
   * @default false
   */
  open?: boolean;
  /**
   *
   */
  subtitle?: ReactNode;
  /**
   * Set to `null` to use current theme. Our default tooltips are designed to be dark.
   *
   * @default 'night'
   */
  themeOverride?: Theme;
  /**
   * The content of the tooltip.
   */
  title?: ReactNode;
} & Partial<Omit<MuiTooltipProps, 'children'>>;

const StyledTooltip = muiStyled(
  ({
    className,
    dataTheme,
    ...props
  }: MuiTooltipProps & { dataTheme: Theme }) => (
    <MuiTooltip
      {...props}
      PopperProps={
        {
          ...props.PopperProps,
          'data-theme': dataTheme,
          // PopperProps by default, would not allow the data-theme attribute to be passed
        } as PopperProps
      }
      classes={{ popper: className }}
    />
  ),
)(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    // Reset MUI styles
    all: 'revert',
    backgroundColor: theme.gray0,
    borderRadius: theme.radius10,
    boxShadow: theme.v3ShadowLarge,
    color: theme.textColor,
    padding: theme.space12,
  },
  [`&[data-theme='night']`]: {
    [`.${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.gray50,
    },
  },
}));

export const Tooltip = ({
  children,
  className,
  disabled = false,
  open,
  subtitle,
  themeOverride = 'night',
  title,
  ...rest
}: TooltipProps) => {
  const renderTooltip = () => (
    <Flex flexDirection="column" gap={8}>
      {typeof title === 'string' ? (
        <Text type="small-header">{title}</Text>
      ) : (
        <>{title}</>
      )}
      {typeof subtitle === 'string' ? (
        <Text type="caption">{subtitle}</Text>
      ) : (
        <>{subtitle}</>
      )}
    </Flex>
  );

  if (!disabled) {
    return (
      <StyledTooltip
        {...rest}
        className={className}
        dataTheme={themeOverride}
        open={open}
        title={renderTooltip()}
      >
        <div className="tooltip-wrapper">{children}</div>
      </StyledTooltip>
    );
  }

  return children;
};
