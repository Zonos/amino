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

/**
 * Tooltip component displays informative text when users hover over, focus on, or tap an element.
 * It supports titles, subtitles, and customization of placement and theme.
 *
 * @example Basic tooltip
 * <Tooltip title="More information">
 *   <Button>Hover me</Button>
 * </Tooltip>
 *
 * @example With subtitle
 * <Tooltip
 *   title="User profile"
 *   subtitle="View and edit your personal information"
 * >
 *   <Avatar>JD</Avatar>
 * </Tooltip>
 *
 * @example With placement
 * <Tooltip title="Top placement" placement="top">
 *   <span>Hover me</span>
 * </Tooltip>
 *
 * <Tooltip title="Bottom placement" placement="bottom">
 *   <span>Hover me</span>
 * </Tooltip>
 *
 * <Tooltip title="Left placement" placement="left">
 *   <span>Hover me</span>
 * </Tooltip>
 *
 * <Tooltip title="Right placement" placement="right">
 *   <span>Hover me</span>
 * </Tooltip>
 *
 * @example Controlled tooltip
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Button onClick={() => setIsOpen(!isOpen)}>
 *   Toggle tooltip
 * </Button>
 *
 * <Tooltip
 *   title="This tooltip is controlled programmatically"
 *   open={isOpen}
 * >
 *   <span>Hover won't affect this tooltip</span>
 * </Tooltip>
 *
 * @example Disabled tooltip
 * <Tooltip
 *   title="This won't show"
 *   disabled={true}
 * >
 *   <Button>Hover me (no tooltip)</Button>
 * </Tooltip>
 *
 * @example With custom theme
 * <Tooltip
 *   title="Custom theme"
 *   themeOverride="day"
 * >
 *   <Button>Hover me</Button>
 * </Tooltip>
 *
 * @example With arrow
 * <Tooltip
 *   title="Tooltip with arrow"
 *   arrow
 * >
 *   <Button>Hover me</Button>
 * </Tooltip>
 *
 * @example With JSX content
 * <Tooltip
 *   title={
 *     <div>
 *       <Text type="bold-label">Custom content</Text>
 *       <div>With formatting</div>
 *     </div>
 *   }
 * >
 *   <Button>Hover for rich content</Button>
 * </Tooltip>
 */
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
