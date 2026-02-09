import type { ReactNode } from 'react';

import { Flex } from 'src/components/flex/Flex';
import { Text } from 'src/components/text/Text';
import {
  Tooltip as RadixTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'src/components/ui/tooltip';
import type { BaseProps } from 'src/types/BaseProps';
import type { Theme } from 'src/types/Theme';
import { cn } from 'src/utils/cn';

type Placement =
  | 'bottom'
  | 'bottom-end'
  | 'bottom-start'
  | 'left'
  | 'left-end'
  | 'left-start'
  | 'right'
  | 'right-end'
  | 'right-start'
  | 'top'
  | 'top-end'
  | 'top-start';

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
   * Delay in ms before the tooltip appears.
   * @default 0
   */
  enterDelay?: number;

  /**
   * Delay in ms before the tooltip appears on subsequent hovers.
   * @default 0
   */
  enterNextDelay?: number;

  /**
   * Max width of the tooltip in px
   */
  maxWidth?: number;

  /**
   * Override to stay open.
   * @default false
   */
  open?: boolean;

  /**
   * Placement of the tooltip.
   * @default 'bottom'
   */
  placement?: Placement;

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
};

/**
 * Parse a MUI-style placement string into Radix side and align values.
 */
const parsePlacement = (
  placement?: Placement,
): {
  align: 'center' | 'end' | 'start';
  side: 'bottom' | 'left' | 'right' | 'top';
} => {
  if (!placement) {
    return { align: 'center', side: 'bottom' };
  }
  const parts = placement.split('-') as [
    'bottom' | 'left' | 'right' | 'top',
    ('end' | 'start')?,
  ];
  return {
    align: parts[1] ?? 'center',
    side: parts[0],
  };
};

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
 * @example Controlled tooltip
 * const [isOpen, setIsOpen] = useState(false);
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
 */
export const Tooltip = ({
  children,
  className,
  disabled = false,
  enterDelay,
  enterNextDelay,
  maxWidth,
  open,
  placement,
  subtitle,
  themeOverride = 'night',
  title,
}: TooltipProps) => {
  const { align, side } = parsePlacement(placement);
  const delayDuration = enterDelay ?? enterNextDelay ?? 0;

  const renderTooltip = () => (
    <Flex
      className={cn('wrap-break-word')}
      flexDirection="column"
      gap={8}
      style={{
        maxWidth: maxWidth ? `${maxWidth}px` : undefined,
      }}
    >
      {typeof title === 'string' ? (
        <Text type="small-header">{title}</Text>
      ) : (
        <>{title}</>
      )}
      {subtitle !== undefined &&
        (typeof subtitle === 'string' ? (
          <Text type="caption">{subtitle}</Text>
        ) : (
          <>{subtitle}</>
        ))}
    </Flex>
  );

  if (disabled) {
    return children;
  }

  return (
    <TooltipProvider delayDuration={delayDuration}>
      <RadixTooltip open={open}>
        <TooltipTrigger asChild>
          <div className={cn('tooltip-wrapper', className)}>{children}</div>
        </TooltipTrigger>
        <TooltipContent
          align={align}
          className={cn(
            'rounded-(--amino-radius-10) bg-(--amino-gray-0) p-(--amino-space-12) text-(--amino-text-color) shadow-(--amino-v3-shadow-large)',
          )}
          data-theme={themeOverride}
          side={side}
        >
          {renderTooltip()}
        </TooltipContent>
      </RadixTooltip>
    </TooltipProvider>
  );
};
