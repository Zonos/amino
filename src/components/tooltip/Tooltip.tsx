import type { ReactNode } from 'react';

import type { PopperProps } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import MuiTooltip, {
  type TooltipProps as MuiTooltipProps,
  tooltipClasses,
} from '@mui/material/Tooltip';

import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { Color, Theme } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';

import styles from './Tooltip.module.scss';

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
  [`& .${tooltipClasses.tooltip}.${tooltipClasses.tooltip}`]: {
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

  // Text styles are overwriting MuiTooltip styles, causing text to be incorrect color
  const textColor = themeOverride === 'night' ? 'gray1200' : 'gray0';

  if (showTooltip) {
    return (
      <StyledTooltip
        {...rest}
        background={background}
        className={className}
        dataTheme={themeOverride || aminoTheme}
        open={open}
        title={
          <VStack className={styles.styledVStack} spacing={8}>
            {title && (
              <Text color={textColor} isUppercase={false} type="small-header">
                {title}
              </Text>
            )}
            {typeof subtitle === 'string' ? (
              <Text color={textColor} type="caption">
                {subtitle}
              </Text>
            ) : (
              subtitle
            )}
          </VStack>
        }
      >
        {tag === 'span' ? (
          <span className={styles.childWrapper}>
            {children}
            <span className={styles.hiddenSpan} />
          </span>
        ) : (
          <div className={styles.childWrapper}>
            {children}
            <span className={styles.hiddenSpan} />
          </div>
        )}
      </StyledTooltip>
    );
  }

  return tag === 'span' ? <span>{children}</span> : <div>{children}</div>;
};
