import type { ReactElement, ReactNode } from 'react';

import type { PopperProps } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import MuiTooltip, {
  type TooltipProps as MuiTooltipProps,
  tooltipClasses,
} from '@mui/material/Tooltip';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';

export type TooltipProps = BaseProps & {
  /**
   * The content of the tooltip.
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
  themeOverride?: Theme;
  /**
   * The component that will trigger the tooltip.
   */
  triggerComponent: ReactElement;
} & Partial<Omit<MuiTooltipProps, 'children'>>;

const StyledTooltip = muiStyled(
  ({
    className,
    dataTheme,
    ...props
  }: MuiTooltipProps & { dataTheme: Theme }) => (
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
)(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.gray0,
    borderRadius: theme.radius10,
    boxShadow: theme.v3ShadowLarge,
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
  themeOverride,
  title: _title,
  triggerComponent,
  ...rest
}: TooltipProps) => {
  const { aminoTheme } = useAminoTheme();

  const renderTooltip = () => (
    <div>
      {typeof children === 'string' ? (
        <Text type="caption">{children}</Text>
      ) : (
        <>{children}</>
      )}
    </div>
  );

  if (!disabled) {
    return (
      <StyledTooltip
        {...rest}
        className={className}
        dataTheme={themeOverride || aminoTheme}
        open={open}
        title={renderTooltip()}
      >
        <div>{triggerComponent}</div>
      </StyledTooltip>
    );
  }

  return triggerComponent;
};
